
let points_p1 = 0;
let rolls_p1 = 0;
let win_p1 = 0;
let points_p2 = 0;
let rolls_p2 = 0;
let win_p2 = 0;
let dice = document.querySelector(".dice");
let points1 = document.getElementById("points1");
let points2 = document.getElementById("points2");
let turn1 = document.getElementById("turn1");
let turn2 = document.getElementById("turn2");
let win1 = document.getElementById("win1");
let win2 = document.getElementById("win2");
let p1 = document.getElementsByClassName("p1")[0]; 
let p2 = document.getElementsByClassName("p2")[0];
let player1 = document.getElementsByClassName("player1")[0];
let player2 = document.getElementsByClassName("player2")[0];
let btn2 = document.getElementById("btn2");
let btn1 = document.getElementById("btn1");
let two = document.getElementById("two");
let one = document.getElementById("one");

btn1.addEventListener("click", () => {
    let random = Math.floor(Math.random()*6)+1;
    rolls_p1++;
    turn1.textContent = rolls_p1;
    if(player2.style.display === "block"){
        btn2.style.display = "block";
        btn1.style.display = "none";
    }
    if(random === 1){
        dice.src ="images/dice-1.png";
        points_p1 = 0;
        points1.textContent = points_p1;
    } else if(random === 2){
        dice.src ="images/dice-2.png";
        points_p1 += 2;
        points1.textContent = points_p1;
    } else if(random === 3){
        dice.src ="images/dice-3.png";
        points_p1 += 3;
        points1.textContent = points_p1
    } else if(random === 4){
        dice.src = "images/dice-4.png";
        points_p1 += 4;
        points1.textContent = points_p1;
    } else if(random === 5){
        dice.src = "images/dice-5.png";
        points_p1 += 5;
        points1.textContent = points_p1;
    } else if(random === 6){
        dice.src = "images/dice-6.png";
        points_p1 += 6;
        points1.textContent = points_p1;}

    if(points_p1 >= 17){
        win_p1++;
        win1.textContent = win_p1;
        points1.textContent = "WINNER!";
        dice.src = "images/winner.jpg"
        points_p2 = 0;
        points_p1 = 0;
        rolls_p2 = 0;
        rolls_p1 = 0;
    }
})


btn2.addEventListener("click", () => {
    let random = Math.floor(Math.random()*6)+1;
    rolls_p2++;
    turn2.textContent = rolls_p2;
    btn2.style.display = "none";
    btn1.style.display = "block";
    if(random === 1){
        dice.src ="images/dice-1.png";
        points_p2 = 0;
        points2.textContent = points_p2;
    } else if(random === 2){
        dice.src = "images/dice-2.png";
        points_p2 += 2;
        points2.textContent = points_p2;
    } else if(random === 3){
        dice.src = "images/dice-3.png";
        points_p2 += 3;
        points2.textContent = points_p2;
    } else if(random === 4){
        dice.src = "images/dice-4.png";
        points_p2 += 4;
        points2.textContent = points_p2;
    } else if(random === 5){
        dice.src = "images/dice-5.png";
        points_p2 += 5;
        points2.textContent = points_p2;
    } else if(random === 6){
        dice.src = "images/dice-6.png";
        points_p2 += 6;
        points2.textContent = points_p2;
    }

    if(points_p2 >= 17){
        win_p2++;
        win2.textContent = win_p2;
        points2.textContent = "WINNER!";
        dice.src = "images/winner.jpg"
        points_p2 = 0;
        points_p1 = 0;
        rolls_p2 = 0;
        rolls_p1 = 0;
    }
})
one.addEventListener("click", () => {
    player2.style.display = "none";
    two.style.display = "block";
    btn1.style.display = "block";
    points_p1 = 0;
    points1.textContent = points_p1;
    rolls_p1 = 0;
    turn1.textContent = rolls_p1;
    win_p1 = 0;
    win1.textContent = win_p1;
    points_p2 = 0;
    points2.textContent = points_p1;
    rolls_p2 = 0;
    turn2.textContent = rolls_p1;
    win_p2 = 0;
    win2.textContent = win_p1;
})


two.addEventListener("click", () => {
    player2.style.display = "block";
    two.style.display = "none";
    p1.style.display = "block";
    p2.style.display = "block";
    points_p1 = 0;
    points1.textContent = points_p1;
    rolls_p1 = 0;
    turn1.textContent = rolls_p1;
    win_p1 = 0;
    win1.textContent = win_p1;
})


