var diceValue = 0;
var coinValue = 0;
var strValue = 0;
var newStrValue = 0;
var constValue = 0;
var newConstValue = 0;
var dexValue = 0;
var newDexValue = 0;
var intValue = 0;
var newIntValue = 0;
var wisValue = 0;
var newWisValue = 0;
var charValue = 0;
var newCharValue = 0;
var oldStatsTotal = 0;
var newStatsTotal = 0;
var numRolls = 0;



function D4() {
    diceValue = Math.floor(Math.random() * 4) + 1;
    document.getElementById("D4").innerHTML = diceValue;
}

function D6() {
    diceValue = Math.floor(Math.random() * 6) + 1;
    document.getElementById("D6").innerHTML = diceValue;
}

function D8() {
    diceValue = Math.floor(Math.random() * 8) + 1;
    document.getElementById("D8").innerHTML = diceValue;
}

function D10() {
    diceValue = Math.floor(Math.random() * 10) + 1;
    document.getElementById("D10").innerHTML = diceValue;
}

function D12() {
    diceValue = Math.floor(Math.random() * 12) + 1;
    document.getElementById("D12").innerHTML = diceValue;
}

function D20() {
    diceValue = Math.floor(Math.random() * 20) + 1;
    document.getElementById("D20").innerHTML = diceValue;
}

function rollDice() {
    diceValue = Math.floor(Math.random() * 6) + 1;
    //document.getElementById("dice").innerHTML = diceValue;
    //document.write(diceValue);
    //document.write(" ");
    //window.alert(diceValue);
    return diceValue;
}

function flipCoin() {
    coinValue = Math.floor(Math.random() * 2);
    if (coinValue == 0) {
        //document.getElementById("coin").innerHTML = "HEADS";
    }
    else if (coinValue == 1) {
        //document.getElementById("coin").innerHTML = "TAILS";
    }
    else {
        //document.getElementById("coin").innerHTML = "ERROR";
    }
}

var myVar;

function rollPerfectCharacter() {

    //setTimeout(myFunction, 3000)
    //window.setInterval(rollCharacter(), 1000);

    //setInterval(function() { alert("Hello"); }, 3000);
    //setInterval(rollCharacter(), 500);
    myVar = setInterval(function() { rollCharacter(); }, 1);
    console.log("hope it works");


}

function rollCharacter() {
    numRolls = numRolls + 1;
    document.getElementById("count").innerHTML = "You've rolled " + numRolls + " characters";
    //document.getElementByID("count").innerHTML = "You've rolled " + numRolls + " characters";

    newStrValue = rollDice() + rollDice() + rollDice();
    document.getElementById("charStr").innerHTML = "STR: " + newStrValue;

    newConstValue = rollDice() + rollDice() + rollDice();
    document.getElementById("charConst").innerHTML = "CONST: " + newConstValue;

    newDexValue = rollDice() + rollDice() + rollDice();
    document.getElementById("charDex").innerHTML = "DEX: " + newDexValue;

    newIntValue = rollDice() + rollDice() + rollDice();
    document.getElementById("charInt").innerHTML = "INT: " + newIntValue;

    newWisValue = rollDice() + rollDice() + rollDice();
    document.getElementById("charWis").innerHTML = "WIS: " + newWisValue;

    newCharValue = rollDice() + rollDice() + rollDice();
    document.getElementById("charChar").innerHTML = "CHAR: " + newCharValue;

    newStatsTotal = newStrValue + newConstValue + newDexValue + newIntValue + newWisValue + newCharValue;
    document.getElementById("statsTotal").innerHTML = "TOTAL: " + newStatsTotal;
    console.log(newStatsTotal);
    if (newStatsTotal >= oldStatsTotal) {
        console.log(newStatsTotal);
        strValue = newStrValue;
        document.getElementById("newCharStr").innerHTML = "STR: " + newStrValue;
        constValue = newConstValue;
        document.getElementById("newCharConst").innerHTML = "CONST: " + newConstValue;
        dexValue = newDexValue;
        document.getElementById("newCharDex").innerHTML = "DEX: " + newDexValue;
        intValue = newIntValue;
        document.getElementById("newCharInt").innerHTML = "INT: " + newIntValue;
        wisValue = newWisValue;
        document.getElementById("newCharWis").innerHTML = "WIS: " + newWisValue;
        charValue = newCharValue;
        document.getElementById("newCharChar").innerHTML = "CHAR: " + newCharValue;
        oldStatsTotal = newStatsTotal;
        document.getElementById("newStatsTotal").innerHTML = "TOTAL: " + newStatsTotal;
        document.getElementById("charCount").innerHTML = "This is character #" + numRolls;
        console.log(oldStatsTotal);
    }
    if (newStatsTotal >= 108) {
        clearInterval((myVar));
    }

}
