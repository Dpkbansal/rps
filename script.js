let n = prompt("How many rounds do you want to play? (Max. Rounds 10)","");

if(n>0 && n<= 10 && isNaN(n)==false){
    let computerChoice = "";
    let playerChoice = "";
    let computerChoiceArray=[];
    function computerPlay(){
        let choices = ["rock","paper","scissors"];
        computerChoice = choices[Math.floor(Math.random()*choices.length)];
        document.querySelector("#computerChoice").textContent=computerChoice;
        computerChoiceArray.push(computerChoice);
    }

    document.querySelectorAll("button").forEach((button) => {
        button.addEventListener('click',function(){
            if(button.id =="rock"|| button.id =="paper" || button.id =="scissors"){
            playerChoice =button.id;
            document.querySelector("#playerChoice").textContent=playerChoice;
            button.classList.add("buttonTransform");
            computerPlay();
            game();

            setTimeout(function(){
                button.classList.remove('buttonTransform');
            },70)
            }
        });
    })

    document.querySelector('.playAgain').disabled =true;
    
    let computerPoints =0;
    let playerPoints =0;
    let totalComputerPoints =0;
    let totalPlayerPoints =0;
    
    function game(){
        switch (playerChoice){
            case "rock":{
                if(computerChoice == "paper"){
                    computerPoints =1;
                    playerPoints =0;
                }
                else if(computerChoice == "scissors"){
                    computerPoints =0;
                    playerPoints =1;
                }
                else{
                    computerPoints =1;
                    playerPoints =1;
                }
                break;
            }
            case "paper":{
                if(computerChoice == "rock"){
                    computerPoints =0;
                    playerPoints =1;
                }
                else if(computerChoice == "scissors"){
                    computerPoints =1;
                    playerPoints =0;
                }
                else{
                    computerPoints =1;
                    playerPoints =1;
                }
                break;
            }
            case "scissors":{
                if(computerChoice == "paper"){
                    computerPoints =0;
                    playerPoints =1;
                }
                else if(computerChoice == "rock"){
                    computerPoints =1;
                    playerPoints =0;
                }
                else{
                    computerPoints =1;
                    playerPoints =1;
                }
                break;
            }
        }
        totalComputerPoints += computerPoints;
        totalPlayerPoints += playerPoints;
        console.log("PP:"+playerPoints);
        console.log("TPP:"+totalPlayerPoints);

        let playerBoxes =0;
        let playerBox =0;
        if(playerPoints == 1 && totalPlayerPoints == 1){

            playerBoxes = document.createElement('div');
            playerBoxes.classList.add('playerBoxes');
            playerBoxes.style.gridArea = "playerBoxes"
            playerBoxes.style.display = "flex";
            playerBoxes.style.flexDirection ="column";
            document.querySelector('#boxes').appendChild(playerBoxes);

            playerBox =document.createElement("div");
            playerBox.classList.add('playerBox');
            playerBox.style.borderRadius ="50%"
            playerBox.style.width = "3rem";
            playerBox.style.height = "3rem";
            playerBox.style.backgroundColor = "green"
            playerBoxes.appendChild(playerBox);

        }
        else if(playerPoints ==1 && totalPlayerPoints >1){
            playerBox =document.createElement("div");
            playerBox.classList.add('playerBox');
            playerBox.style.borderRadius = "50%";
            playerBox.style.width = "3rem";
            playerBox.style.height = "3rem";
            playerBox.style.backgroundColor = "green"
            document.querySelector('.playerBoxes').appendChild(playerBox);
        }

        let computerBoxes =0;
        let computerBox =0;
        if(computerPoints ==1 && totalComputerPoints == 1){

            computerBoxes = document.createElement('div');
            computerBoxes.classList.add('computerBoxes');
            computerBoxes.style.gridArea = "computerBoxes";
            computerBoxes.style.display = "flex";
            computerBoxes.style.flexDirection ="column";
            document.querySelector('#boxes').appendChild(computerBoxes);

            computerBox =document.createElement("div");
            computerBox.classList.add('computerBox');
            computerBox.style.borderRadius = "50%";
            computerBox.style.width = "3rem";
            computerBox.style.height = "3rem";
            computerBox.style.backgroundColor = "red"
            computerBoxes.appendChild(computerBox);
        }
        else if(computerPoints ==1 && totalComputerPoints>1){
            
            computerBox =document.createElement("div");
            computerBox.classList.add('computerBox');
            computerBox.style.borderRadius = "50%";
            computerBox.style.width = "3rem";
            computerBox.style.height = "3rem";
            computerBox.style.backgroundColor = "red"
            document.querySelector('.computerBoxes').appendChild(computerBox);
        }

        let result ="";

        if(computerChoiceArray.length == n){
            if(totalComputerPoints == totalPlayerPoints){
                result = "IT'S A DRAW!";
                document.querySelector("#result").textContent = result;
            }
            else{
                if(totalComputerPoints > totalPlayerPoints){
                    result = "YOU LOSE!";
                    document.querySelector("#result").textContent = result;
                }
                else if(totalPlayerPoints > totalComputerPoints){
                    result = "YOU WIN!";
                    document.querySelector("#result").textContent = result;
                }
            }
        }

        
        if(Array.from(result).length>0){
            document.querySelector('#rock').disabled =true;
            document.querySelector('#paper').disabled =true;
            document.querySelector('#scissors').disabled =true;
            document.querySelector('.playAgain').disabled =false;
        }
            document.querySelector(".playAgain").addEventListener('click',function(){
                
                document.querySelector('#rock').disabled =false;
                document.querySelector('#paper').disabled =false;
                document.querySelector('#scissors').disabled =false;
                document.querySelector(".playAgain").disabled =true;

                totalComputerPoints=0;
                totalPlayerPoints=0;

                computerChoice ="";
                computerChoiceArray=[];
                document.querySelector("#computerChoice").textContent=computerChoice;

                playerChoice ="";
                document.querySelector("#playerChoice").textContent=playerChoice;

                result ="";
                document.querySelector("#result").textContent = result;

                document.querySelectorAll(".playerBox").forEach((div) => {
                    div.style.backgroundColor="white";
                    div.style.width ="0";
                    div.style.height ="0";
                    div.style.border ="0";
                })
                
                document.querySelectorAll(".computerBox").forEach((div) => {
                    div.style.backgroundColor="white";
                    div.style.width ="0";
                    div.style.height ="0";
                    div.style.border ="0";
                }) 
            
            })
    }
}
else{
    alert ("Please enter a valid input");
}