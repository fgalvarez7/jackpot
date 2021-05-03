

const playerChoiceElement = document.getElementById("playerChoiceStart");

playerChoiceElement.addEventListener("click", startGame);

const playerChoicex10Element = document.getElementById("playerChoicex10");
const playerChanceElement = document.getElementById("playerChance");



const chanceElement =document.getElementById("countdown");

var x10=1;
var chance=5;



playerChoicex10Element.addEventListener("click", setx10Button);

var saldo=500;


function setx10Button(){

  if(x10==1){
  
    playerChoicex10Element.setAttribute("src",`imgs/x10button.png`);

  }else{
    playerChoicex10Element.setAttribute("src",`imgs/x10buttonfalse.png`);
    
  }

  x10 = x10 * (-1);

 
}

  
var computerChoice1= 0;
var computerChoice2= 0;
var computerChoice3= 0;



function startGame(){
  if(saldo>0 && saldo < 100000){
  
    computerChoice1= getComputerChoice();
    computerChoice2= getComputerChoice();
    computerChoice3= getComputerChoice();


    playGame(computerChoice1,computerChoice2,computerChoice3);

  }else window.location.replace("credits.html");
 
}

playerChanceElement.addEventListener("click",  () => validateChance());

function playGame(computerChoice1,computerChoice2,computerChoice3){
 
  

  const computerChoiceElement1 = document.getElementById("carrete1");
  const computerChoiceElement2 = document.getElementById("carrete2");
  const computerChoiceElement3 = document.getElementById("carrete3");


  computerChoiceElement1.setAttribute("src", `imgs/carrete1/${computerChoice1}.png`);
  computerChoiceElement2.setAttribute("src", `imgs/carrete2/${computerChoice2}.png`);
  computerChoiceElement3.setAttribute("src", `imgs/carrete3/${computerChoice3}.png`);

  playSound("play");


 
  const result= setResult(computerChoice1,computerChoice2,computerChoice3);


  const resultElements= document.getElementById ("result");
  resultElements.textContent = result;
  
  const counter = setCounter(result);
  const counterElements= document.getElementById("counter");
  saldo=counter;

  counterElements.textContent =`$ ${saldo}`;


}


//playerChanceElement.addEventListener("click", validateChance(computerChoice1,computerChoice2,computerChoice3));


function playSound(soundSelected){

  const sound = document.getElementById(`${soundSelected}`);

  sound.pause();
  sound.currentTime = 0;
  sound.play();

}


function setResult(computerChoice1, computerChoice2, computerChoice3){


  if(computerChoice1==computerChoice2 && computerChoice2==computerChoice3){

    playSound("best");
    return "BEST PRIZE !!!";
  }
  
  if(computerChoice1==computerChoice2 || computerChoice1==computerChoice3 || computerChoice2==computerChoice3){
    playSound("win");
    return "YOU WON !!!";
  }else{
    return "YOU LOST";
  }
  

}

function getComputerChoice(){

     let computerChoice = Math.floor(Math.random() * 9);

  return computerChoice;

}

function setCounter (result){

  let prize=0;

  if (result=="BEST PRIZE"){
    
    prize=2000;
  }else if (result == "YOU WON"){
    prize=100;
  }else{
    prize=(-30);
  }

  if (x10==(-1)){
    prize=prize*10;
  }

  return saldo+prize;

}



function validateChance(){

  if(chance==1){
    playerChanceElement.setAttribute("src", "imgs/chancefalse.png")
  }
  
  if (chance>0){

    playerChanceElement.setAttribute("chance" , chance--);
    chanceElement.textContent=chance;
    computerChoice3= Math.floor(Math.random() * 9);
     
    playGame(computerChoice1,computerChoice2,computerChoice3);

    
  }
  

  
}



  
