const knapsack2n = (max, items) =>
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
            //console.log(`${bitwise} : ${weight}, ${value}`);
        }
    }
    return best;
}
// weight, value
