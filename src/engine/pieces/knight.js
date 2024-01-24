import Square from '../square';
import Piece from './piece';
import GameSettings from '../gameSettings';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        let arrExpectedMoves = [];
        let row2up = location.row + 2;
        let row2down = location.row -2;
        let col2right = location.col + 2;
        let col2left = location.col -2;
        //Check if it is a valid square
        const isValidMove = (row, col) => {
        return (
          row >= 0 &&
          row < GameSettings.BOARD_SIZE &&
          col >= 0 &&
          col < GameSettings.BOARD_SIZE
        );
        };
        //Get all Knight moves
        if(isValidMove(row2up,location.col +1))
            arrExpectedMoves.push(Square.at(row2up,location.col +1));
        if(isValidMove(row2up,location.col -1))
            arrExpectedMoves.push(Square.at(row2up,location.col -1));
        
        if(isValidMove(row2down,location.col +1))
            arrExpectedMoves.push(Square.at(row2down,location.col +1));
        if(isValidMove(row2down,location.col -1))
            arrExpectedMoves.push(Square.at(row2down,location.col -1));

        if(isValidMove(location.row+1,col2right))
            arrExpectedMoves.push(Square.at(location.row+1,col2right));
        if(isValidMove(location.row-1,col2right))
            arrExpectedMoves.push(Square.at(location.row-1,col2right));

        if(isValidMove(location.row+1,col2left))
            arrExpectedMoves.push(Square.at(location.row+1,col2left));
        if(isValidMove(location.row-1,col2left))
            arrExpectedMoves.push(Square.at(location.row-1,col2left));
        
        return arrExpectedMoves;

    }

    
}
