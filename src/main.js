import readline from 'readline';

const width = 40;
const height = 10;
let playerX = 1;
const groundY = height - 1;

function render() {
  console.clear();
  for (let y = 0; y < height; y++) {
    let line = '';
    for (let x = 0; x < width; x++) {
      if (y === groundY) {
        line += '=';
      } else if (x === playerX && y === groundY - 1) {
        line += 'M'; // Mario karakteri
      } else {
        line += ' ';
      }
    }
    console.log(line);
  }
  console.log('\n← a | d → | q: çıkış');
}

function movePlayer(dir) {
  if (dir === 'left' && playerX > 0) playerX--;
  if (dir === 'right' && playerX < width - 1) playerX++;
}

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

render();

process.stdin.on('keypress', (str, key) => {
  if (key.name === 'a') movePlayer('left');
  if (key.name === 'd') movePlayer('right');
  if (key.name === 'q' || key.ctrl && key.name === 'c') {
    process.exit();
  }
  render();
});
