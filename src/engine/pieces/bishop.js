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
        for(let j=location.col+1;j<GameSettings.BOARD_SIZE;j++){
            const move = Square.at(startRow,j)
            arrExpectedMoves.push(move);
            startRow++;
        }
        
        //Get Right downward diagonal
        startCol = location.col + 1;
        for(let i=location.row-1;i>=0;i--){
            const move = Square.at(i,startCol);
            arrExpectedMoves.push(move);
            startCol++;
        }

        //Get Left upward diagonal
        startRow = location.row + 1;
        for(let j=location.col-1;j>=0;j--){
            const move = Square.at(startRow,j);
            arrExpectedMoves.push(move);            
            startRow++;
        }
        //Get Left downward diagonal
        startCol = location.col - 1;
        for(let i=location.row-1;i>=0;i--){
            const move = Square.at(i,startCol)
            arrExpectedMoves.push(move);
            startCol--;
        }
        
        return arrExpectedMoves;
    }   
}
