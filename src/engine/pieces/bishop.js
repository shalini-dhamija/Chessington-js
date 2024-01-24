import Square from '../square';
import Piece from './piece';
import GameSettings from '../gameSettings';
import King from "./king";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const location = board.findPiece(this);
        let arrExpectedMoves = [];
        let startRow = 0;
        let startCol = 0;

        //Get Right upward diagonal
        startRow = location.row + 1;
        for(let j=location.col+1; j<GameSettings.BOARD_SIZE&&startRow<GameSettings.BOARD_SIZE; j++,startRow++){
            const move = Square.at(startRow,j)
            const piece = board.getPiece(move);
            if(piece===undefined)
                arrExpectedMoves.push(move);            
            else{
                arrExpectedMoves.push(move); 
                break;
            }
        }
        
        //Get Right downward diagonal
        startCol = location.col + 1;
        for(let i=location.row-1; i>=0&&startCol<GameSettings.BOARD_SIZE; i--,startCol++){
            const move = Square.at(i,startCol);
            const piece = board.getPiece(move);
            if(piece===undefined)
                arrExpectedMoves.push(move);
            else{
                arrExpectedMoves.push(rookMove); 
                break;
            }            
        }

        //Get Left upward diagonal
        startRow = location.row + 1;
        for(let j=location.col-1; j>=0&&startRow<GameSettings.BOARD_SIZE; j--,startRow++){
            const move = Square.at(startRow,j);
            const piece = board.getPiece(move);
            if(piece===undefined)
                arrExpectedMoves.push(move);            
            else{
                arrExpectedMoves.push(move); 
                break;
            }            
        }
        //Get Left downward diagonal
        startCol = location.col - 1;
        for(let i=location.row-1; i>=0&&startCol>=0; i--,startCol--){
            const move = Square.at(i,startCol)
            const piece = board.getPiece(move);
            if(piece===undefined)
                arrExpectedMoves.push(move);
             else{            
                arrExpectedMoves.push(rookMove); 
                break;
            }            
        }
        
        return arrExpectedMoves;
    }   
}
