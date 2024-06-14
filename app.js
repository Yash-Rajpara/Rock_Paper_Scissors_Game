
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");



// for generating computer choice

    const genCompChoice = () =>{
        let a = ["rock" , "paper" , "scissors"];
        let randIdx = Math.floor(Math.random()*3);
        return a[randIdx];

    };

    // for match draw
    const draw =()=>{
        console.log("match is draw");
        msg.innerText= "Match draw , Play again"; 
        msg.style.backgroundColor="#081b31";       
    };

    const showwineer = (userwin , userchoice, compchoice)=>{
        if(userwin){

            console.log("you win!");
            msg.innerText= `You win! your  ${userchoice} beats ${compchoice}` ;
            msg.style.backgroundColor="green";
            userScore++;
            userScorePara.innerText= userScore; 
        }
        else{
            console.log("you lose");
            msg.innerText= `You lose.  ${compchoice} beats your ${userchoice}`;
            msg.style.backgroundColor="red";
            compScore++;
            compScorePara.innerText=compScore;
        }
    };

    // for playing game and generating output

    const playgame = (userchoice) =>{
        console.log("Usechoice is = " , userchoice);
        const compchoice = genCompChoice();
        console.log("Compchoice is = " , compchoice);

        if(userchoice===compchoice){
            draw();
        }

        else{
            let userwin = true;
            
            if ( userchoice==="rock"){
                userwin = compchoice === "paper" ? false : true ;  
            }

            else if( userchoice==="paper"){
                userwin = compchoice === "scissors" ? false : true ;       
            }

            else{
                userwin = compchoice === "rock" ? false : true ;
            }

            showwineer(userwin , userchoice , compchoice);
            // showwinner(userwin, userchoice, compchoice);
        }
    };

    // for user choice
choices.forEach((choice) =>{

    choice.addEventListener("click" , ()=>{
        const userchoice = choice.getAttribute("id");
        // console.log("choice is clicked" , userchoice);
        playgame(userchoice);

    });
    
});