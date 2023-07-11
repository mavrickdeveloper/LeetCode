//Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
//The fn function takes one or two arguments:
//arr[i] - number from the arr
//i - index of arr[i]
//filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.
//Please solve it without the built-in Array.filter method.

// classic without .filter

var filter = function(arr, fn) {
    // Create a new array to hold the filtered results
    var filteredArr = new Array(arr.length);
    var count = 0;
    
    // Iterate over each item in the array
    for(var i = 0; i < arr.length; i++) {
        // Call the filtering function with the current item and its index
        var result = fn(arr[i], i);
        
        // If the filtering function returns a truthy value, add the current item to the filtered array
        if(result) {
            filteredArr[count] = arr[i];
            count++;
        }
    }
    
    // Reduce the size of the filteredArr to the number of elements actually added
    filteredArr.length = count;

    // Return the filtered array
    return filteredArr;
};


// Elegent with .filter
var filter = function(arr, fn) {
    // Use the built-in filter function to filter the array
    return arr.filter(fn);
};

