const knapsack = () =>
{
    let max = 8
    // weight, value
    let items = [[1,2],[2,3],[5,4],[6,5]];
    
    for (var i = 0; i < Math.pow(2, items.length); i++)
    {
        let bitwise = i.toString(2).padStart(4,0);
        let value = 0;
        let weight = 0;
        let best = 0;
        for (var c = 0; c < bitwise.length; c++)
        {
            if (bitwise[c] == 1)
            {
                value += items[c][0];
                weight += items[c][1];
            }
        }
        if (weight <= max)
        {
            best = Math.max(best, value);
            // console.log(`${bitwise} : ${value}, ${weight}`);
        }
    }
    return max;
}

console.log(knapsack());