let element;
let count = 0;
let randomNum1, randomNum2, randomNum3, answer;
let maxNum = 9;
let minNum = 1;

//ランダムな数字を生成する関数
function randomNumber() {
    randomNum1 = Math.floor(Math.random() * (maxNum + 1 - minNum)) + minNum;
    randomNum2 = Math.floor(Math.random() * (maxNum + 1 - minNum)) + minNum;
    randomNum3 = Math.floor(Math.random() * (maxNum + 1 - minNum)) + minNum;
    document.getElementById("num1").textContent = randomNum1;
    document.getElementById("num2").textContent = randomNum2;
    document.getElementById("num3").textContent = randomNum3;
    answer = randomNum1 + randomNum2 + randomNum3;
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