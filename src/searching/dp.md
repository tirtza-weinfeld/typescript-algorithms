# Dynamic Programming Cheat Sheet

## Solve A Problem

|                   | Suffix                                                        | Prefix | Substring |
| :---------------- | :------------------------------------------------------------ | :----- | :-------- |
| Subproblem        | `x(i)=A[i:]`, items `i` to `n`                                |        |           |
| Relate            | `x(i)=x(i+1) ...`, Is first item `ai` in a valid subset `A\`` |        |           |
| Topological order | decreasing `i`                                                |        |           |
| Base              | `x(n)`                                                        |        |           |
| Original problem  | `x(0)`                                                        |        |           |


 Time             
