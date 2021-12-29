


var maximalSquare = function(matrix) {
    var max = 0;
    var row = matrix.length;
    var col = matrix[0].length;
    var dp = new Array(row);
    for (var i = 0; i < row; i++) {
        dp[i] = new Array(col);
        for (var j = 0; j < col; j++) {
            dp[i][j] = matrix[i][j] == '1' ? 1 : 0;
        }
    }
    for (var i = 1; i < row; i++) {
        for (var j = 1; j < col; j++) {
            if (matrix[i][j] == '1') {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
                max = Math.max(max, dp[i][j]);
            }
        }
    }
    return max * max;
};