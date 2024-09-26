console.log("Toss Game");

var button_1 = document.querySelector ("#button_1");
var button_2 = document.querySelector ("#button_2");
var image = document.querySelector ("img");
var result = document.querySelector ("#result");

function result_Toss(toss_answer) {
    var toss_Num = Math.random() * 2;
    var toss = Math.ceil(toss_Num);

    if (toss_answer === 1 && toss === 1 || toss_answer === 2 && toss === 2) {
        result.innerHTML = "Congratulations! You Have Won The Toss";
        console.log("Congratulation! You Have Won The Toss " + toss);
    }
    else{
        result.innerHTML = "You Have Loss The Toss";
        console.log("You Have Loss The Toss " + toss);
    }

    if (toss === 1) {
        image.src = "./assets/Heads Coin.jpg";
    }
    else{
        image.src = "./assets/Tails Coin.jpg";
    }
}