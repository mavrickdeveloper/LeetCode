
var threeSum = function(nums) {
    var result = [];
    nums.sort(function(a, b) {
        return a - b;
    });
    for (var i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        var target = -nums[i];
        var j = i + 1;
        var k = nums.length - 1;
        while (j < k) {
            if (nums[j] + nums[k] === target) {
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] === nums[j - 1]) {
                    j++;
                }
                while (j < k && nums[k] === nums[k + 1]) {
                    k--;
                }
            } else if (nums[j] + nums[k] < target) {
                j++;
            } else {
                k--;
            }
        }
    }
    return result;
}