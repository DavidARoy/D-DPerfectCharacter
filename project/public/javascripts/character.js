$(document).ready(function() {
    $("#postCharacter").click(function() {
        //var myobj = { STR: $("#STR").val(), CONST: $("#CONST").val(), DEX: $("#DEX").val(), INT: $("#INT").val(), WIS: $("#WIS").val(), CHAR: $("#CHAR").val(), TOTAL: $("#TOTAL").val() };
        var myobj = { STR: $("#charStr").val(), CONST: $("#charConst").val(), DEX: $("#charDex").val(), INT: $("#charInt").val(), WIS: $("#charWis").val(), CHAR: $("#charChar").val(), TOTAL: $("#statsTotal").val() };
        var jobj = JSON.stringify(myobj);
        $("#json").text(jobj);
        var url = "character";
        $.ajax({
            url: url,
            type: "POST",
            data: jobj,
            contentType: "application/json; charset=utf-8",
            success: function(data, textStatus) {
                //$("#done").html(textStatus);
            }
        });
    });
    
    $("#postBestCharacter").click(function() {
        //var myobj = { STR: $("#STR").val(), CONST: $("#CONST").val(), DEX: $("#DEX").val(), INT: $("#INT").val(), WIS: $("#WIS").val(), CHAR: $("#CHAR").val(), TOTAL: $("#TOTAL").val() };
        var myobj = { STR: $("#bestCharStr").val(), CONST: $("#bestCharConst").val(), DEX: $("#bestCharDex").val(), INT: $("#bestCharInt").val(), WIS: $("#bestCharWis").val(), CHAR: $("#bestCharChar").val(), TOTAL: $("#bestStatsTotal").val() };
        var jobj = JSON.stringify(myobj);
        $("#json").text(jobj);
        var url = "character";
        $.ajax({
            url: url,
            type: "POST",
            data: jobj,
            contentType: "application/json; charset=utf-8",
            success: function(data, textStatus) {
                //$("#done").html(textStatus);
            }
        });
    });

    $("#getCharacters").click(function() {
        var url = "character";
        var count = 0;

        $.getJSON(url, function(data) {
            console.log(data);
            var everything = "";
            for (var character in data) {
                count++;
                char = data[character];
                everything += "<div class='dontBreakMyCharacter'>";
                everything += "<h3> Character#" + count + "</h3>";
                everything += "<ul>";
                everything += "<li> STR: " + char.STR + "</li>";
                everything += "<li> CONST: " + char.CONST + "</li>";
                everything += "<li> DEX: " + char.DEX + "</li>";
                everything += "<li> INT: " + char.INT + "</li>";
                everything += "<li> WIS: " + char.WIS + "</li>";
                everything += "<li> CHAR: " + char.CHAR + "</li>";
                everything += "<li> TOTAL: " + char.TOTAL + "</li>";
                everything += "</ul>";
                everything += "</div>";
            }
            $("#characters").html(everything);
        });
    });

    $("#deleteCharacters").click(function() {
        console.log("Delete Button Pushed");
        $("#characters").html("");
        var url = "character";
        $.ajax({
            url: url,
            type: "DELETE",
            success: function(data, textStatus) {
                console.log("Hopefully it deleted");
            }
        });
    });
});

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

function rollDice() {
    diceValue = Math.floor(Math.random() * 6) + 1;
    //document.getElementById("dice").innerHTML = diceValue;
    //document.write(diceValue);
    //document.write(" ");
    //window.alert(diceValue);
    return diceValue;
}

function rollCharacter() {
    numRolls = numRolls + 1;
    document.getElementById("count").innerHTML = "You've rolled " + numRolls + " characters";
    //document.getElementByID("count").innerHTML = "You've rolled " + numRolls + " characters";

    newStrValue = rollDice() + rollDice() + rollDice();
    document.getElementById("charStr").innerHTML = newStrValue;

    newConstValue = rollDice() + rollDice() + rollDice();
    document.getElementById("charConst").innerHTML = newConstValue;

    newDexValue = rollDice() + rollDice() + rollDice();
    document.getElementById("charDex").innerHTML = newDexValue;

    newIntValue = rollDice() + rollDice() + rollDice();
    document.getElementById("charInt").innerHTML = newIntValue;

    newWisValue = rollDice() + rollDice() + rollDice();
    document.getElementById("charWis").innerHTML = newWisValue;

    newCharValue = rollDice() + rollDice() + rollDice();
    document.getElementById("charChar").innerHTML = newCharValue;

    newStatsTotal = newStrValue + newConstValue + newDexValue + newIntValue + newWisValue + newCharValue;
    document.getElementById("statsTotal").innerHTML = newStatsTotal;
    console.log(newStatsTotal);
    if (newStatsTotal >= oldStatsTotal) {
        console.log(newStatsTotal);
        strValue = newStrValue;
        document.getElementById("bestCharStr").innerHTML = newStrValue;
        constValue = newConstValue;
        document.getElementById("bestCharConst").innerHTML = newConstValue;
        dexValue = newDexValue;
        document.getElementById("bestCharDex").innerHTML = newDexValue;
        intValue = newIntValue;
        document.getElementById("bestCharInt").innerHTML = newIntValue;
        wisValue = newWisValue;
        document.getElementById("bestCharWis").innerHTML = newWisValue;
        charValue = newCharValue;
        document.getElementById("bestCharChar").innerHTML = newCharValue;
        oldStatsTotal = newStatsTotal;
        document.getElementById("bestStatsTotal").innerHTML = newStatsTotal;
        document.getElementById("charCount").innerHTML = "This is character #" + numRolls;
        console.log(oldStatsTotal);
    }

}
