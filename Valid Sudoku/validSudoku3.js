/**
 * @param {character[][]} board
 * @return {boolean}
 */

var isValidSudoku = function(board) {

    for(let i=0; i < 9; i++){
        let row = new Set()
        let column = new Set()
        

        for(let j=0; i < 9; j++){
            let row = board[i][j]
            let column = board[j][i]
        }
    }
}