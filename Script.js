let boxes = document.querySelectorAll(".box");
let resetGame = document.querySelector("#reset");
let win = document.querySelector("#winner");

let turnX = true;
let count = 0;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGameFunc = () => {
  resetGame.addEventListener("click", () => {
    boxes.forEach((box) => {
      box.innerText = "";
      box.disabled = false;
    });
    win.innerText = "";
    turnX = true; // Reset turn to X
    count = 0; // Reset move count
  });
};

const gameDraw = () => {
  win.innerText = "Game is a draw!";
  boxes.forEach((box) => (box.disabled = true));
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;

    }
    box.disabled = true;
    count++;
    let isWinner = checkWinner();
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const showWinner = (winner) => {
  win.innerText = `Winner is ${winner}`;
};

const checkWinner = () => {
  for (let parrtern of winPattern) {
    (post1 = boxes[parrtern[0]].innerText),
      (post2 = boxes[parrtern[1]].innerText),
      (post3 = boxes[parrtern[2]].innerText);

    if (post1 !== "" && post2 !== "" && post3 !== "") {
      if (post1 === post2 && post2 === post3) {
        showWinner(post1);
        boxes.forEach((box) => (box.disabled = true));
        console.log(`Winner is ${post1}`);
      }
    }
  }
};

resetGame.addEventListener("click", resetGameFunc);
