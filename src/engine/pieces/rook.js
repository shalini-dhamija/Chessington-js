import Square from '../square';
import Piece from './piece';
import GameSettings from '../gameSettings';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }
    /*Rook
    1) can move laterally
    2) cannot make any other moves */
    getAvailableMoves(board) {
        const location = board.findPiece(this);
        let arrExpectedMoves = [];

        
        for(let i=0; i<GameSettings.BOARD_SIZE;i++){
            //Get Horizontal Moves
            if(i!=location.col){
                arrExpectedMoves.push(Square.at(location.row, i));
            }
            //Get Vertical Moves
            if(i!=location.row){
                arrExpectedMoves.push(Square.at(i, location.col));
            }
        }
        return arrExpectedMoves;
    }
}
