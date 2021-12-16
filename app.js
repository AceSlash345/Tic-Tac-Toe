const box1 = document.querySelector("#box1");
// please lord tell me theres a better way of doing this
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");
const box4 = document.querySelector("#box4");
const box5 = document.querySelector("#box5");
const box6 = document.querySelector("#box6");
const box7 = document.querySelector("#box7");
const box8 = document.querySelector("#box8");
const box9 = document.querySelector("#box9");

const placement1 = document.querySelector("#box1")
const placement2 = document.querySelector("#box2")
const placement3 = document.querySelector("#box3")
const placement4 = document.querySelector("#box4")
const placement5 = document.querySelector("#box5")
const placement6 = document.querySelector("#box6")
const placement7 = document.querySelector("#box7")
const placement8 = document.querySelector("#box8")
const placement9 = document.querySelector("#box9")
// please lord tell me theres a better way of doing this
const startGame = document.querySelector("#startGame")
const resetGame = document.querySelector("#resetGame")
const myTurn = document.querySelector("#myTurn")
const gameBoard = document.querySelector("#gameBoard")
const player1 = {
    turn:"off"
}
const player2 = {
    turn:"on"
}
function turnSwitch(){
    if (player1.turn === "on" && player2.turn === "off"){
        myTurn.textContent = "It is X's turn!"
    } else if (player2.turn === "on" && player1.turn === "off"){
        myTurn.textContent = "It is O's Turn!"
    } else if (player1.turn === "off" && player2.turn === "off"){
        myTurn.textContent = "You might wanna turn the game on to start playing it."
    } else {
        myTurn.textContent = "A glitch? That's crazy."
    }
}
resetGame.addEventListener("click", function (){
    document.querySelector("#block1").textContent = ""
    document.querySelector("#block2").textContent = ""
    document.querySelector("#block3").textContent = ""
    document.querySelector("#block4").textContent = ""
    document.querySelector("#block5").textContent = ""
    document.querySelector("#block6").textContent = ""
    document.querySelector("#block7").textContent = ""
    document.querySelector("#block8").textContent = ""
    document.querySelector("#block9").textContent = ""
    block1 = "on"
    block2 = "on"
    block3 = "on"
    block4 = "on"
    block5 = "on"
    block6 = "on"
    block7 = "on"
    block8 = "on"
    block9 = "on"
    victory()
    rounds = 0
    document.querySelector("#winner").textContent = ""
    turnSwitch()
})

// THIS TURNS ON THE GAME
startGame.addEventListener("click", function(){
    document.querySelector("#block1").textContent = ""
    document.querySelector("#block2").textContent = ""
    document.querySelector("#block3").textContent = ""
    document.querySelector("#block4").textContent = ""
    document.querySelector("#block5").textContent = ""
    document.querySelector("#block6").textContent = ""
    document.querySelector("#block7").textContent = ""
    document.querySelector("#block8").textContent = ""
    document.querySelector("#block9").textContent = ""
    block1 = "on"
    block2 = "on"
    block3 = "on"
    block4 = "on"
    block5 = "on"
    block6 = "on"
    block7 = "on"
    block8 = "on"
    block9 = "on"
    victory()
    rounds = 0
    document.querySelector("#winner").textContent = ""

    turnSwitch()

})

let block1 = "off"
let block2 = "off"
let block3 = "off"
let block4 = "off"
let block5 = "off"
let block6 = "off"
let block7 = "off"
let block8 = "off"
let block9 = "off"

box1.addEventListener("mouseover",function(){

})
box1.addEventListener("click",function(){
    
    if (player1.turn === "on" && player2.turn === "off" && block1 === "on"){
        document.querySelector("#block1").textContent = "X"
        player1.turn = "off"
        player2.turn = "on"
        turnSwitch()
        block1 = "p1Mark"
        victory()
    } else if (player2.turn === "on" && player1.turn === "off" && block1 === "on"){
        document.querySelector("#block1").textContent = "O"
        player1.turn = "on"
        player2.turn = "off"
        turnSwitch()
        block1 = "p2Mark"
        victory()
    } 

})



box2.addEventListener("mouseover",function(){
})
box2.addEventListener("click",function(){
    if (player1.turn === "on" && player2.turn === "off" && block2 === "on"){
        document.querySelector("#block2").textContent = "X"
        player1.turn = "off"
        player2.turn = "on"
        turnSwitch()
        block2 = "p1Mark"
        victory()
    } else if (player2.turn === "on" && player1.turn === "off" && block2 === "on"){
        document.querySelector("#block2").textContent = "O"
        player1.turn = "on"
        player2.turn = "off"
        turnSwitch()
        block2 = "p2Mark"
        victory()
    } 
    
})


box3.addEventListener("mouseover",function(){
})
box3.addEventListener("click",function(){
    if (player1.turn === "on" && player2.turn === "off" && block3 === "on"){
        document.querySelector("#block3").textContent = "X"
        player1.turn = "off"
        player2.turn = "on"
        turnSwitch()
        block3 = "p1Mark"
        victory()
    } else if (player2.turn === "on" && player1.turn === "off" && block3 === "on"){
        document.querySelector("#block3").textContent = "O"
        player1.turn = "on"
        player2.turn = "off"
        turnSwitch()
        block3 = "p2Mark"
        victory()
    } 
    
})


box4.addEventListener("mouseover",function(){
})
box4.addEventListener("click",function(){
    if (player1.turn === "on" && player2.turn === "off" && block4 === "on"){
        document.querySelector("#block4").textContent = "X"
        player1.turn = "off"
        player2.turn = "on"
        turnSwitch()
        block4 = "p1Mark"
        victory()
    } else if (player2.turn === "on" && player1.turn === "off" && block4 === "on"){
        document.querySelector("#block4").textContent = "O"
        player1.turn = "on"
        player2.turn = "off"
        turnSwitch()
        block4 = "p2Mark"
        victory()
    } 
})


box5.addEventListener("mouseover",function(){
})
box5.addEventListener("click",function(){
    if (player1.turn === "on" && player2.turn === "off" && block5 === "on"){
        document.querySelector("#block5").textContent = "X"
        player1.turn = "off"
        player2.turn = "on"
        turnSwitch()
        block5 = "p1Mark"
        victory()
    } else if (player2.turn === "on" && player1.turn === "off" && block5 === "on"){
        document.querySelector("#block5").textContent = "O"
        player1.turn = "on"
        player2.turn = "off"
        turnSwitch()
        block5 = "p2Mark"
        victory()
    } 
    
})


box6.addEventListener("mouseover",function(){
})
box6.addEventListener("click",function(){
    if (player1.turn === "on" && player2.turn === "off" && block6 === "on"){
        document.querySelector("#block6").textContent = "X"
        player1.turn = "off"
        player2.turn = "on"
        turnSwitch()
        block6 = "p1Mark"
        victory()
    } else if (player2.turn === "on" && player1.turn === "off" && block6 === "on"){
        document.querySelector("#block6").textContent = "O"
        player1.turn = "on"
        player2.turn = "off"
        turnSwitch()
        block6 = "p2Mark"
        victory()
    } 
    
})


box7.addEventListener("mouseover",function(){
})
box7.addEventListener("click",function(){
    if (player1.turn === "on" && player2.turn === "off" && block7 === "on"){
        document.querySelector("#block7").textContent = "X"
        player1.turn = "off"
        player2.turn = "on"
        turnSwitch()
        block7 = "p1Mark"
        victory()
    } else if (player2.turn === "on" && player1.turn === "off" && block7 === "on"){
        document.querySelector("#block7").textContent = "O"
        player1.turn = "on"
        player2.turn = "off"
        turnSwitch()
        block7 = "p2Mark"
        victory()
    } 
    
})


box8.addEventListener("mouseover",function(){
})
box8.addEventListener("click",function(){
    if (player1.turn === "on" && player2.turn === "off" && block8 === "on"){
        document.querySelector("#block8").textContent = "X"
        player1.turn = "off"
        player2.turn = "on"
        turnSwitch()
        block8 = "p1Mark"
        victory()
    } else if (player2.turn === "on" && player1.turn === "off" && block8 === "on"){
        document.querySelector("#block8").textContent = "O"
        player1.turn = "on"
        player2.turn = "off"
        turnSwitch()
        block8 = "p2Mark"
        victory()
    } 
    
})


box9.addEventListener("mouseover",function(){
})
box9.addEventListener("click",function(){
    if (player1.turn === "on" && player2.turn === "off" && block9 === "on"){
        document.querySelector("#block9").textContent = "X"
        player1.turn = "off"
        player2.turn = "on"
        turnSwitch()
        block9 = "p1Mark"
        victory()
    } else if (player2.turn === "on" && player1.turn === "off" && block9 === "on"){
        document.querySelector("#block9").textContent = "O"
        player1.turn = "on"
        player2.turn = "off"
        turnSwitch()
        block9 = "p2Mark"
        victory()
    } 
    
})
let rounds = 0
function victory() {
    if (block1 === "p1Mark" &&  block2 === "p1Mark" &&  block3 === "p1Mark"
    || block1 === "p1Mark" &&  block4 === "p1Mark" &&  block7 === "p1Mark"
    ||block1 === "p1Mark" &&  block5 === "p1Mark" &&  block9 === "p1Mark"
    ||block2 === "p1Mark" &&  block5 === "p1Mark" &&  block8 === "p1Mark"
    ||block3 === "p1Mark" &&  block6 === "p1Mark" &&  block9 === "p1Mark"
    ||block4 === "p1Mark" &&  block5 === "p1Mark" &&  block6 === "p1Mark"
    ||block7 === "p1Mark" &&  block8 === "p1Mark" &&  block9 === "p1Mark"
    ||block7 === "p1Mark" &&  block5 === "p1Mark" &&  block3 === "p1Mark"){
        document.querySelector("#winner").textContent = 'Player X is the winner!'
        block1 = "off"
        block2 = "off"
        block3 = "off"
        block4 = "off"
        block5 = "off"
        block6 = "off"
        block7 = "off"
        block8 = "off"
        block9 = "off"
        myTurn.textContent = ""
    }  else if (block1 === "p2Mark" &&  block2 === "p2Mark" &&  block3 === "p2Mark"
    || block1 === "p2Mark" &&  block4 === "p2Mark" &&  block7 === "p2Mark"
    ||block1 === "p2Mark" &&  block5 === "p2Mark" &&  block9 === "p2Mark"
    ||block2 === "p2Mark" &&  block5 === "p2Mark" &&  block8 === "p2Mark"
    ||block3 === "p2Mark" &&  block6 === "p2Mark" &&  block9 === "p2Mark"
    ||block4 === "p2Mark" &&  block5 === "p2Mark" &&  block6 === "p2Mark"
    ||block7 === "p2Mark" &&  block8 === "p2Mark" &&  block9 === "p2Mark"
    ||block7 === "p2Mark" &&  block5 === "p2Mark" &&  block3 === "p2Mark"){
        document.querySelector("#winner").textContent = "Player 'O' is the winner!"
        block1 = "off"
        block2 = "off"
        block3 = "off"
        block4 = "off"
        block5 = "off"
        block6 = "off"
        block7 = "off"
        block8 = "off"
        block9 = "off"
        myTurn.textContent = ""
    } else if (rounds < 8){
        document.querySelector("#winner").textContent = ""
        rounds += 1
        console.log(rounds)
    } else if (rounds = 9){
        document.querySelector("#winner").textContent = "Its a draw!"
        myTurn.textContent = ""
    }
}