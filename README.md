# Plagiarism Detector Using String Matching Algorithms

![Project Banner](images/dashboard.png)

A professional **DSA-based plagiarism detection system** built using **HTML, CSS, JavaScript, and Python**.  
This project detects exact copied content, near-duplicate text, and phrase-level similarity using classic string matching and hashing techniques such as **Naive String Matching, KMP Algorithm, Rabin-Karp Algorithm, Hashing, Sliding Window, and Shingling Similarity**.

---

## Project Overview

The **Plagiarism Detector Using String Matching Algorithms** is a web-based and CLI-based project that compares an original document with a submitted document and identifies copied or highly similar content.

The system analyzes both documents, detects matching sentences or phrases, calculates the plagiarism percentage, and generates a detailed plagiarism report.

This project is designed as a **Data Structures and Algorithms course project** and also works as a strong portfolio project for roles such as:

- Software Developer
- DSA Developer
- Backend Developer
- Text Processing Engineer
- EdTech Software Developer
- Academic Integrity System Developer
- JavaScript/Python Developer

---

## Problem Statement

Manual plagiarism checking is slow, repetitive, and unreliable. Teachers, universities, publishers, and content platforms need automated systems that can compare documents and detect copied or similar content efficiently.

This project solves the problem by using classical **string matching algorithms** and **hash-based comparison techniques** to identify copied content between two documents.

---

## Why Plagiarism Detection Is Important

Plagiarism detection helps maintain:

- Academic honesty
- Original content creation
- Fair evaluation
- Research integrity
- Copyright protection
- Quality of published content
- Trust in academic and professional work

---

## Real-World Use Cases

Plagiarism detection systems are used by:

| Domain | Usage |
|---|---|
| Colleges and Universities | Assignment, report, thesis, and research paper checking |
| EdTech Platforms | Student submission checking and online assessment validation |
| Publishers | Article, book, and research content verification |
| Content Platforms | Duplicate blog/article detection |
| Coding Platforms | Code similarity and copied solution detection |
| Research Organizations | Academic integrity verification |

---

## Project Workflow

```text
Input Documents
       ↓
Text Preprocessing
       ↓
Sentence Splitting
       ↓
Tokenization
       ↓
Naive String Matching
       ↓
KMP Algorithm
       ↓
Rabin-Karp Algorithm
       ↓
Shingling Similarity
       ↓
Similarity Score Calculation
       ↓
Matched Content Detection
       ↓
Final Plagiarism Report
```

---

## Architecture Diagram

```text
+---------------------------+
|       User Interface      |
| HTML + CSS + JavaScript   |
+-------------+-------------+
              |
              v
+---------------------------+
|      Document Input       |
| Original + Submitted Text |
+-------------+-------------+
              |
              v
+---------------------------+
|     Text Preprocessing    |
| Lowercase, Clean, Split   |
+-------------+-------------+
              |
              v
+---------------------------+
|   String Matching Engine  |
| Naive, KMP, Rabin-Karp    |
+-------------+-------------+
              |
              v
+---------------------------+
|   Similarity Calculator   |
| Shingling + Percentage    |
+-------------+-------------+
              |
              v
+---------------------------+
|        Final Report       |
| Score + Matches + Level   |
+---------------------------+
```

---

## Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Algorithm Implementation

- JavaScript for browser dashboard
- Python for CLI version

### DSA Concepts

- String Matching
- Naive Pattern Matching
- KMP Algorithm
- Rabin-Karp Algorithm
- Hashing
- Rolling Hash
- Sliding Window
- Set
- Array
- Tokenization
- Text Preprocessing
- Jaccard Similarity

---

## Features

- Professional responsive dashboard
- Original and submitted document input
- Text cleaning and preprocessing
- Sentence splitting
- Word tokenization
- Naive string matching
- KMP algorithm implementation
- Rabin-Karp algorithm implementation
- Hash-based pattern matching
- Shingling similarity detection
- Final plagiarism percentage
- Matched sentence display
- Algorithm-wise report
- Downloadable plagiarism report
- Python CLI version
- GitHub-ready folder structure
- Beginner-friendly and interview-explainable code

---

## Algorithms Used

### 1. Naive String Matching

Naive string matching checks every possible position of the pattern inside the text.

It is simple but less efficient for large text.

**Time Complexity:**

```text
O(n * m)
```

Where:

- `n` = length of text
- `m` = length of pattern

---

### 2. KMP Algorithm

The **Knuth-Morris-Pratt algorithm** improves string matching by using an **LPS array**.

LPS stands for **Longest Prefix Suffix**.  
It helps avoid repeated comparisons when a mismatch occurs.

**Time Complexity:**

```text
O(n + m)
```

KMP is useful in plagiarism detection because it can efficiently find copied sentences inside large documents.

---

### 3. Rabin-Karp Algorithm

The **Rabin-Karp algorithm** uses hashing to compare patterns with text windows.

Instead of comparing every character directly, it calculates hash values and compares them.

**Average Time Complexity:**

```text
O(n + m)
```

Rabin-Karp is useful when checking multiple patterns or large documents.

---

### 4. Shingling Similarity

Shingling divides text into small word groups.

Example:

```text
machine learning allows computers
learning allows computers to
allows computers to learn
```

These shingles are compared using **Jaccard Similarity**.

Formula:

```text
Similarity = Common Shingles / Total Unique Shingles * 100
```

Shingling helps detect lightly modified or phrase-level copied content.

---

## Similarity Score Formula

The final plagiarism percentage is calculated using a weighted score:

```text
Final Score = Sentence Match Percentage * 0.6 + Shingle Similarity * 0.4
```

This balances:

- Exact sentence matching
- Phrase-level similarity

---

## Folder Structure

```text
Plagiarism-Detector-String-Matching/
│
├── documents/
│   ├── original.txt
│   └── submitted.txt
│
├── src/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── outputs/
│   └── sample-output.txt
│
├── images/
│   ├── dashboard.png
│   ├── result.png
│   └── report.png
│
├── reports/
│   └── plagiarism-report.txt
│
├── docs/
│   └── algorithm-explanation.md
│
├── README.md
├── requirements.txt
├── .gitignore
└── main.py
```

---

## Folder Explanation

| Folder/File | Purpose |
|---|---|
| `documents/` | Stores sample original and submitted documents |
| `src/` | Contains HTML, CSS, and JavaScript frontend files |
| `outputs/` | Stores sample output screenshots or result files |
| `images/` | Stores project screenshots for README |
| `reports/` | Stores generated plagiarism reports |
| `docs/` | Stores algorithm explanation and documentation |
| `README.md` | Main GitHub documentation |
| `requirements.txt` | Project requirements information |
| `.gitignore` | Files ignored by Git |
| `main.py` | Python CLI version of the plagiarism detector |

---

## Installation and Setup

### Required Tools

Install the following:

- VS Code
- Google Chrome or any modern browser
- Git
- Python 3.x
- Live Server extension for VS Code, optional

---

## Create Project Folder

### Windows

```bash
mkdir Plagiarism-Detector-String-Matching
cd Plagiarism-Detector-String-Matching
mkdir documents src outputs images reports docs
type nul > src\index.html
type nul > src\style.css
type nul > src\script.js
type nul > README.md
type nul > requirements.txt
type nul > .gitignore
type nul > main.py
type nul > documents\original.txt
type nul > documents\submitted.txt
type nul > outputs\sample-output.txt
type nul > reports\plagiarism-report.txt
type nul > docs\algorithm-explanation.md
```

### Mac/Linux

```bash
mkdir Plagiarism-Detector-String-Matching
cd Plagiarism-Detector-String-Matching
mkdir documents src outputs images reports docs
touch src/index.html
touch src/style.css
touch src/script.js
touch README.md
touch requirements.txt
touch .gitignore
touch main.py
touch documents/original.txt
touch documents/submitted.txt
touch outputs/sample-output.txt
touch reports/plagiarism-report.txt
touch docs/algorithm-explanation.md
```

---

## How to Run the Frontend Project

### Method 1: Direct Browser Run

Open this file in your browser:

```text
src/index.html
```

### Method 2: VS Code Live Server

1. Open the project folder in VS Code
2. Install the Live Server extension
3. Right-click `index.html`
4. Click `Open with Live Server`

---

## How to Run the Python CLI Version

Make sure these files exist:

```text
documents/original.txt
documents/submitted.txt
```

Run:

```bash
python main.py
```

Or:

```bash
python3 main.py
```

---

## Sample Input

### `documents/original.txt`

```text
Artificial Intelligence is a branch of computer science that focuses on creating intelligent machines capable of performing tasks that normally require human intelligence.

Machine learning is a major area of artificial intelligence that allows computers to learn from data without being explicitly programmed.

Data structures and algorithms are important concepts in computer science because they help programmers solve computational problems efficiently.

A plagiarism detector is a software system that compares documents and identifies copied or highly similar content.

Colleges and universities use plagiarism detection tools to check assignments, project reports, research papers, and thesis submissions.

String matching algorithms such as KMP and Rabin-Karp are useful for finding patterns inside large text documents.

The KMP algorithm improves pattern matching by using the longest prefix suffix array to avoid unnecessary repeated comparisons.

The Rabin-Karp algorithm uses hashing to compare a pattern with different windows of text.

Shingling is a technique that divides text into small groups of words to detect phrase-level similarity.

Academic integrity is important because students should submit original work and avoid copying content from others.
```

### `documents/submitted.txt`

```text
Artificial Intelligence is a branch of computer science that focuses on creating intelligent machines capable of performing tasks that normally require human intelligence.

Machine learning allows computers to learn from data without being explicitly programmed and is one of the important areas of artificial intelligence.

Data structures and algorithms are important concepts in computer science because they help programmers solve computational problems efficiently.

A plagiarism detector is a software system that compares documents and identifies copied or highly similar content.

Many colleges and universities use plagiarism tools to check assignments, research papers, project reports, and thesis submissions.

The Rabin-Karp algorithm uses hashing to compare a pattern with different windows of text.

Shingling divides text into small word groups so that phrase-level similarity can be detected.

Cloud computing provides scalable computing resources through the internet.

Cybersecurity protects systems, networks, and data from unauthorized access.

Database management systems are used to store, manage, and retrieve structured data.
```

---

## Sample Output

```text
============================================================
PLAGIARISM DETECTION REPORT
============================================================

Total Original Sentences Checked: 10

Naive String Matching:
Matches Found: 4

KMP Algorithm:
Matches Found: 4

Rabin-Karp Algorithm:
Matches Found: 4

Shingling Similarity:
Around 50% to 65%

Final Plagiarism Percentage:
Around 50% to 65%

Plagiarism Level:
Moderate Plagiarism
```

---

## Screenshots

### Dashboard

![Dashboard Screenshot](images/dashboard.png)

### Plagiarism Result

![Result Screenshot](images/result.png)

### Generated Report

![Report Screenshot](images/report.png)

---

## Screenshots to Add in GitHub

Add these screenshots inside the `images/` folder:

| Screenshot | File Name |
|---|---|
| Project folder structure | `folder-structure.png` |
| Dashboard UI | `dashboard.png` |
| Original document input | `original-document.png` |
| Submitted document input | `submitted-document.png` |
| KMP matching output | `kmp-output.png` |
| Rabin-Karp matching output | `rabin-karp-output.png` |
| Final plagiarism score | `result.png` |
| Downloaded report | `report.png` |
| GitHub repo preview | `github-preview.png` |

---

## GitHub Upload Steps

### Step 1: Initialize Git

```bash
git init
```

### Step 2: Add Files

```bash
git add .
```

### Step 3: First Commit

```bash
git commit -m "Initial commit: setup plagiarism detector project"
```

### Step 4: Add GitHub Remote

Replace `Swijay` with your GitHub username if needed:

```bash
git remote add origin https://github.com/Swijay/Plagiarism-Detector-String-Matching.git
```

### Step 5: Push to GitHub

```bash
git branch -M main
git push -u origin main
```

---

## Recommended Repository Details

### Repository Name

```text
Plagiarism-Detector-String-Matching
```

### Repository Description

```text
A DSA-based plagiarism detection system using KMP, Rabin-Karp, Naive String Matching, Hashing, Sliding Window, and Shingling Similarity with a professional HTML CSS JavaScript dashboard and Python CLI.
```

### GitHub Topics

```text
dsa
javascript
python
plagiarism-detection
string-matching
kmp-algorithm
rabin-karp
hashing
sliding-window
text-processing
academic-integrity
frontend-project
```

---

## Proof Building Strategy

### Day 1: Setup and Document Input

**Work Completed:**

- Created folder structure
- Added dashboard layout
- Added original and submitted text input areas

**Commit Message:**

```bash
git commit -m "Setup project structure and document input UI"
```

**Screenshots:**

- Folder structure
- Initial dashboard
- Text input boxes

---

### Day 2: Text Preprocessing

**Work Completed:**

- Added lowercase conversion
- Removed unnecessary symbols
- Added sentence splitting
- Added tokenization

**Commit Message:**

```bash
git commit -m "Add text preprocessing and tokenization logic"
```

**Screenshots:**

- Cleaned text output
- Console output
- Preprocessed document view

---

### Day 3: Naive String Matching

**Work Completed:**

- Implemented basic string matching
- Tested exact copied sentence matching

**Commit Message:**

```bash
git commit -m "Implement naive string matching algorithm"
```

**Screenshots:**

- Naive matching result
- Matched copied sentences

---

### Day 4: KMP Algorithm

**Work Completed:**

- Implemented LPS array
- Implemented KMP search
- Displayed KMP match count

**Commit Message:**

```bash
git commit -m "Implement KMP algorithm for exact plagiarism detection"
```

**Screenshots:**

- KMP match count
- Matched sentence list
- Algorithm report

---

### Day 5: Rabin-Karp Algorithm

**Work Completed:**

- Added rolling hash logic
- Implemented Rabin-Karp matching
- Compared Rabin-Karp result with KMP

**Commit Message:**

```bash
git commit -m "Add Rabin-Karp hashing based string matching"
```

**Screenshots:**

- Rabin-Karp match count
- Hash-based matching report

---

### Day 6: Final Report and Documentation

**Work Completed:**

- Added shingling similarity
- Added final plagiarism percentage
- Added downloadable report
- Updated README
- Added screenshots

**Commit Message:**

```bash
git commit -m "Add final plagiarism report and complete documentation"
```

**Screenshots:**

- Final dashboard
- Similarity score
- Matched content report
- Downloaded report file
- GitHub repository preview

---

## Interview Questions and Answers

### 1. Explain your project.

My project is a **Plagiarism Detector Using String Matching Algorithms**. It compares an original document with a submitted document and detects copied or similar content. The system uses text preprocessing, sentence splitting, tokenization, Naive String Matching, KMP Algorithm, Rabin-Karp Algorithm, and Shingling Similarity. It calculates a plagiarism percentage and displays matched sentences along with an algorithm-based report.

---

### 2. Why did you use KMP Algorithm?

I used KMP because it performs efficient string matching using the LPS array. Unlike naive matching, KMP avoids unnecessary repeated comparisons after a mismatch.

Its time complexity is:

```text
O(n + m)
```

---

### 3. What is the LPS array?

LPS stands for **Longest Prefix Suffix**. It stores the length of the longest proper prefix that is also a suffix for each prefix of the pattern. It helps KMP skip unnecessary comparisons.

---

### 4. Why did you use Rabin-Karp Algorithm?

Rabin-Karp is useful because it uses hashing to compare patterns with text windows. It is effective when searching multiple patterns or comparing large text documents.

---

### 5. What is a hash collision?

A hash collision occurs when two different strings generate the same hash value. In this project, after hash values match, the actual substring is also verified to avoid false matches.

---

### 6. What is shingling?

Shingling is a technique where text is divided into small groups of words. These groups are compared between documents to detect phrase-level similarity.

---

### 7. How do you calculate plagiarism percentage?

The project calculates plagiarism percentage using:

```text
Final Score = Sentence Match Percentage * 0.6 + Shingle Similarity * 0.4
```

This combines exact sentence matching with phrase-level similarity.

---

### 8. What is the time complexity of your project?

- Naive Matching: `O(n * m)`
- KMP Algorithm: `O(n + m)`
- Rabin-Karp Average Case: `O(n + m)`
- Shingling Similarity: `O(a + b)`

Where `n` is text length, `m` is pattern length, and `a`, `b` are the number of shingles.

---

### 9. What are the limitations of your project?

The project detects exact copied content and phrase-level similarity. However, it may not fully detect advanced paraphrasing where the meaning is copied but the wording is completely changed.

Future improvements include:

- PDF upload
- DOCX upload
- MinHash
- LSH
- Semantic similarity
- Backend API
- AI-based paraphrase detection
- Code plagiarism detection

---

### 10. How is this project useful in real life?

This project is useful for colleges, universities, EdTech platforms, publishers, content platforms, and coding platforms. It shows how DSA algorithms can solve a practical real-world text-processing problem.

---

## Learning Outcomes

Through this project, I learned:

- How plagiarism detection systems work
- How to preprocess text
- How to split text into sentences and words
- How to implement Naive String Matching
- How to implement KMP Algorithm
- How to build the LPS array
- How Rabin-Karp uses hashing
- How rolling hash works
- How shingling detects phrase-level similarity
- How to calculate plagiarism percentage
- How to build a professional frontend dashboard
- How to generate a report
- How to document and upload a DSA project on GitHub

---

## Future Improvements

- Add PDF file upload
- Add DOCX file upload
- Add MinHash algorithm
- Add LSH for large-scale document comparison
- Add semantic similarity using NLP
- Add backend API using FastAPI or Node.js
- Add database support
- Add login system
- Add downloadable PDF report
- Add code plagiarism detection
- Add multi-document comparison

---

## Project Status

```text
Completed: Core plagiarism detection system
Completed: KMP algorithm
Completed: Rabin-Karp algorithm
Completed: Shingling similarity
Completed: Professional dashboard
Completed: Python CLI version
Completed: Report generation
Planned: PDF/DOCX upload and semantic similarity
```

---

## Author

**Swijay Singh**

DSA Project | String Matching Algorithms | JavaScript | Python | Text Processing | Academic Integrity System

---

## License

This project is open-source and available under the **MIT License**.
