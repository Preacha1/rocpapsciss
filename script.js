
let count =0;
let wins =0;
let lose=0;
let tie=0;

/** This function checks the button that was selected rock/paper/scissors nd assigns a numerical value*/
function comCheck(gameSelect){
   
    if (gameSelect===0){

        document.getElementById('comchoice').src='img/rock.png';
        return 0;
    }
    else if (gameSelect===1){
        document.getElementById('comchoice').src='img/paper.png';
        return 1;
    }
    else if (gameSelect===2){
        document.getElementById('comchoice').src='img/scissors.png';
        return 2;

    }
    else{
        return("Error, this is not possible.");
    }

}


/**This function compares computer choice with the users choice */
function winCheck(func1){
    
    var func2 = Math.floor(Math.random()*1000)%3;//this randomizes the selection of rock paper scissors...
    comCheck(func2); // this function checks the selection of the computer and assigns a value that equates to rock/paper/scissors
    

    if ((func1===1 && func2===0)||(func1===2 && func2===1)||(func1===0 && func2===2)){
        document.getElementById('match').innerHTML="You win!!";
        wins++;
    }//check for values where user wins
    else if ( func1===func2){
        document.getElementById('match').innerHTML="You tie!!";
        tie++;
    }//check for values where user ties
    else{
        document.getElementById('match').innerHTML="You lose!!";
        lose++;
    }//check for values where user lose
    document.getElementById('win').innerHTML=wins;
    document.getElementById('lose').innerHTML=lose;
}

/** keeps track of the amount of games and also prints final score */
function endCall(){
    count++;
    var stats;
    
    if (count<5){
        console.log(count);
        }

    else{
        
        if(wins>lose){
            stats="You win it all!!";
            }
        else if(tie===count || wins===lose){
            stats="It is a complete tie!!";
            }
        else{
            stats="You lose it all!!";
        }

        document.getElementById('gamebody').style.display='none';
        document.getElementById('status').innerHTML=stats;
        document.getElementById('finishgame').style.display='flex';
        document.getElementById('score').innerHTML=`Wins: ${wins}, Loses: ${lose}, Ties:${tie}`;
        count=0;
        wins =0;
        lose=0;
        tie=0;
        

        
        

        }
    }


    

  /**function call */
        
        const paper=document.getElementById("paper");
        paper.addEventListener("click",function(){
           var resp = 1;
            winCheck(resp);
            endCall();
            });
            
        
        const scissors=document.getElementById("scissors");
        scissors.addEventListener("click",function(){
        var resp = 2;
            winCheck(resp);
            endCall();
        });

        const rock=document.getElementById("rock");
        rock.addEventListener("click",function(){
        var resp = 0;
        winCheck(resp);
        endCall();
        });
