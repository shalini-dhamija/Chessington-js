import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }
    /*Pawn
    white pawns
      1) can only move one square up if they have already moved
      2) can move one or two squares up on their first move
    black pawns
      3) can only move one square down if they have already moved
      4) can move one or two squares down on their first move
      */
    getAvailableMoves(board) {
        let location = board.findPiece(this)
        
        const getTwoMoves = () => {
           return this.player === Player.WHITE
              ? [Square.at(location.row + 1, location.col),Square.at(location.row + 2, location.col)]
              : [Square.at(location.row - 1, location.col),Square.at(location.row - 2, location.col)];
          };

          const getOneMove = (player) => {
           return this.player === Player.WHITE
              ? [Square.at(location.row + 1, location.col)]
              : [Square.at(location.row - 1, location.col)];
          };

          
        //Initial position for the white pawns is second row from bottom i.e. row = 1
        //Initial position for the black pawns is second row from top i.e. row = 6
        if (location.row === 1 || location.row === 6) return getTwoMoves();
        else return getOneMove();
    }
}

//if (this.player === Player.WHITE) {
//    return Square.at(location.row + 1, location.col)
//} else {
//    return Square.at(location.row - 1, location.col)
//}