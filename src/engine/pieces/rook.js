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

        //Get Horizontal Forward Moves
        for(let i=location.col+1;i<GameSettings.BOARD_SIZE;i++){
            if(board.getPiece(Square.at(location.row,i))===undefined)
                arrExpectedMoves.push(Square.at(location.row, i));
            else
                break;
        }
        //Get Horizontal Backward Moves
        for(let i=location.col-1;i>=0;i--){
            if(board.getPiece(Square.at(location.row,i))===undefined)
                arrExpectedMoves.push(Square.at(location.row, i));
            else
                break;
        }
        //Get Vertical Forward Moves
        for(let i=location.row+1;i<GameSettings.BOARD_SIZE;i++){
            if(board.getPiece(Square.at(i,location.col))===undefined)
                arrExpectedMoves.push(Square.at(i, location.col));
            else
                break;
        }
        //Get Vertical Backward Moves
        for(let i=location.row-1;i>=0;i--){
            if(board.getPiece(Square.at(i,location.col))===undefined)
            arrExpectedMoves.push(Square.at(i, location.col));
            else
                break;
        }
        return arrExpectedMoves;
    }    
}


// for(let i=0; i<GameSettings.BOARD_SIZE;i++){
        //     //Get Horizontal Moves
        //     if(i!==location.col){
        //         arrExpectedMoves.push(Square.at(location.row, i));
        //     }
        //     //Get Vertical Moves
        //     if(i!==location.row){
        //         arrExpectedMoves.push(Square.at(i, location.col));
        //     }
        // }
        //return arrExpectedMoves;