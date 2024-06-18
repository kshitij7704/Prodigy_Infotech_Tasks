let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game");
let toggleModeBtn = document.querySelector("#toggle-mode");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let currentMode = "dark";
let turn = 'X';

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === '') {
            if (turn === 'X') {
                box.innerText = 'X';
                turn = 'O';
                
            } else {
                box.innerText = 'O';
                turn = 'X';
            }
            box.disabled = true;
            checkWinner();
        }
    });
});

const checkWinner = () => {
    let flag = 0;
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 !== '' && pos2 !== '' && pos3 !== '') {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                flag = 1;
                return;
            }
        }
    }
    checkTie(flag);        
}

const checkTie = (flag) => {
    let isTie = true;
    boxes.forEach(box => {
        if (box.innerText === '') {
            isTie = false;
        }
    });
    if (flag === 0 && isTie) {
        msg.innerText = `Game Tied`;
        msgContainer.classList.remove("hide");
        resetBtn.classList.add("hide");
    }
}

const showWinner = (winner) => {
    msg.innerText = `Winner is: ${winner}`;
    msgContainer.classList.remove("hide");
    resetBtn.classList.add("hide");

    for (let box of boxes) {
        box.disabled = true;
    }
}

const resetGame = () => {
    msgContainer.classList.add("hide");
    for (let box of boxes) {
        box.innerText = '';
        box.disabled = false;
    }
    turn = 'X';
}

const newGame = () => {
    msgContainer.classList.add("hide");
    for (let box of boxes) {
        box.innerText = '';
        box.disabled = false;
    }
    resetBtn.classList.remove("hide");
    turn = 'X';
}

newGameBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", resetGame);

toggleModeBtn.addEventListener("click", () => {
    if (currentMode === "dark") {
        document.body.classList.add("day-mode");
        currentMode = "day";
    } else {
        document.body.classList.remove("day-mode");
        currentMode = "dark";
    }
});
