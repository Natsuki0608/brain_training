let element;
let count = 0;
let randomNum;
let answer = 0;
let maxNum = 99;
let minNum = 10;

//ランダムな数字を生成する関数
function randomNumber() {
    randomNum = Math.floor(Math.random() * (maxNum + 1 - minNum)) + minNum;
    document.getElementById("num").textContent = randomNum;
    answer += randomNum;
    document.getElementById("answerCount").textContent = count;
    console.log(answer);
}

//初期表示
randomNumber();

function inputCheck() {
    element = document.getElementById("culc");
    //正解で更新
    if (element.value == answer) {
        element.value = "";
        count += 1;
        randomNumber();
        document.getElementById("start").classList.add("hidden");
    }
}