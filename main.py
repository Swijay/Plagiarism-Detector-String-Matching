import re


# -----------------------------
# Text Preprocessing
# -----------------------------
def clean_text(text):
    text = text.lower()
    text = re.sub(r"[^\w\s.]", "", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def split_into_sentences(text):
    sentences = text.split(".")
    return [sentence.strip() for sentence in sentences if len(sentence.strip()) > 10]


def tokenize(text):
    return clean_text(text).split()


# -----------------------------
# Naive String Matching
# Time Complexity: O(n * m)
# -----------------------------
def naive_search(text, pattern):
    positions = []
    n = len(text)
    m = len(pattern)

    if m == 0 or n == 0 or m > n:
        return positions

    for i in range(n - m + 1):
        j = 0

        while j < m and text[i + j] == pattern[j]:
            j += 1

        if j == m:
            positions.append(i)

    return positions


# -----------------------------
# KMP Algorithm
# Time Complexity: O(n + m)
# -----------------------------
def build_lps(pattern):
    lps = [0] * len(pattern)

    length = 0
    i = 1

    while i < len(pattern):
        if pattern[i] == pattern[length]:
            length += 1
            lps[i] = length
            i += 1
        else:
            if length != 0:
                length = lps[length - 1]
            else:
                lps[i] = 0
                i += 1

    return lps


def kmp_search(text, pattern):
    positions = []

    if len(pattern) == 0 or len(text) == 0 or len(pattern) > len(text):
        return positions

    lps = build_lps(pattern)

    i = 0
    j = 0

    while i < len(text):
        if text[i] == pattern[j]:
            i += 1
            j += 1

        if j == len(pattern):
            positions.append(i - j)
            j = lps[j - 1]

        elif i < len(text) and text[i] != pattern[j]:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1

    return positions


# -----------------------------
# Rabin-Karp Algorithm
# Average Time Complexity: O(n + m)
# -----------------------------
def rabin_karp_search(text, pattern):
    positions = []

    prime = 101
    base = 256

    n = len(text)
    m = len(pattern)

    if m == 0 or n == 0 or m > n:
        return positions

    pattern_hash = 0
    text_hash = 0
    h = 1

    for _ in range(m - 1):
        h = (h * base) % prime

    for i in range(m):
        pattern_hash = (base * pattern_hash + ord(pattern[i])) % prime
        text_hash = (base * text_hash + ord(text[i])) % prime

    for i in range(n - m + 1):
        if pattern_hash == text_hash:
            if text[i:i + m] == pattern:
                positions.append(i)

        if i < n - m:
            text_hash = (
                base * (text_hash - ord(text[i]) * h)
                + ord(text[i + m])
            ) % prime

            if text_hash < 0:
                text_hash += prime

    return positions


# -----------------------------
# Shingling Similarity
# -----------------------------
def create_shingles(words, size=4):
    shingles = set()

    for i in range(len(words) - size + 1):
        shingle = " ".join(words[i:i + size])
        shingles.add(shingle)

    return shingles


def jaccard_similarity(set_a, set_b):
    if len(set_a) == 0 and len(set_b) == 0:
        return 0

    intersection = set_a.intersection(set_b)
    union = set_a.union(set_b)

    return (len(intersection) / len(union)) * 100


# -----------------------------
# File Reading
# -----------------------------
def read_file(file_path):
    try:
        with open(file_path, "r", encoding="utf-8") as file:
            return file.read()
    except FileNotFoundError:
        print(f"Error: File not found - {file_path}")
        return ""


# -----------------------------
# Plagiarism Level
# -----------------------------
def get_plagiarism_level(score):
    if score >= 75:
        return "High Plagiarism"
    elif score >= 45:
        return "Moderate Plagiarism"
    elif score >= 20:
        return "Low Plagiarism"
    else:
        return "Very Low Plagiarism"


# -----------------------------
# Main Detection Logic
# -----------------------------
def detect_plagiarism(original_text, submitted_text):
    original_clean = clean_text(original_text)
    submitted_clean = clean_text(submitted_text)

    original_sentences = split_into_sentences(original_clean)

    naive_matches = []
    kmp_matches = []
    rabin_karp_matches = []

    for sentence in original_sentences:
        naive_result = naive_search(submitted_clean, sentence)
        kmp_result = kmp_search(submitted_clean, sentence)
        rk_result = rabin_karp_search(submitted_clean, sentence)

        if naive_result:
            naive_matches.append(sentence)

        if kmp_result:
            kmp_matches.append(sentence)

        if rk_result:
            rabin_karp_matches.append(sentence)

    original_words = tokenize(original_clean)
    submitted_words = tokenize(submitted_clean)

    original_shingles = create_shingles(original_words, 4)
    submitted_shingles = create_shingles(submitted_words, 4)

    shingle_score = jaccard_similarity(original_shingles, submitted_shingles)

    if len(original_sentences) == 0:
        sentence_match_percentage = 0
    else:
        sentence_match_percentage = (len(kmp_matches) / len(original_sentences)) * 100

    final_score = round((sentence_match_percentage * 0.6) + (shingle_score * 0.4), 2)

    report = {
        "total_sentences": len(original_sentences),
        "naive_matches": naive_matches,
        "kmp_matches": kmp_matches,
        "rabin_karp_matches": rabin_karp_matches,
        "shingle_score": round(shingle_score, 2),
        "final_score": final_score,
        "level": get_plagiarism_level(final_score)
    }

    return report


# -----------------------------
# Report Printing
# -----------------------------
def print_report(report):
    print("\n" + "=" * 60)
    print("PLAGIARISM DETECTION REPORT")
    print("=" * 60)

    print(f"\nTotal Original Sentences Checked: {report['total_sentences']}")

    print("\nNaive String Matching:")
    print(f"Matches Found: {len(report['naive_matches'])}")

    print("\nKMP Algorithm:")
    print(f"Matches Found: {len(report['kmp_matches'])}")

    print("\nRabin-Karp Algorithm:")
    print(f"Matches Found: {len(report['rabin_karp_matches'])}")

    print("\nShingling Similarity:")
    print(f"{report['shingle_score']}%")

    print("\nFinal Plagiarism Percentage:")
    print(f"{report['final_score']}%")

    print("\nPlagiarism Level:")
    print(report["level"])

    print("\nMatched Sentences:")
    if report["kmp_matches"]:
        for index, sentence in enumerate(report["kmp_matches"], start=1):
            print(f"{index}. {sentence}")
    else:
        print("No exact matched sentences found.")

    print("\nConclusion:")
    if report["final_score"] >= 75:
        print("High plagiarism detected. Strong copied content indication found.")
    elif report["final_score"] >= 45:
        print("Moderate plagiarism detected. Manual review is recommended.")
    elif report["final_score"] >= 20:
        print("Low plagiarism detected. Some similar content may exist.")
    else:
        print("Very low plagiarism detected. No major copied content found.")

    print("=" * 60)


# -----------------------------
# Save Report
# -----------------------------
def save_report(report, output_path="reports/plagiarism-report.txt"):
    with open(output_path, "w", encoding="utf-8") as file:
        file.write("PLAGIARISM DETECTION REPORT\n")
        file.write("=" * 60 + "\n\n")

        file.write(f"Total Original Sentences Checked: {report['total_sentences']}\n\n")

        file.write("Naive String Matching:\n")
        file.write(f"Matches Found: {len(report['naive_matches'])}\n\n")

        file.write("KMP Algorithm:\n")
        file.write(f"Matches Found: {len(report['kmp_matches'])}\n\n")

        file.write("Rabin-Karp Algorithm:\n")
        file.write(f"Matches Found: {len(report['rabin_karp_matches'])}\n\n")

        file.write("Shingling Similarity:\n")
        file.write(f"{report['shingle_score']}%\n\n")

        file.write("Final Plagiarism Percentage:\n")
        file.write(f"{report['final_score']}%\n\n")

        file.write("Plagiarism Level:\n")
        file.write(f"{report['level']}\n\n")

        file.write("Matched Sentences:\n")

        if report["kmp_matches"]:
            for index, sentence in enumerate(report["kmp_matches"], start=1):
                file.write(f"{index}. {sentence}\n")
        else:
            file.write("No exact matched sentences found.\n")

    print(f"\nReport saved successfully at: {output_path}")


# -----------------------------
# Program Entry Point
# -----------------------------
def main():
    print("Plagiarism Detector Using String Matching Algorithms")
    print("---------------------------------------------------")

    original_path = "documents/original.txt"
    submitted_path = "documents/submitted.txt"

    original_text = read_file(original_path)
    submitted_text = read_file(submitted_path)

    if not original_text or not submitted_text:
        print("Please make sure both files exist:")
        print("documents/original.txt")
        print("documents/submitted.txt")
        return

    report = detect_plagiarism(original_text, submitted_text)

    print_report(report)
    save_report(report)


if __name__ == "__main__":
    main()