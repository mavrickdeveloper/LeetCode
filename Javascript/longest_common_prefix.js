var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return "";
    var minLen = strs[0].length;
    for(var i = 1; i < strs.length; i++) {
        if(strs[i].length < minLen) minLen = strs[i].length;
    }
    for(var i = 0; i < minLen; i++) {
        var c = strs[0][i];
        for(var j = 1; j < strs.length; j++) {
            if(strs[j][i] != c) return strs[0].substring(0, i);
        }
    }
    return strs[0].substring(0, minLen);
};