// ======================================================
// Plagiarism Detector Using String Matching Algorithms
// Algorithms: Naive Matching, KMP, Rabin-Karp, Shingling
// Author: Swijay Singh
// ======================================================


// -----------------------------
// Sample Documents
// -----------------------------

function loadSampleOriginal() {
    const sample = `Artificial Intelligence is a branch of computer science that focuses on building smart machines.

Machine learning allows computers to learn from data without being explicitly programmed.

Data structures and algorithms are important for solving computational problems efficiently.

Plagiarism detection is used by colleges and universities to identify copied academic content.

String matching algorithms such as KMP and Rabin-Karp help in finding patterns inside large text documents.`;

    document.getElementById("originalText").value = sample;
}

function loadSampleSubmitted() {
    const sample = `Machine learning allows computers to learn from data without being explicitly programmed.

Plagiarism detection is used in universities and colleges to find copied academic content.

String matching algorithms such as KMP and Rabin-Karp help in finding patterns inside large text documents.

Cloud computing provides scalable computing resources over the internet.`;

    document.getElementById("submittedText").value = sample;
}


// -----------------------------
// Text Preprocessing
// -----------------------------

function cleanText(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s.]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

function splitIntoSentences(text) {
    return text
        .split(".")
        .map(sentence => sentence.trim())
        .filter(sentence => sentence.length > 10);
}

function tokenize(text) {
    return cleanText(text)
        .split(" ")
        .filter(word => word.length > 0);
}


// -----------------------------
// Naive String Matching
// Time Complexity: O(n*m)
// -----------------------------

function naiveSearch(text, pattern) {
    const positions = [];
    const n = text.length;
    const m = pattern.length;

    if (m === 0 || n === 0 || m > n) {
        return positions;
    }

    for (let i = 0; i <= n - m; i++) {
        let j = 0;

        while (j < m && text[i + j] === pattern[j]) {
            j++;
        }

        if (j === m) {
            positions.push(i);
        }
    }

    return positions;
}


// -----------------------------
// KMP Algorithm
// Time Complexity: O(n + m)
// -----------------------------

function buildLPS(pattern) {
    const lps = new Array(pattern.length).fill(0);

    let length = 0;
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length !== 0) {
                length = lps[length - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

function kmpSearch(text, pattern) {
    const positions = [];

    if (pattern.length === 0 || text.length === 0 || pattern.length > text.length) {
        return positions;
    }

    const lps = buildLPS(pattern);

    let i = 0;
    let j = 0;

    while (i < text.length) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            positions.push(i - j);
            j = lps[j - 1];
        } else if (i < text.length && text[i] !== pattern[j]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return positions;
}


// -----------------------------
// Rabin-Karp Algorithm
// Time Complexity: Average O(n + m)
// -----------------------------

function rabinKarpSearch(text, pattern) {
    const positions = [];

    const prime = 101;
    const base = 256;

    const n = text.length;
    const m = pattern.length;

    if (m === 0 || n === 0 || m > n) {
        return positions;
    }

    let patternHash = 0;
    let textHash = 0;
    let h = 1;

    for (let i = 0; i < m - 1; i++) {
        h = (h * base) % prime;
    }

    for (let i = 0; i < m; i++) {
        patternHash = (base * patternHash + pattern.charCodeAt(i)) % prime;
        textHash = (base * textHash + text.charCodeAt(i)) % prime;
    }

    for (let i = 0; i <= n - m; i++) {
        if (patternHash === textHash) {
            let match = true;

            for (let j = 0; j < m; j++) {
                if (text[i + j] !== pattern[j]) {
                    match = false;
                    break;
                }
            }

            if (match) {
                positions.push(i);
            }
        }

        if (i < n - m) {
            textHash = (
                base * (textHash - text.charCodeAt(i) * h) +
                text.charCodeAt(i + m)
            ) % prime;

            if (textHash < 0) {
                textHash += prime;
            }
        }
    }

    return positions;
}


// -----------------------------
// Shingling Similarity
// Used to detect phrase-level similarity
// -----------------------------

function createShingles(words, size = 4) {
    const shingles = new Set();

    for (let i = 0; i <= words.length - size; i++) {
        const shingle = words.slice(i, i + size).join(" ");
        shingles.add(shingle);
    }

    return shingles;
}

function calculateJaccardSimilarity(setA, setB) {
    if (setA.size === 0 && setB.size === 0) {
        return 0;
    }

    const intersection = new Set();

    for (let item of setA) {
        if (setB.has(item)) {
            intersection.add(item);
        }
    }

    const union = new Set([...setA, ...setB]);

    return (intersection.size / union.size) * 100;
}


// -----------------------------
// Plagiarism Level
// -----------------------------

function getPlagiarismLevel(score) {
    if (score >= 75) {
        return "High Plagiarism";
    } else if (score >= 45) {
        return "Moderate Plagiarism";
    } else if (score >= 20) {
        return "Low Plagiarism";
    } else {
        return "Very Low Plagiarism";
    }
}


// -----------------------------
// Main Detection Function
// -----------------------------

function detectPlagiarism() {
    const originalInput = document.getElementById("originalText").value;
    const submittedInput = document.getElementById("submittedText").value;

    if (!originalInput.trim() || !submittedInput.trim()) {
        alert("Please enter both original and submitted documents.");
        return;
    }

    const originalClean = cleanText(originalInput);
    const submittedClean = cleanText(submittedInput);

    const originalSentences = splitIntoSentences(originalClean);

    let naiveMatches = [];
    let kmpMatches = [];
    let rabinKarpMatches = [];

    originalSentences.forEach(sentence => {
        const naivePositions = naiveSearch(submittedClean, sentence);
        const kmpPositions = kmpSearch(submittedClean, sentence);
        const rkPositions = rabinKarpSearch(submittedClean, sentence);

        if (naivePositions.length > 0) {
            naiveMatches.push(sentence);
        }

        if (kmpPositions.length > 0) {
            kmpMatches.push(sentence);
        }

        if (rkPositions.length > 0) {
            rabinKarpMatches.push(sentence);
        }
    });

    const originalWords = tokenize(originalClean);
    const submittedWords = tokenize(submittedClean);

    const originalShingles = createShingles(originalWords, 4);
    const submittedShingles = createShingles(submittedWords, 4);

    const shingleSimilarity = calculateJaccardSimilarity(originalShingles, submittedShingles);

    const sentenceMatchPercentage = originalSentences.length === 0
        ? 0
        : (kmpMatches.length / originalSentences.length) * 100;

    const finalScore = Math.round((sentenceMatchPercentage * 0.6) + (shingleSimilarity * 0.4));

    displayResults(
        finalScore,
        naiveMatches,
        kmpMatches,
        rabinKarpMatches,
        shingleSimilarity,
        originalSentences.length
    );
}


// -----------------------------
// Display Results
// -----------------------------

function displayResults(finalScore, naiveMatches, kmpMatches, rabinKarpMatches, shingleSimilarity, totalSentences) {
    const finalScoreElement = document.getElementById("finalScore");
    const kmpScoreElement = document.getElementById("kmpScore");
    const rkScoreElement = document.getElementById("rkScore");
    const shingleScoreElement = document.getElementById("shingleScore");
    const matchedSentencesElement = document.getElementById("matchedSentences");
    const algorithmReportElement = document.getElementById("algorithmReport");
    const progressFill = document.getElementById("progressFill");
    const levelText = document.getElementById("levelText");

    finalScoreElement.textContent = `${finalScore}%`;
    kmpScoreElement.textContent = kmpMatches.length;
    rkScoreElement.textContent = rabinKarpMatches.length;
    shingleScoreElement.textContent = `${shingleSimilarity.toFixed(2)}%`;

    progressFill.style.width = `${finalScore}%`;
    levelText.textContent = getPlagiarismLevel(finalScore);

    if (kmpMatches.length === 0) {
        matchedSentencesElement.innerHTML = "No exact sentence-level plagiarism found.";
    } else {
        matchedSentencesElement.innerHTML = "";

        kmpMatches.forEach((match, index) => {
            const div = document.createElement("div");
            div.className = "match-item";
            div.innerHTML = `<strong>Match ${index + 1}:</strong><br>${match}`;
            matchedSentencesElement.appendChild(div);
        });
    }

    const report = `
PLAGIARISM DETECTION REPORT

Total Original Sentences Checked: ${totalSentences}

Naive String Matching:
Matches Found: ${naiveMatches.length}

KMP Algorithm:
Matches Found: ${kmpMatches.length}

Rabin-Karp Algorithm:
Matches Found: ${rabinKarpMatches.length}

Shingling Similarity:
${shingleSimilarity.toFixed(2)}%

Final Plagiarism Percentage:
${finalScore}%

Plagiarism Level:
${getPlagiarismLevel(finalScore)}

Conclusion:
${generateConclusion(finalScore)}
`;

    algorithmReportElement.textContent = report;
}


// -----------------------------
// Conclusion Generator
// -----------------------------

function generateConclusion(score) {
    if (score >= 75) {
        return "The submitted document has high similarity with the original document. Strong plagiarism indication found.";
    } else if (score >= 45) {
        return "The submitted document has moderate similarity. Manual review is recommended.";
    } else if (score >= 20) {
        return "The submitted document has low similarity. Some copied or similar phrases may exist.";
    } else {
        return "The submitted document has very low similarity. No major plagiarism detected.";
    }
}


// -----------------------------
// Clear All
// -----------------------------

function clearAll() {
    document.getElementById("originalText").value = "";
    document.getElementById("submittedText").value = "";
    document.getElementById("finalScore").textContent = "0%";
    document.getElementById("kmpScore").textContent = "0";
    document.getElementById("rkScore").textContent = "0";
    document.getElementById("shingleScore").textContent = "0%";
    document.getElementById("matchedSentences").textContent = "No matches found yet.";
    document.getElementById("algorithmReport").textContent = "Run detection to generate report.";
    document.getElementById("progressFill").style.width = "0%";
    document.getElementById("levelText").textContent = "Not Checked";
}


// -----------------------------
// Download Report
// -----------------------------

function downloadReport() {
    const reportText = document.getElementById("algorithmReport").textContent;

    if (!reportText || reportText.includes("Run detection")) {
        alert("Please run plagiarism detection first.");
        return;
    }

    const blob = new Blob([reportText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "plagiarism-report.txt";
    link.click();

    URL.revokeObjectURL(url);
}