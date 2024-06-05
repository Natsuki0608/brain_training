let element;
let count = 0;
let randomNum1, randomNum2, answer;
// let maxNum = 99;

//ランダムな数字を生成する関数
function randomNumber() {
    randomNum1 = Math.floor(Math.random() * (99 + 1 - 10)) + 10;
    randomNum2 = Math.floor(Math.random() * (9 + 1 - 2)) + 2;
    document.getElementById("num1").textContent = randomNum1;
    document.getElementById("num2").textContent = randomNum2;
    answer = randomNum1 * randomNum2;
    document.getElementById("answerCount").textContent = count;
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
    }
}