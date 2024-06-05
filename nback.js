let element;
let count = 0;
let randomNum;
let maxNum = 9;
let minNum = 1;
let nBackArr = [];
let nBackNum;
let arrCount = 0;

//何バックか決める関数
function decideNum() {
    if (isNaN(parseInt(document.getElementById("nBack").value))) {
        document.getElementById("nBack").value = "";
    } else {
        nBackNum = parseInt(document.getElementById("nBack").value);
        document.getElementById("howBack").classList.add("hidden");
        document.getElementById("nBack").classList.add("hidden");
        document.getElementById("num").classList.remove("hidden");
        document.getElementById("btn").classList.remove("hidden");
    }
}

//ランダムな数字を生成する関数
function randomNumber() {
    randomNum = Math.floor(Math.random() * (maxNum + 1 - minNum)) + minNum;
    document.getElementById("num").textContent = randomNum;
    nBackArr.push(randomNum);
    document.getElementById("answerCount").textContent = count;
    console.log(nBackArr);
}

//初期表示
randomNumber();

function inputCheck() {
    element = document.getElementById("culc");
    //正解で更新
    if (element.value == nBackArr[0]) {
        element.value = "";
        count += 1;
        nBackArr.shift();
        randomNumber();
    }
}

function countUp() {
    arrCount++;
    randomNumber();
    if (arrCount == nBackNum) {
        document.getElementById("btn").classList.add("hidden");
        document.getElementById("culc").classList.remove("hidden");
        document.getElementById("point").classList.remove("hidden");
    }
}