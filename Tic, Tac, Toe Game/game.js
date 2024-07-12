let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("reset-btn");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let resetBtn = document.querySelector("#reset-btn");
let trunO = true;
let count = 0;

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
]
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (trunO) {
            box.innerText = "O";
            console.log(box.innerText);
            trunO = false;
            count++;
        }
        else {
            box.innerText = "X";
            console.log(box.innerText);
            trunO = true;
            count++;
        }
       
            box.disabled = true;
            checkWinner();
        

    });

});
let checkWinner = () => {
    for (let patten of winPattern) {
        let pos0val = boxes[patten[0]].innerText;
        let pos1val = boxes[patten[1]].innerText;
        let pos2val = boxes[patten[2]].innerText;

        if (pos0val !== "" && pos1val !== "" && pos2val !== "") {
            if (pos0val === pos1val && pos1val === pos2val) {
                console.log("winner is", pos0val);
                showWinner(pos0val);
            }
            else{
                if(count===9)
                    drawGame();
            }
        }
    }
}
let showWinner = (pos0val) => {
    DisableAll();
    msgContainer.classList.remove("hide");
    msg.innerText = `congratulations, the winner is ${pos0val}`;
};
const drawGame = () => {
    if (count === 9) {
        count = 0;
        msgContainer.classList.remove("hide");
        msg.innerText = `None of the players have won the match,
        please start the new game`;
    }
}

const DisableAll = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const EnableAll = () => {
    for (let box of boxes) {
        box.disabled = false;
    }
}
newbtn.addEventListener("click", () => {
    EnableAll();
    trunO = true;
    count = 0;
    msgContainer.classList.add("hide");
    for (let box of boxes) {
        box.innerText = "";
    }
});

resetBtn.addEventListener("click", () => {
    msgContainer.classList.add("hide");
    for (let box of boxes) {
        box.innerText = "";
    }
    EnableAll();
    count = 0;
});