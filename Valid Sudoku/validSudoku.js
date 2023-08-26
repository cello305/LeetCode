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
*/

/*
var isValidSudoku = function() {

    let board = [
         ["8","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]
    ];

    rows = board.length
    cols = board[0].length

    slowPointRow = 0;
    slowPointCol = 0;

    fastPointRow = 0;
    fastPointCol = 0;

    while (fastPointRow < rows && fastPointCol < cols ) {

        numbers = board[fastpPointRow][cols]
        console.log(numbers + " ");

        slowPointRow = fastPointRow
        slowPointCol = fastPointCol

        fastPointCol =+2
        if (fastPointCol >= cols) {
            fastPointCol = 0
            fastPointRow +2 
        }
    }

}

isValidSudoku()

*/
    /*
https://www.freecodecamp.org/news/javascript-2d-arrays/

arrayName[rowIndex][columnIndex]
console.log(MathScore[4][0]); // returns 'Ben Liard'

let myArray = [
[0, 1, 2, 3], 
[4, 5, 6, 7],
[8, 9, 0, 0]
];
    */
    
//node validSudoku.js

/*
C:\Users\Emanuel\Desktop\Leetcode\validSudoku.js:68
        numbers = board[rows][cols]
                             ^

TypeError: Cannot read properties of undefined (reading '9')
    at isValidSudoku (C:\Users\Emanuel\Desktop\Leetcode\validSudoku.js:68:30)
    at Object.<anonymous> (C:\Users\Emanuel\Desktop\Leetcode\validSudoku.js:74:1)        
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47
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

    rows = board.length;
    cols = board[0].length;
    

    slowPointRow = 0;
    slowPointCol = 0;

    fastPointRow = 0;
    fastPointCol = 0;

    while (fastPointRow < rows && fastPointCol < cols) {
        const number = board[slowPointRow][slowPointCol];
        console.log(number + " ");

        slowPointRow = fastPointRow;
        slowPointCol = fastPointCol;

        fastPointCol += 1; // Increment by 2 columns
        if (fastPointCol >= cols) {
            fastPointCol = 0;
            fastPointRow += 1; // Increment by 2 rows

        } 
    }
    
    if (slowPointRow == fastPointCol && slowPointCol == fastPointRow) {
            console.log("Duplicate found!");
            
        } console.log("Duplicate not found!");
}

isValidSudoku();



/*
8 
Duplicate not found!
8 
Duplicate not found!
3 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
7 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
6 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
1 
Duplicate not found!
9 
Duplicate not found!
5 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
9 
Duplicate not found!
8 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
6 
Duplicate not found!
. 
Duplicate not found!
8 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
6 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
3 
Duplicate not found!
4 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
8 
Duplicate not found!
. 
Duplicate not found!
3 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
1 
Duplicate not found!
7 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
2 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
6 
Duplicate not found!
. 
Duplicate not found!
6 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
2 
Duplicate not found!
8 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
4 
Duplicate not found!
1 
Duplicate not found!
9 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
5 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
8 
Duplicate not found!
. 
Duplicate not found!
. 
Duplicate not found!
7 
Duplicate not found!
*/