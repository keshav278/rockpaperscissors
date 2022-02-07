let list=["rock","paper","scissors"];
function computerPlay(){
    let randIndex=Math.floor(Math.random()*3);
    return list[randIndex];
}
function round(playerSelection,compSelection){
    playerSelection.toLowerCase();
    compSelection.toLowerCase();
    let player=list.indexOf(playerSelection);
    let comp=list.indexOf(compSelection);
    let result;
    if(player===comp)
    {
        result=`You chose ${list[player]}, Computer chose ${list[player]}`+": This round is tied! ";
        return result;
    }
    else if(player===0){
        switch(comp){
            case 1:result=`You chose ${list[player]}, Computer chose ${list[comp]}: You lose! Paper beats rock`;break;
            case 2:result=`You chose ${list[player]}, Computer chose ${list[comp]}: You win! Rock beats scissors`;break;
        }
    }
    else if(player===1){
        switch(comp){
            case 2:result=`You chose ${list[player]}, Computer chose ${list[comp]}: You lose! Scissors beats paper`;break;
            case 0:result=`You chose ${list[player]}, Computer chose ${list[comp]}: You win! Paper beats rock `;break;
        }
    }
    else{
        switch(comp){
            case 1:result=`You chose ${list[player]}, Computer chose ${list[comp]}: You win! Scissors beats paper`;break;
            case 0:result=`You chose ${list[player]}, Computer chose ${list[comp]}: You lose! Rock beats scissors`;break;
        }
    }
      
    return result;
}    

    /*function startGame(){
    let p=0;
    let c=0;

    for(let i=0;i<5;i++)                                                                                                                                                                      
    {
        let player=window.prompt("Rock,paper or scissors?","");
        let comp=computerPlay();
        let string=round(player,comp);
        let colon=string.indexOf(":");
        if(string[colon+6]==='w')
            p++;
        else if(string[colon+6]==='l')
            c++;
        else{}   
        document.getElementById("results").innerHTML+=string+` : Score is ${p}-${c}`+"<br><br>";//console.log(string+` : Score is ${p}-${c}`);
    }
    if(p>c)
    document.getElementById("results").innerHTML+=`You win the game by ${p}-${c}`;//console.log(`You win the game by ${p}-${c}`);
    else if(p<c)
    document.getElementById("results").innerHTML+=`You lose the game by ${p}-${c}`;   //console.log(`You lose the game by ${p}-${c}`);
    else 
    document.getElementById("results").innerHTML+=`The game is tied by ${p}-${c}`;   //console.log(`The game is tied by ${p}-${c}`);
}
*/
let p=0;
let c=0;
const container = document.querySelector('#results');

function playRound(player){
          let comp=computerPlay();
          let string=round(player,comp);
          let colon=string.indexOf(":");
          const content= document.createElement('p');
          if(string[colon+6]==='w')
           p++;
          else if(string[colon+6]==='l')
           c++;
          
          if(p===5)
           {content.textContent=string+` :You win the game by ${p}-${c}   ||Click reset to restart`;
           container.appendChild(content);
            p=0;
            c=0;}
          else if(c===5) 
           {content.textContent=string+` :You lose the game by ${p}-${c}   ||Click reset to restart`;
            p=0;
            c=0;
            container.appendChild(content);}
           else
            {content.textContent=string+` : Score is ${p}-${c}`+"\n\n";
            container.appendChild(content);}
              

}

const rock=document.querySelector('#rock');
const paper=document.querySelector('#paper');
const scissors=document.querySelector('#scissors');
const reset = document.querySelector('#reset');

rock.addEventListener('click',()=>{
    playRound('rock');
});

paper.addEventListener('click',() => {
    playRound('paper');
});

scissors.addEventListener('click',() =>{
    playRound('scissors');
});

reset.addEventListener('click',() =>{
    document.getElementById('results').innerHTML='';
})
 