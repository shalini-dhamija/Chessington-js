import Square from '../square';
import Piece from './piece';
import GameSettings from '../gameSettings';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        let arrExpectedMoves = [];
          
        //Get all adjacent squares
        for(let i=(location.row-1)<0?0:(location.row-1); i<=location.row+1 && (0<=i<GameSettings.BOARD_SIZE); i++)
            for(let j=(location.col-1)<0?0:(location.col-1); j<=location.col+1 && (0<=i<GameSettings.BOARD_SIZE); j++){
                //console.log((Square.at(i,j)!==location))
                if(board.getPiece(Square.at(i,j))===undefined)
                    arrExpectedMoves.push(Square.at(i,j));
        }
console.log(arrExpectedMoves);
        return arrExpectedMoves;
    }
}
