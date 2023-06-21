/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */
class Game{
  constructor(HEIGHT, WIDTH){
    this.WIDTH = WIDTH;
    this.HEIGHT = HEIGHT;
    this.board = [];
    this.makeBoard();
    this.makeHtmlBoard();
    this.playerList = this.readyPlayers();
    this.currPlayer = this.playerList[0];
    this.gameOver = 0;
  }
  readyPlayers(){
    if(document.querySelector("#p1Color").value != document.querySelector("#p2Color").value){
      return [{
        name: document.querySelector("#p1Name").value,
        color: document.querySelector("#p1Color").value
        }, {
        name: document.querySelector("#p2Name").value,
        color: document.querySelector("#p2Color").value
      }];
    }else{
      alert("Player colors must not match.");
    }
  }
  makeBoard() {
    this.board = [];
    for (let y = 0; y < this.HEIGHT; y++) {
      this.board.push(Array.from({ length: this.WIDTH }));
    }
  }
  makeHtmlBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
  
    // make column tops (clickable area for adding a piece to that column)
    const top = document.createElement('tr');
    top.setAttribute('id', 'column-top');

    this.handleGameClick = this.handleClick.bind(this);
    top.addEventListener('click', this.handleGameClick);
  
    for (let x = 0; x < this.WIDTH; x++) {
      const headCell = document.createElement('td');
      headCell.setAttribute('id', x);
      top.append(headCell);
    }
  
    board.append(top);
  
    // make main part of board
    for (let y = 0; y < this.HEIGHT; y++) {
      const row = document.createElement('tr');
  
      for (let x = 0; x < this.WIDTH; x++) {
        const cell = document.createElement('td');
        cell.setAttribute('id', `${y}-${x}`);
        row.append(cell);
      }
  
      board.append(row);
    }
  }
  findSpotForCol(x) {
    for (let y = this.HEIGHT - 1; y >= 0; y--) {
      if (!this.board[y][x]) {
        return y;
      }
    }
    return null;
  }
  placeInTable(y, x) {
    const piece = document.createElement('div');
    piece.classList.add('piece');
    piece.style.backgroundColor = this.currPlayer.color;
    piece.style.top = -50 * (y + 2);
  
    const spot = document.getElementById(`${y}-${x}`);
    spot.append(piece);
  }
  endGame(msg) {
    alert(msg);
    this.gameOver = 1;
  }
  checkForWin() {
    const _win = cells => 
        cells.every(
        ([y, x]) =>
          y >= 0 &&
          y < this.HEIGHT &&
          x >= 0 &&
          x < this.WIDTH &&
          this.board[y][x] === this.currPlayer.color
      );

  
    for (let y = 0; y < this.HEIGHT; y++) {
      for (let x = 0; x < this.WIDTH; x++) {
        // get "check list" of 4 cells (starting here) for each of the different
        // ways to win
        const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
        const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];  
        const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
        const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
  
        // find winner (only checking each win-possibility as needed)
        if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {//why no this. ?
          return true;
        }
      }
    }
  }
  handleClick(evt) {
    // get x from ID of clicked cell
    const x = +evt.target.id;
  
    // get next spot in column (if none, ignore click)
    const y = this.findSpotForCol(x);
    if (y === null) {
      return;
    }
  
    // place piece in board and add to HTML table
    this.board[y][x] = this.currPlayer.color;
    this.placeInTable(y, x);
    
    // check for win
    if (this.checkForWin()) {
      return this.endGame(`${this.currPlayer.name} won!`);
    }
    
    // check for tie
    if (this.board.every(row => row.every(cell => cell))) {
      return this.endGame('Tie!');
    }
      
    // switch players
    this.currPlayer = this.currPlayer === this.playerList[0] ? this.playerList[1] : this.playerList[0];
  }
  
  /** checkForWin: check board cell-by-cell for "does a win start here?" */
  
  
}
let startBtn = document.querySelector('#gameStart');
startBtn.addEventListener("submit", function (e){
  e.preventDefault();
  new Game(document.querySelector('#height').value, document.querySelector('#width').value);
})




