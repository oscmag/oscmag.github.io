import React, { Component } from 'react';
import withDragDropContext from './withDragDropContext';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import moment from 'moment';
import './Chess.css';

class Chess extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board: [],
      selectedSquare: {},
      isWhitesTurn: true,
      blackMaterial: [],
      whiteMaterial: [],
      whiteTime: 180,
      blackTime: 180,
      whiteStartedAt: moment(),
      blackStartedAt: moment(),
      moveHistory: []
    }
  }

  componentWillMount = async() => {
    await this.createBoard();
    this.binGen('01101001 01101101 00110010 00110000 00110010 00110100 00111100 00110001 00110010');
  }

  createGrid = () => {
    const board = [];
    for (let i = 7; i > -1; i--) {
      let row = [];
      for (let j = 0; j < 8; j++) {
        row.push({c: this.convertNumber(j).toLowerCase(), r: i + 1});
      }
      board.push(row);
    }
    return board;
  }

  createBoard = async() => {
    const board = this.createGrid();
    await this.setState({board, isWhitesTurn: true, selectedSquare: {}, highlights: board, whiteStartedAt: moment()});
    this.fillBoard();
  }

  resetBoard = () => {
    this.createBoard();
    this.setState({
      whiteTime: 180,
      blackTime: 180,
      blackMaterial: [],
      whiteMaterial: [],
      moveHistory: [],
    });
  }

  binGen = (bin) => {
    let arrayOfBins = bin.split(' ');
    console.log('aaaa', arrayOfBins);
  }

  getTime = () => {
    const {blackTime, whiteTime, whiteStartedAt, blackStartedAt, isWhitesTurn} = this.state;
    let duration;

    if (isWhitesTurn) {
      duration = Math.floor(whiteTime - moment.duration(moment().diff(whiteStartedAt)).asSeconds());
      return {white: true, duration}
    }
    if (!isWhitesTurn) {
      duration = Math.floor(blackTime - moment.duration(moment().diff(blackStartedAt)).asSeconds());
      return {black: true, duration}
    }
  }

  fillBoard = async() => {
    await this.addChessPiece({name: 'knight', color: 'black', notation: 'N', image: 'j', moves: 0}, 0, 1);
    await this.addChessPiece({name: 'knight', color: 'black', notation: 'N', image: 'j', moves: 0}, 0, 6);
    await this.addChessPiece({name: 'knight', color: 'white', notation: 'N', image: 'j', moves: 0}, 7, 1);
    await this.addChessPiece({name: 'knight', color: 'white', notation: 'N', image: 'j', moves: 0}, 7, 6);

    await this.addChessPiece({name: 'rook', color: 'black', notation: 'R', image: 't', moves: 0}, 0, 0);
    await this.addChessPiece({name: 'rook', color: 'black', notation: 'R', image: 't', moves: 0}, 0, 7);
    await this.addChessPiece({name: 'rook', color: 'white', notation: 'R', image: 't', moves: 0}, 7, 0);
    await this.addChessPiece({name: 'rook', color: 'white', notation: 'R', image: 't', moves: 0}, 7, 7);

    await this.addChessPiece({name: 'bishop', color: 'black', notation: 'B', image: 'n', moves: 0}, 0, 5);
    await this.addChessPiece({name: 'bishop', color: 'black', notation: 'B', image: 'n', moves: 0}, 0, 2);
    await this.addChessPiece({name: 'bishop', color: 'white', notation: 'B', image: 'n', moves: 0}, 7, 5);
    await this.addChessPiece({name: 'bishop', color: 'white', notation: 'B', image: 'n', moves: 0}, 7, 2);

    await this.addChessPiece({name: 'king', color: 'black', notation: 'K', image: 'l', moves: 0}, 0, 4);
    await this.addChessPiece({name: 'king', color: 'white', notation: 'K', image: 'l', moves: 0}, 7, 4);

    await this.addChessPiece({name: 'queen', color: 'black', notation: 'Q', image: 'w', moves: 0}, 0, 3);
    await this.addChessPiece({name: 'queen', color: 'white', notation: 'Q', image: 'w', moves: 0}, 7, 3);

    for (let i = 0; i < 8; i++) {
      await this.addChessPiece({name: 'pawn', color: 'black', notation: 'P', image: 'o', moves: 0}, 1, i);
      await this.addChessPiece({name: 'pawn', color: 'white', notation: 'P', image: 'o', moves: 0}, 6, i);

    }
  }

  toggleTurn = () => {
    const {isWhitesTurn} = this.state;
    const dur = this.getTime();
    if (dur.black) {
      this.setState({blackTime: Math.floor(dur.duration), whiteStartedAt: moment()})
    } else if (dur.white) {
      this.setState({whiteTime: Math.floor(dur.duration), blackStartedAt: moment()})
    }
    this.setState({isWhitesTurn: !isWhitesTurn});
  }

  addChessPiece = async(piece, y, x) => {
    const {board} = this.state;
    const newBoard = board.slice();

    newBoard[y][x].piece = piece;

    await this.setState({board: newBoard});
  }

  handleClick = async(y, x, piece) => {
    let {selectedSquare, board, isWhitesTurn, blackMaterial, whiteMaterial} = this.state;
    let newBoard = board.slice();

    if (piece && !selectedSquare.piece && !this.isSameColor(piece.color)) {
      return;
    }

    if (!piece && !selectedSquare.piece) {
      return;
    }

    if (selectedSquare.x === x && selectedSquare.y === y) {
      this.setState({selectedSquare: {}});
      this.removeHighlights();
      return;
    }

    if (selectedSquare.piece) {
      if (newBoard[y][x].piece && this.isSameColor(newBoard[y][x].piece.color)) {
        this.selectSquare(y, x, piece);
        return;
      }

      if (!this.canPieceMove(selectedSquare.piece, selectedSquare.y, selectedSquare.x, y, x)) {
        return;
      }
      const takenPiece = newBoard[y][x].piece;
      this.addMoveToHistory(newBoard[selectedSquare.y][selectedSquare.x], newBoard[y][x]);
      newBoard[y][x].piece = newBoard[selectedSquare.y][selectedSquare.x].piece;
      newBoard[y][x].piece.moves++;
      delete newBoard[selectedSquare.y][selectedSquare.x].piece;
      this.toggleTurn();
      this.setState({selectedSquare: {}, board: newBoard});
      this.removeHighlights();

      if (takenPiece && takenPiece.color === 'white') {
        whiteMaterial.push(takenPiece);
        this.setState({whiteMaterial});
      } else if (takenPiece && takenPiece.color === 'black') {
        blackMaterial.push(takenPiece);
        this.setState({blackMaterial});
      }
      return;
    } else if (!newBoard[y][x].piece) {
      return;
    }

    this.selectSquare(y, x, piece);
  }

  addMoveToHistory = (from, to) => {
    const {moveHistory, isWhitesTurn} = this.state;
    const tempHistory = moveHistory.slice();
    from = JSON.parse(JSON.stringify(from));
    to = JSON.parse(JSON.stringify(to));

    const move = {
      from, to,
      capture: to.piece ? true : false,
    }

    if (isWhitesTurn) {
      tempHistory.push([move]);
    } else {
      tempHistory[tempHistory.length - 1].push(move);
    }
    this.setState({moveHistory: tempHistory});
  }

  removeHighlights = () => {
    this.setState({highlights: this.createGrid()});
  }

  isSameColor = (color) => {
    const {isWhitesTurn} = this.state;

    if ((isWhitesTurn && color === 'black') || (!isWhitesTurn && color === 'white')) {
      return false;
    } else {
      return true;
    }
  }

  selectSquare = async(y, x, piece) => {
    const selectedSquare = {y, x, piece}
    this.setState({selectedSquare})
    await this.removeHighlights();
    this.highlightOptions(selectedSquare);
  }

  highlightOptions = (selectedSquare) => {
    const {board, highlights} = this.state;
    const {piece, x, y} = selectedSquare;

    //PAWN
    if (piece.name === 'pawn') {
      if (piece.color === 'white') {
        if (!board[y - 1][x].piece) {
          highlights[y - 1][x].highlighted = true;
        }
        if (piece.moves === 0 && !board[y - 2][x].piece) {
          highlights[y - 2][x].highlighted = true;
        }

        if ((board[y - 1][x - 1] || {}).piece && !this.isSameColor(board[y - 1][x - 1].piece.color)) {
          highlights[y - 1][x - 1].highlighted = true;
        }
        if ((board[y - 1][x + 1] || {}).piece && !this.isSameColor(board[y - 1][x + 1].piece.color)) {
          highlights[y - 1][x + 1].highlighted = true;
        }
      } else if (piece.color === 'black') {
        if (!board[y + 1][x].piece) {
          highlights[y + 1][x].highlighted = true;
        }
        if (piece.moves === 0  && !board[y + 2][x].piece) {
          highlights[y + 2][x].highlighted = true;
        }

        if ((board[y + 1][x - 1] || {}).piece && !this.isSameColor(board[y + 1][x - 1].piece.color)) {
          highlights[y + 1][x - 1].highlighted = true;
        }
        if ((board[y + 1][x + 1] || {}).piece && !this.isSameColor(board[y + 1][x + 1].piece.color)) {
          highlights[y + 1][x + 1].highlighted = true;
        }
      }
    }

    //ROOK
    if (piece.name === 'rook' || piece.name === 'queen') {
      for (let i = x + 1; i < 8; i++) {
        if (!board[y][i].piece) {
          highlights[y][i].highlighted = true;
        }
        if (board[y][i].piece && !this.isSameColor(board[y][i].piece.color)) {
          highlights[y][i].highlighted = true;
          break;
        } else if (board[y][i].piece && this.isSameColor(board[y][i].piece.color)) {
          break;
        }
      }
      for (let i = x - 1; i > -1; i--) {
        if (!board[y][i].piece) {
          highlights[y][i].highlighted = true;
        }
        if (board[y][i].piece && !this.isSameColor(board[y][i].piece.color)) {
          highlights[y][i].highlighted = true;
          break;
        } else if (board[y][i].piece && this.isSameColor(board[y][i].piece.color)) {
          break;
        }
      }
      for (let i = y + 1; i < 8; i++) {
        if (!board[i][x].piece) {
          highlights[i][x].highlighted = true;
        }
        if (board[i][x].piece && !this.isSameColor(board[i][x].piece.color)) {
          highlights[i][x].highlighted = true;
          break;
        } else if (board[i][x].piece && this.isSameColor(board[i][x].piece.color)) {
          break;
        }
      }
      for (let i = y - 1; i > -1; i--) {
        if (!board[i][x].piece) {
          highlights[i][x].highlighted = true;
        }
        if (board[i][x].piece && !this.isSameColor(board[i][x].piece.color)) {
          highlights[i][x].highlighted = true;
          break;
        } else if (board[i][x].piece && this.isSameColor(board[i][x].piece.color)) {
          break;
        }
      }
    }

    //KNIGHT
    if (piece.name === 'knight') {
      if ((y - 2) > -1 && (x + 1) < 8) {
        if (!(board[y - 2][x + 1] || {}).piece || ((board[y - 2][x + 1] || {}).piece && !this.isSameColor(board[y - 2][x + 1].piece.color))) {
          highlights[y - 2][x + 1].highlighted = true;
        }
      }
      if ((y - 2) > -1 && (x - 1) > -1) {
        if (!(board[y - 2][x - 1] || {}).piece || ((board[y - 2][x - 1] || {}).piece && !this.isSameColor(board[y - 2][x - 1].piece.color))) {
          highlights[y - 2][x - 1].highlighted = true;
        }
      }
      if ((y + 2) < 8 && (x + 1) < 8) {
        if (!(board[y + 2][x + 1] || {}).piece || ((board[y + 2][x + 1] || {}).piece && !this.isSameColor(board[y + 2][x + 1].piece.color))) {
          highlights[y + 2][x + 1].highlighted = true;
        }
      }
      if ((y + 2) < 8 && (x - 1) > -1) {
        if (!(board[y + 2][x - 1] || {}).piece || ((board[y + 2][x - 1] || {}).piece && !this.isSameColor(board[y + 2][x - 1].piece.color))) {
          highlights[y + 2][x - 1].highlighted = true;
        }
      }

      if ((y - 1) > -1 && (x + 2) < 8) {
        if (!(board[y - 1][x + 2] || {}).piece || ((board[y - 1][x + 2] || {}).piece && !this.isSameColor(board[y - 1][x + 2].piece.color))) {
          highlights[y - 1][x + 2].highlighted = true;
        }
      }
      if ((y + 1) < 8 && (x + 2) < 8) {
        if (!(board[y + 1][x + 2] || {}).piece || ((board[y + 1][x + 2] || {}).piece && !this.isSameColor(board[y + 1][x + 2].piece.color))) {
          highlights[y + 1][x + 2].highlighted = true;
        }
      }
      if ((y - 1) > -1 && (x - 2) > -1) {
        if (!(board[y - 1][x - 2] || {}).piece || ((board[y - 1][x - 2] || {}).piece && !this.isSameColor(board[y - 1][x - 2].piece.color))) {
          highlights[y - 1][x - 2].highlighted = true;
        }
      }
      if ((y + 1) < 8 && (x - 2) > -1) {
        if (!(board[y + 1][x - 2] || {}).piece || ((board[y + 1][x - 2] || {}).piece && !this.isSameColor(board[y + 1][x - 2].piece.color))) {
          highlights[y + 1][x - 2].highlighted = true;
        }
      }
    }

    //BISHOP
    if (piece.name === 'bishop' || piece.name === 'queen') {
      for (let i = y + 1, j = x + 1; i < 8 && j < 8; i++, j++) {
        if (!board[i][j].piece) {
          highlights[i][j].highlighted = true;
        }
        if (board[i][j].piece && !this.isSameColor(board[i][j].piece.color)) {
          highlights[i][j].highlighted = true;
          break;
        } else if (board[i][j].piece && this.isSameColor(board[i][j].piece.color)) {
          break;
        }
      }
      for (let i = y - 1, j = x + 1; i > -1 && j < 8; i--, j++) {
        if (!board[i][j].piece) {
          highlights[i][j].highlighted = true;
        }
        if (board[i][j].piece && !this.isSameColor(board[i][j].piece.color)) {
          highlights[i][j].highlighted = true;
          break;
        } else if (board[i][j].piece && this.isSameColor(board[i][j].piece.color)) {
          break;
        }
      }
      for (let i = y - 1, j = x - 1; i > -1 && j > -1; i--, j--) {
        if (!board[i][j].piece) {
          highlights[i][j].highlighted = true;
        }
        if (board[i][j].piece && !this.isSameColor(board[i][j].piece.color)) {
          highlights[i][j].highlighted = true;
          break;
        } else if (board[i][j].piece && this.isSameColor(board[i][j].piece.color)) {
          break;
        }
      }
      for (let i = y + 1, j = x - 1; i < 8 && j > -1; i++, j--) {
        if (!board[i][j].piece) {
          highlights[i][j].highlighted = true;
        }
        if (board[i][j].piece && !this.isSameColor(board[i][j].piece.color)) {
          highlights[i][j].highlighted = true;
          break;
        } else if (board[i][j].piece && this.isSameColor(board[i][j].piece.color)) {
          break;
        }
      }
    }

    //KING
    if (piece.name === 'king') {
      for (let i = y - 1; i < y + 2; i++) {
        for (let j = x - 1; j < x + 2; j++) {
          if (i < 8 && j < 8 && i > -1 && j > -1) {
            if (!board[i][j].piece) {
              highlights[i][j].highlighted = true;
            }
            if (board[i][j].piece && !this.isSameColor(board[i][j].piece.color)) {
              highlights[i][j].highlighted = true;
            }
          }
        }
      }
    }

    this.setState({highlights})
  }

  isOccupied = (square) => {
    return square.piece ? true : false;
  }

  canPieceMove = (piece, fromY, fromX, toY, toX) => {
    const {highlights} = this.state;

    if (highlights[toY][toX].highlighted) {
      return true;
    } else {
      return false;
    }
  }

  convertNumber = (num) => {
    return String.fromCharCode(97 + num).toUpperCase();
  }

  convertRowNumber = (num) => {
    let map = {
      0: 8,
      1: 7,
      2: 6,
      3: 5,
      4: 4,
      5: 3,
      6: 2,
      7: 1,
    }
    return map[num];
  }

  renderMoveStep = (move) => {
    const {from, to, capture} = move;
    const {piece} = from;
    return (piece.notation !== 'P' ? piece.notation : '') + (capture && piece.notation !== 'P' ? 'x' : capture ? from.c + 'x' : '') + to.c + to.r + ' ';
  }

  render() {
    const {board, selectedSquare, highlights, whiteMaterial, blackMaterial, whiteTime, blackTime, moveHistory} = this.state;

    return (
      <div className='wrapper'>
        <div className='chess-menu'>
          <div className='s-button' onClick={this.resetBoard}>Reset Chessboard</div>
        </div>
        <div className='chess-wrapper'>
          <div className='left-chess'>
            <ol>
              {moveHistory.map(step => {
                return <li>
                  {step.map(move => {
                    return this.renderMoveStep(move);
                  })}
                </li>
              })}
            </ol>
          </div>
          <div className='chessboard'>
            {board.map((row, y) => {
              return row.map((cell, x) => {
                return (
                  <div
                    key={`${y}${x}`}
                    onClick={() => this.handleClick(y, x, cell.piece)}
                    className={`chess-square
                      ${cell.piece && cell.piece.color === 'white' ? 'white-piece' : 'black-piece'}
                      ${(y+x) % 2 === 0 ? 'even' : 'odd'}
                      ${x === selectedSquare.x && y === selectedSquare.y ? 'selected-square' : ''}
                      ${highlights[y][x].highlighted ? 'highlighted-square' : ''}
                    `}
                  >
                    {cell.piece && cell.piece.image}
                    <div className='board-col-letter'>
                      {y === 7 && this.convertNumber(x)}
                    </div>
                    <div className='board-row-num'>
                      {x === 0 && this.convertRowNumber(y)}
                    </div>
                  </div>
                )
              })
            })}
          </div>
          <div className='right-chess'>
            <div className='material-box white-piece'>
              {whiteMaterial.map(piece => piece.image)}
            </div>
            <div>
              {this.getTime().black && this.getTime().duration || blackTime}s
            </div>
            <div>
              {this.getTime().white && this.getTime().duration || whiteTime}s
            </div>
            <div className='material-box'>
              {blackMaterial.map(piece => piece.image)}
            </div>
          </div>
        </div>
        <div className='bottom-area'>
        </div>
      </div>
    );
  }
}

export default withDragDropContext(Chess);
