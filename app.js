const select = document.querySelector('select');
const player1 = document.querySelector('.player1btn'); 
const player2 = document.querySelector('.player2btn');
const score1 = document.querySelector('#player1');
const score2 = document.querySelector('#player2');
const reset = document.querySelector('.reset');
let limit = parseInt(select.value);

select.addEventListener('change',function(){
    limit = parseInt(select.value);
})

const score = [0,0];
player1.addEventListener('click',function(){
    score[0]++;
    score1.innerText = score[0];  
    if(score[0]>=limit){
        score1.classList.add('win');
        score2.classList.add('lose');
        disable();
    }  
});
player2.addEventListener('click',function(){
    score[1]++;
    score2.innerText = score[1];
    if(score[1]===limit){
        score2.classList.add('win');
        score1.classList.add('lose');
        disable();
    }  
});

reset.addEventListener('click',function(){
    select.classList.remove('limit');
    player1.classList.remove('player1btn');
    player2.classList.remove('player2btn');
    select.classList.add('limit');
    player1.classList.add('player1btn');
    player2.classList.add('player2btn');
    select.disabled = false;
    player1.disabled = false;
    player2.disabled = false;
    select.classList.remove('disabled');
    player1.classList.remove('disabled');
    player2.classList.remove('disabled');
    score1.classList.remove('win');
    score1.classList.remove('lose');
    score2.classList.remove('win');
    score2.classList.remove('lose');
    score[0] = 0;
    score[1] = 0;
    score1.innerText = score[0];
    score2.innerText = score[1];
})

function disable(){
    select.disabled = true;
    player1.disabled = true;
    player2.disabled = true;
    select.classList.add('disabled');
    player1.classList.add('disabled');
    player2.classList.add('disabled');  

}