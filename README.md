
the result 2/3 is independent of the number of silver cards

```
time node app.js 
{
  unitTestResult: [
    { i: 0, value01: 1, value13: 3 },
    { i: 1, value01: 1, value13: 1 },
    { i: 2, value01: 0, value13: 1 },
    { i: 3, value01: 1, value13: 2 },
    { i: 4, value01: 1, value13: 3 },
    { i: 5, value01: 1, value13: 3 },
    { i: 6, value01: 1, value13: 3 },
    { i: 7, value01: 1, value13: 1 },
    { i: 8, value01: 0, value13: 1 },
    { i: 9, value01: 1, value13: 2 }
  ]
}
{
  configuration: { cards: { gold: 1, mix: 1, silver: 0 }, loop: 1000000 }
}
{ cards: [ [ 1, 1 ], [ 1, 0 ] ] }
{
  result: { victories: 499695, defeats: 249898 },
  prob: 0.6666217534048477
}

real	0m0.117s
user	0m0.097s
sys	0m0.017s
```
