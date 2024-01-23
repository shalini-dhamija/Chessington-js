import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }
    getAvailableMoves(board) {
      const location = board.findPiece(this);

      const getTwoMoves = () => {
        let firstMove, secondMove;
        if (this.player === Player.WHITE) {
          firstMove = Square.at(location.row + 1, location.col);
          secondMove = Square.at(location.row + 2, location.col);
        } else {
          firstMove = Square.at(location.row - 1, location.col);
          secondMove = Square.at(location.row - 2, location.col);
        }
        //cannot move if there is a piece in front
        return board.getPiece(firstMove) !== undefined
          ? []
          : [firstMove, secondMove];
      };
      
      const getOneMove = () => {
        return this.player === Player.WHITE
          ? [Square.at(location.row + 1, location.col)]
          : [Square.at(location.row - 1, location.col)];
      };
  
      //Pawn can move one or two spaces if it is their first move i.e., at the initial position
      // initial position for the Wite pawns is row=1
      // initial position for the Black pawns is row=6
      const pawnMoves =
        (location.row === 1 && this.player === Player.WHITE) ||
        (location.row === 6 && this.player === Player.BLACK)
          ? getTwoMoves()
          : getOneMove();
      
      const availableMoves = pawnMoves.filter(
        (loc) => board.getPiece(loc) === undefined
      );
      
      return availableMoves;
    }



}


/*Pawn
    white pawns
      1) can only move one square up if they have already moved
      2) can move one or two squares up on their first move
    black pawns
      3) can only move one square down if they have already moved
      4) can move one or two squares down on their first move
    5)cannot move if there is a piece in front
      */
    // getAvailableMoves(board) {
    //     let location = board.findPiece(this)
        
    //     const getTwoMoves = () => {
    //        return this.player === Player.WHITE
    //           ? [Square.at(location.row + 1, location.col),Square.at(location.row + 2, location.col)]
    //           : [Square.at(location.row - 1, location.col),Square.at(location.row - 2, location.col)];
    //       };

    //       const getOneMove = (player) => {
    //        return this.player === Player.WHITE
    //           ? [Square.at(location.row + 1, location.col)]
    //           : [Square.at(location.row - 1, location.col)];
    //       };

          
          
    //     //Initial position for the white pawns is second row from bottom i.e. row = 1
    //     //Initial position for the black pawns is second row from top i.e. row = 6
    //     if (location.row === 1 || location.row === 6) return getTwoMoves();
    //     else return getOneMove();

    //     //cannot move if there is a piece in front
    // }