# Algorithm Explanation

## Naive String Matching

Naive string matching checks every possible position of the pattern inside the text.

Time Complexity: O(n * m)

## KMP Algorithm

KMP uses the LPS array to avoid unnecessary comparisons.

Time Complexity: O(n + m)

## Rabin-Karp Algorithm

Rabin-Karp uses hashing to compare pattern and text windows.

Average Time Complexity: O(n + m)

## Shingling Similarity

Shingling divides text into word groups and compares common phrases using Jaccard Similarity.

Formula:

Similarity = Common Shingles / Total Unique Shingles * 100