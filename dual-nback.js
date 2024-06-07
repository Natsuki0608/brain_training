let element;
let count = 0;
let randomNum;
let maxNum = 9;
let minNum = 1;
let nBackArr = [];
let nBackNum;
let colorNum = 0;
let arrCount = 0;
let colorArr = [{
    colorClass: "text-red-500",
    colorInitial: "r"
}, {
    colorClass: "text-yellow-300",
    colorInitial: "y"
}, {
    colorClass: "text-green-500",
    colorInitial: "g"
}, {
    colorClass: "text-blue-500",
    colorInitial: "b"
}, {
    colorClass: "text-slate-100",
    colorInitial: "w"
}];


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
    document.getElementById("num").classList.remove(colorArr[colorNum].colorClass);
    randomNum = Math.floor(Math.random() * (maxNum + 1 - minNum)) + minNum;
    colorNum = Math.floor(Math.random() * (colorArr.length));
    document.getElementById("num").textContent = randomNum;
    document.getElementById("num").classList.add(colorArr[colorNum].colorClass);
    nBackArr.push(colorArr[colorNum].colorInitial + randomNum);
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