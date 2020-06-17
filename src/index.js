const startBtn = document.querySelector('button[type=submit]'),
    mainBox = document.querySelector('.mainBox'),
    progressBar = document.querySelector('.progressBar'),
    form = document.querySelector('.inputNumber'),
    quest = document.querySelector('.question'),
    resultMSG = document.querySelector('.result'),
    resBtn = document.querySelector('.resetBtn');

const MAX_TIME = 2*100;
var gameEnder = 1;
var score = 0;
dump = 0;

function printProgress(interval) {
    const bar = progressBar.querySelector('progress');
    const number = progressBar.querySelector('div');
    interval = interval / 100.0;
    number.innerText = parseInt(interval)+1;
    bar.value = interval;
}
function countTime() {
    var time = MAX_TIME;
    const loop = setInterval(function () {
        time--;
        printProgress(time);
        if (time == 0) {
            clearInterval(loop);
        }
    }, 10);
}

function win() {
    resultMSG.innerText = "오 맞췄누";
    resultMSG.style.color = 'green';
    setTimeout(() => {
        resultMSG.style.color = 'black';
    },1000)
    score++;
}

function lose() {
    resultMSG.innerText = "틀렸네 ㅋㅋㅋㅋㅋ";
    resultMSG.style.color = 'red';
    setTimeout(() => {
         resultMSG.style.color = 'black';
    }, 1000);
    setTimeout(() => {
        resultMSG.innerText = `총점 : ${score}점`;
    }, 1000);
    resBtn.style = 'display: inline-block;text-align:center;';
}

function inGame() {
    var result = "";
    const rand = randNum();
    const what = isPrime(rand);
    quest.innerText = rand;
    progressBar.querySelector('progress').unchecked;
    countTime();
    setTimeout(() => {
        result = form.querySelector('input[type=radio]:checked').value;
        if (result === "소수") {
            result = true;
        }  else {
            result = false;
        }
        if (result === what) {
            win();
            inGame();
        }
        else {
            lose();
        }
    }, MAX_TIME*10);
}

function enterGame() {
    mainBox.removeChild(startBtn);
    quest.innerText = `${MAX_TIME/100}초뒤 시작.....`;
    countTime();
    setTimeout(inGame, MAX_TIME*10);
}
function reload() {
    window.location.reload();
    //history.go(0);
}

function init() {
    startBtn.addEventListener('click', enterGame);
    resBtn.addEventListener('click', reload);
}
init();