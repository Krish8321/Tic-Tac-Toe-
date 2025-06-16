let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector(".reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let game = document.querySelector("main")

// playerX and playerO
let turn_O = true;
let count = 0; // to check the draw 

const winPattern = [
    [0 , 1 , 2],
    [0 , 3 , 6],
    [0 , 4 , 8],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [2 , 4 , 6],
    [3 , 4 , 5],
    [6 , 7 , 8],
];

boxes.forEach( (box) => {
    box.addEventListener("click" , () => {
        // console.log("box is clicked ! ");
        if(turn_O){
            box.innerText = "O" ;
            turn_O = false ;
        }
        else{
            box.innerText = "X" ;
            turn_O = true;
        }
        box.disabled = true;    
        count++;

        let isWinner = checkWinner();

        if(count === 9 && !isWinner){
            gameDraw();
        }
    });
});

const disableBoxes = () => {
    for (box of boxes) {
        box.disabled = true; 
    }
};

const enableBoxes = ()=> {
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

// reset button function .. 
const rstFunc = () => {
    turn_O = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
    // line.classList.add("hide");
};


// game Draw function . 
const gameDraw = () => {
    msg.innerText = "The Game Was Draw !!";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    // game.classList.add("hide");
};

// function to check the winner 
let checkWinner = () => {
    for(pattern of winPattern){
        // console.log(pattern[0] , pattern[1] , pattern[2]);  
        // console.log(boxes[pattern[0]].innerText , boxes[pattern[1]].innerText , boxes[pattern[2]].innerText);  

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log(`Winner is ${pos1Val}`);
                showWinner(pos1Val);
                // showWinningLine(i);
                return true;
            }
        }
    }
};

// reset button script 
rstBtn.addEventListener("click" , rstFunc);



// we will add a line for winning combinations it is a bit complicated now for me 
