function flutua(i) {
    console.log(i);
    resetItems(i);
    changeDivider(i);
    changeToFlutua(i);
    changeNextItem(i);

}

function afunda(i) {
    console.log(i);
    resetItems(i);
    changeDivider(i - 1);
    changeToAfunda(i);
}



function resetItems(i) {
    for (var j = 1; j <= 4; j++) {

        //Retira o texto
        document.getElementById("activity-item" + j).querySelector(".during-activity-item-content").style.display = "none";

        //reset botoes


        //Apenas aos elementos seguintes ao clicado
        if (j > i) {

            resetBotaoFlutua(j);
            resetBotaoAfunda(j);

            document.getElementById("activity-item" + j).style.backgroundColor = "#ffffff";
            document.getElementById("activity-item" + j).querySelector(".during-activity-item-right").style.display = "none";
            document.getElementById("activity-item" + j).querySelector(".during-activity-item-right-lock").style.display = "flex";

        }


    }
}

function changeToAfunda(i) {

    document.getElementById("activity-item" + i).querySelector(".during-activity-item-content").style.display = "block";
    //muda os estilos
    document.getElementById("activity-item" + i).style.backgroundColor = "#E5F1FF";
    document.getElementById("activity-item" + i).querySelector(".afunda-button").classList.remove("during-activity-item-button");
    document.getElementById("activity-item" + i).querySelector(".afunda-button").classList.add("during-activity-item-button-disabled");

    //remove onclick
    document.getElementById("activity-item" + i).querySelector(".afunda-button").onclick = null;

    resetBotaoFlutua(i);
}

function changeToFlutua(i) {
    //muda os estilos
    document.getElementById("activity-item" + i).style.backgroundColor = "#E5F1FF";
    document.getElementById("activity-item" + i).querySelector(".flutua-button").classList.remove("during-activity-item-button");
    document.getElementById("activity-item" + i).querySelector(".flutua-button").classList.add("during-activity-item-button-disabled");


    document.getElementById("activity-item" + i).querySelector(".during-activity-item-content").style.display = "none";

    //remove onclick
    document.getElementById("activity-item" + i).querySelector(".flutua-button").onclick = null;

    resetBotaoAfunda(i);
}
function resetBotaoFlutua(i) {

    document.getElementById("activity-item" + i).querySelector(".flutua-button").classList.add("during-activity-item-button");
    document.getElementById("activity-item" + i).querySelector(".flutua-button").classList.remove("during-activity-item-button-disabled");

    document.getElementById("activity-item" + i).querySelector(".flutua-button").onclick = function () { flutua(i) };


}


function resetBotaoAfunda(i) {
    document.getElementById("activity-item" + i).querySelector(".afunda-button").classList.add("during-activity-item-button");
    document.getElementById("activity-item" + i).querySelector(".afunda-button").classList.remove("during-activity-item-button-disabled");

    document.getElementById("activity-item" + i).querySelector(".afunda-button").onclick = function () { afunda(i) };
}

function changeNextItem(i) {
    document.getElementById("activity-item" + (i + 1)).querySelector(".during-activity-item-right").style.display = "grid";
    document.getElementById("activity-item" + (i + 1)).querySelector(".during-activity-item-right-lock").style.display = "none";
}
function changeDivider(i) {
    document.getElementById("during-activity-divider1").style.display = "none";
    document.getElementById("during-activity-divider2").style.display = "none";
    document.getElementById("during-activity-divider3").style.display = "none";
    //os ultimos itens (3 e 4) não alteram
    if (i != 4 && i != 3) {
        i += 1;
        document.getElementById("during-activity-divider" + i).style.display = "block";
    }

}
