# Sorting

| ALGORITHM                   | CODE           | IN PLACE | STABLE | BEST     | AVERAGE                    | WORST               | REMARKS          |
| --------------------------- | -------------- | -------- | ------ | -------- | -------------------------- | ------------------- | ---------------- |
| selection sort              | Selection.java | ✔        |        | ½ n 2    | ½ n 2                      | ½ n 2               | n exchanges;     quadratic in best case      |
| insertion sort              | Insertion.java | ✔        | ✔      | n        | ¼ n 2                      | ½ n 2               | use for small or partially-sorted arrays     |
| bubble sort                 | Bubble.java    | ✔        | ✔      | n        | ½ n 2 ½ n 2| rarely useful; dominated by insertion sort |
| shellsort                   | Shell.java     | ✔        |        | n log3 n | unknown                    | c n 3/2 |tight code; subquadratic|
|mergesort|Merge.java|✔|| ½ n log2 n| n log2 n| n log2 n |n log n guarantee; stable|
|quicksort |Quick.java| ✔|| n log2 n| 2 n ln n| ½ n 2 n |log n probabilistic guarantee;fastest in practice|
|heapsort| Heap.java |✔|| n †| 2 n log2 n |2 n log2 n n log n guarantee; in place, † n log2 n if all keys are distinct|
