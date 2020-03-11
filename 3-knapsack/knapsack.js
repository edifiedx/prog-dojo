// weight, value
exports.solve = (max, items) =>
{
    const getValue = (itemIndex, maxCapacity, item, profit) => 
    {
        let weight = item[0];
        let value = item[1];
        let skipItem = profit[itemIndex - 1][maxCapacity];
        let takeItem = profit[itemIndex - 1][maxCapacity - weight] + value || -1;
        return Math.max(skipItem, takeItem);
    }

    let profit = [];
    for (let i = 0; i < items.length + 1; i++)
    {
        profit[i] = [];
        for (let c = 0; c < max + 1; c++)
        {
            let zero = (i == 0 || c == 0) ? true : false;
            profit[i][c] = zero ? 0 : getValue(i, c, items[i-1], profit);
        }
    }

    // console.table(profit);
    return profit[items.length][max];
}

//     p 0,1,2,3  ,4
// w v
// 0 0   0 0,0,0,0  ,0
// 3 1.8 1 0,0,0,1.8,1.8
// 2 1   2 0,0,1,1.8,1.8
// 2 1   3 0,0,1,1.8,2

// option1 = p[i-1,c] // 1.8
// option2 = p[i-1,c-i.w]+i.v  // [2,4-2=2] 1 + 1 = 2
// p[i,c] = max(option1, option2)