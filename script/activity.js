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

        //Apenas aos elementos seguintes ao clicado
        if (j > i) {
            resetBotaoFlutua(j);
            resetBotaoAfunda(j);

            //Reset ao estilo
            document.getElementById("activity-item" + j).style.backgroundColor = "#ffffff";
            document.getElementById("activity-item" + j).querySelector(".during-activity-item-right").style.display = "none";
            document.getElementById("activity-item" + j).querySelector(".during-activity-item-right-lock").style.display = "flex";

        }


    }
}

function changeToAfunda(i) {
    //Aparece o texto
    document.getElementById("activity-item" + i).querySelector(".during-activity-item-content").style.display = "block";

    //Muda o estilo
    document.getElementById("activity-item" + i).style.backgroundColor = "#E5F1FF";
    //Muda o botão para não clicável
    document.getElementById("activity-item" + i).querySelector(".afunda-button").classList.remove("during-activity-item-button");
    document.getElementById("activity-item" + i).querySelector(".afunda-button").classList.add("during-activity-item-button-disabled");

    //Retira o onclick
    document.getElementById("activity-item" + i).querySelector(".afunda-button").onclick = null;

    //Reset ao botão do lado
    resetBotaoFlutua(i);
}

function changeToFlutua(i) {
    //Desparece o texto
    document.getElementById("activity-item" + i).querySelector(".during-activity-item-content").style.display = "none";

    //Muda o estilo
    document.getElementById("activity-item" + i).style.backgroundColor = "#E5F1FF";
    //Muda o botão para não clicável
    document.getElementById("activity-item" + i).querySelector(".flutua-button").classList.remove("during-activity-item-button");
    document.getElementById("activity-item" + i).querySelector(".flutua-button").classList.add("during-activity-item-button-disabled");

    //Retira o onclick
    document.getElementById("activity-item" + i).querySelector(".flutua-button").onclick = null;
    //Reset ao botão do lado
    resetBotaoAfunda(i);
}
function resetBotaoFlutua(i) {
    //Redefine os estilos
    document.getElementById("activity-item" + i).querySelector(".flutua-button").classList.add("during-activity-item-button");
    document.getElementById("activity-item" + i).querySelector(".flutua-button").classList.remove("during-activity-item-button-disabled");
    //Redefine o onclick para ser clicável
    document.getElementById("activity-item" + i).querySelector(".flutua-button").onclick = function () { flutua(i) };


}


function resetBotaoAfunda(i) {
        //Redefine os estilos
    document.getElementById("activity-item" + i).querySelector(".afunda-button").classList.add("during-activity-item-button");
    document.getElementById("activity-item" + i).querySelector(".afunda-button").classList.remove("during-activity-item-button-disabled");
    //Redefine o onclick para ser clicável
    document.getElementById("activity-item" + i).querySelector(".afunda-button").onclick = function () { afunda(i) };
}

function changeNextItem(i) {
    //Faz com que os botões do próximo item apareçam
    document.getElementById("activity-item" + (i + 1)).querySelector(".during-activity-item-right").style.display = "grid";
    //E o cadeado desapareça
    document.getElementById("activity-item" + (i + 1)).querySelector(".during-activity-item-right-lock").style.display = "none";
}
function changeDivider(i) {
    //Todos invisíveis
    document.getElementById("during-activity-divider1").style.display = "none";
    document.getElementById("during-activity-divider2").style.display = "none";
    document.getElementById("during-activity-divider3").style.display = "none";

    //Apenas um visível
    //Os últimos itens (3 e 4) não alteram
    if (i != 4 && i != 3) {
        i += 1;
        document.getElementById("during-activity-divider" + i).style.display = "block";
    }

}
