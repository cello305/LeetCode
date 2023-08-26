/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:


Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function() {
    let board = [
        ["8","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ];

    columns = new Set();
    rows = new Set();

    //first read is 9 down, 9 across
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
        //board[i][j] is rows, board[j][i] is columns
        //console.log(board[i][j], board[j][i])
        columns.add(board[i][j])
        rows.add(board[i][j])

        console.log(rows)
        console.log(columns)
    }
}
}
    isValidSudoku()

//     let columns = new Array(9).fill(null).map(() => []);
//     let rows = new Array(9).fill(null).map(() => []);

//     // First loop iterates through the board
//     for (let j = 0; j < board.length; j++) {
//         for (let i = 0; i < board[j].length; i++) {
//             const cellValue = board[j][i];

//             if (cellValue !== ".") {
//                 // Check row
//                 if (rows[j].includes(cellValue)) {
//                     return false;
//                 }
//                 rows[j].push(cellValue);

//                 // Check column
//                 if (columns[i].includes(cellValue)) {
//                     return false;
//                 }
//                 columns[i].push(cellValue);
//             }
//         }
//     }

//     return true;
// };






    // for(let i = 0; i < board.length; i++)
    // console.log(board[i][1], board[1][i])

    // for(let i = 0; i < board.length; i++)
    // console.log(board[i][2], board[2][i])

    // for(let i = 0; i < board.length; i++)
    // console.log(board[i][3], board[3][i])

    // for(let i = 0; i < board.length; i++)
    // console.log(board[i][4], board[4][i])

    // for(let i = 0; i < board.length; i++)
    // console.log(board[i][5], board[5][i])

    // for(let i = 0; i < board.length; i++)
    // console.log(board[i][6], board[6][i])

    // for(let i = 0; i < board.length; i++)
    // console.log(board[i][7], board[7][i])

    // for(let i = 0; i < board.length; i++)
    // console.log(board[i][8], board[8][i])

