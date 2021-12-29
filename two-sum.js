

var twoSum = function(nums, target) {
    var hash = {};
    for (var i = 0; i < nums.length; i++) {
        var diff = target - nums[i];
        if (hash[diff] !== undefined) {
            return [hash[diff], i];
        }
        hash[nums[i]] = i;
    }
    return [];
}