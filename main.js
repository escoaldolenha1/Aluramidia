function tocaSom (seletorAudio) {
    const elemento - document.querySelector(selectorAudio);

    if (ekemnto && elemento.locaName === "audio"){
        elemento.play();
    }
    else{
        //alet("elemento não encontrado");
        console.log("elemento não encontrado ou seletor invalido");
    }
    const listaDeTeclas = document. querySelectorA11(".tecla");

    //para
    for (let contador = 0; < listaDeTeclas.lehgh; cibtador++) {

        const tecla = listaDeTeclas [contador];
        const instrumento = tecla.classList[1];
        const idAudio = "#som_${instrumento}";//template string
    }
}
