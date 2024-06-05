let element;
let count = 0;
let randomNum1, randomNum2, answer;
let maxNum = 9999;
let minNum = 1000;

//ランダムな数字を生成する関数
function randomNumber() {
    randomNum1 = Math.floor(Math.random() * (maxNum + 1 - minNum)) + minNum;
    randomNum2 = Math.floor(Math.random() * (maxNum + 1 - minNum)) + minNum;
    document.getElementById("num1").textContent = randomNum1;
    document.getElementById("num2").textContent = randomNum2;
    answer = randomNum1 + randomNum2;
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