const ks = require('./knapsack');

const UnitTest = (expected, actual) => 
{
    console.log(
        (expected == actual) 
        ? `Pass: ${expected}` 
        : `FAIL: ${expected}. Got ${actual}.`
    )
}

const items = [[12, 40], [5, 20], [14, 45], [8, 30], [3, 30], [5, 15], [6, 16], [21, 31], [22, 32], [9, 19], [10, 20], [1, 11], [2, 12], [3, 13], [4, 14], [20, 30], [11, 21], [12, 22], [7, 17], [8, 18], [13, 23], [14, 24], [15, 25], [23, 33]];

console.log(ks.solve(
4, 
        [
            [3,1.8],
            [2,1],
            [2,1]
        ]
    )
)

UnitTest(54, ks.solve(7, items)); 
UnitTest(289, ks.solve(86, items));  
UnitTest(306, ks.solve(93, items));  
UnitTest(345, ks.solve(112, items));  
UnitTest(413, ks.solve(150, items));  
UnitTest(550, ks.solve(247, items));  
UnitTest(562, ks.solve(248, items));  
