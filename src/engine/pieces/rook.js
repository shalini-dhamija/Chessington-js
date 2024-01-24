import Square from '../square';
import Piece from './piece';
import GameSettings from '../gameSettings';
import King from "./king";

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
            const rookMove = Square.at(location.row,i)
            const piece = board.getPiece(rookMove);
            if(piece===undefined)
                arrExpectedMoves.push(rookMove);            
            else{
                if(piece.player !== this.player && !(piece instanceof King))
                    arrExpectedMoves.push(rookMove); 
                 break;
            }
        }
        //Get Horizontal Backward Moves
        for(let i=location.col-1;i>=0;i--){
            const rookMove = Square.at(location.row,i)
            const piece = board.getPiece(rookMove);
            if(piece===undefined)
                arrExpectedMoves.push(rookMove);
            else{
                if(piece.player !== this.player && !(piece instanceof King))
                    arrExpectedMoves.push(rookMove); 
                break;
            }
        }
        //Get Vertical Forward Moves
        for(let i=location.row+1;i<GameSettings.BOARD_SIZE;i++){
            const rookMove = Square.at(i,location.col);
            const piece = board.getPiece(rookMove)
            if(piece===undefined)
                arrExpectedMoves.push(rookMove);
            else{
                if(piece.player !== this.player && !(piece instanceof King))
                    arrExpectedMoves.push(rookMove); 
                break;
            }
        }
        //Get Vertical Backward Moves
        for(let i=location.row-1;i>=0;i--){
            const rookMove = Square.at(i,location.col);
            const piece = board.getPiece(rookMove)
            if(piece===undefined)
            arrExpectedMoves.push(rookMove);
            else{
                if(piece.player !== this.player && !(piece instanceof King))
                    arrExpectedMoves.push(rookMove); 
                break;
            }
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