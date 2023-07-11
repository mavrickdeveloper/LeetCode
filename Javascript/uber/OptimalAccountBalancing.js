//You are given an array of transactions transactions where transactions[i] = [fromi, toi, amounti] indicates that the person with ID = fromi gave amounti $ to the person with ID = toi.
//Return the minimum number of transactions required to settle the debt.

var minTransfers = function(transactions) {
    // Calculate the net amount for each person
    let amounts = new Array(12).fill(0);
    for (let [from, to, amount] of transactions) {
        amounts[from] -= amount;
        amounts[to] += amount;
    }
    
    // Remove people who neither owe money nor are owed money
    amounts = amounts.filter(amount => amount != 0);
    
    // Start the DFS
    return dfs(amounts, 0);
};

var dfs = function(amounts, startIdx) {
    // Skip people who have settled their debts
    while (startIdx < amounts.length && amounts[startIdx] === 0) {
        startIdx++;
    }
    
    // If all debts are settled, return 0
    if (startIdx === amounts.length) {
        return 0;
    }
    
    let minTransfers = Infinity;
    for (let i = startIdx + 1; i < amounts.length; i++) {
        // If the current person can settle the debt of the startIdx person
        if (amounts[startIdx] * amounts[i] < 0) {
            // Settle the debt
            amounts[i] += amounts[startIdx];
            
            // Recursively try to settle the remaining debts
            minTransfers = Math.min(minTransfers, 1 + dfs(amounts, startIdx + 1));
            
            // Backtrack
            amounts[i] -= amounts[startIdx];
        }
    }
    
    return minTransfers;
};
