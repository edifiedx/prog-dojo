// weight, value

const knapsackBad = (max, items) =>
{
    let best = 0;
    
    for (var i = 0; i < Math.pow(2, items.length); i++)
    {
        let bitwise = i.toString(2).padStart(items.length, 0);
        let value = 0;
        let weight = 0;
        for (var c = 0; c < bitwise.length; c++)
        {
            if (bitwise[c] == 1)
            {
                value += items[c][1];
                weight += items[c][0];
            }
        }
        if (weight <= max)
        {
            best = Math.max(best, value);
            // console.log(`${bitwise} : ${value}, ${weight}`);
        }
    }
    return best;
}

const knapsack = (max, items) =>
{
    const getValue = (itemIndex, maxCapacity, item, profit) => 
    {
        let weight = item[0]
        let value = item[1];
        let takePrevious = profit[itemIndex - 1, maxCapacity]
        let takeItem = profit[itemIndex - 1, maxCapacity - weight] + value;
        return Math.max(takePrevious, takeItem);
    }

    let profit = [];
    for (let i = 0; i < items.length + 1; i++)
    {
        profit[i] = [];
        for (let c = 0; c < max + 1; c++)
        {
            profit[i][c] = i == 0 ? 0 : getValue(i, max, items[i], profit);
        }
    }

    console.table(profit);


    //     p 0,1,2,3  ,4
    // w v
    // 0 0   0 0,0,0,0  ,0
    // 3 1.8 1 0,0,0,1.8,1.8
    // 2 1   2 0,0,1,1.8,1.8
    // 2 1   3 0,0,1,1.8,2

    // option1 = p[i-1,c] // 1.8
    // option2 = p[i-1,c-i.w]+i.v  // [2,4-2=2] 1 + 1 = 2
    // p[i,c] = max(option1, option2)
}


// console.log(knapsackBad(8, [[1,2],[2,3],[5,4],[6,5]]));
// console.log(knapsack(8, [[1,2],[2,3],[5,4],[6,5]]));

console.log(knapsackBad(4, [[3,1.8],[2,1],[2,1]]));
knapsack(4, [[3,1.8],[2,1],[2,1]]);





