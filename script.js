let score={
    win:0,
    lost:0,
    tie:0,
    displayScore: function(){
        return `Wins: ${score.win}. Losts: ${score.lost}. Ties: ${score.tie}`
    }
};
let computerChoice;
function generateComputerChoice() {
    let randomNumber=Math.random()*3;
    if(randomNumber>0 && randomNumber<=1){
    return 'Rock';
    }
    else if(randomNumber>1 && randomNumber<=2){
    return'Paper';
    }
    else{
    return'Scissors';
    }
}
function getResult(computerChoice,userChoice) {
    if(userChoice==='Rock'){
        if(computerChoice==='Rock'){score.tie++; return 'You and Computer have a tie';}
        if(computerChoice==='Paper'){score.lost++; return 'Computer won';}
        if(computerChoice==='Scissors'){score.win++; return 'You won';}
    }
    if(userChoice==='Paper'){
        if(computerChoice==='Rock'){score.win++; return 'You won';}
        if(computerChoice==='Paper'){score.tie++; return 'You and Computer have a tie';}
        if(computerChoice==='Scissors'){score.lost++; return 'Computer won';}
    }
    if(userChoice==='Scissors'){
        if(computerChoice==='Rock'){score.lost++; return 'Computer won';}
        if(computerChoice==='Paper'){score.win++; return 'You won';}
        if(computerChoice==='Scissors')score.tie++; {return 'You and Computer have a tie';}
    }
}
function changeMessage(s){
    let message=document.querySelector('.message');
    message.innerHTML=`
    You chose ${s}. Computer chose ${computerChoice}. ${result}.
    <h4>Play again!</h4>`;
}
function updateResult(){
    let allcontent=document.querySelector('.all-content');
    allcontent.innerHTML=`
    <div class="results">
            <div class="result">
                <div class="heading">Rounds Won</div>
                <div class="number">${score.win}</div>
            </div>
            <div class="result">
                <div class="heading"> Rounds Lost</div>
                <div class="number">${score.lost}</div>
            </div>
            <div class="result" style="border: none;">
                <div class="heading">Rounds Tied</div>
                <div class="number">${score.tie}</div>
            </div>
        </div>
        <button class="reset" onclick="resetOp();">RESET</button>`
}
function resetOp(){
    score.win=0;
    score.lost=0;
    score.tie=0;
    let report=document.querySelector('.report');
    report.innerHTML=`
    <div class="message">Choose one of the above!</div>
    <div class="all-content">
        <div class="results">
            <div class="result">
                <div class="heading">Rounds Won</div>
                <div class="number">0</div>
            </div>
            <div class="result">
                <div class="heading"> Rounds Lost</div>
                <div class="number">0</div>
            </div>
            <div class="result" style="border: none;">
                <div class="heading">Rounds Tied</div>
                <div class="number">0</div>
            </div>
        </div>
    </div>`;
}