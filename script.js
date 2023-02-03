
// trocar pagina

function trocar(e){
    if(e.currentTarget == porqueEl){
        if(guiaPorque.style.display == "none"){
        guiaPorque.style.display = "block";
        guiaInicial.style.display = "none";
        }
        else{
        guiaPorque.style.display = "none";
        guiaInicial.style.display = "grid";
        }
    }
    if(e.currentTarget == sobreMimEl){
        if(guiaSobreMim.style.display == "none"){
        guiaSobreMim.style.display = "block";
        guiaInicial.style.display = "none";
        }
        else{
        guiaSobreMim.style.display = "none";
        guiaInicial.style.display = "grid";
        }
    }
    if(e.currentTarget == expectativasEl){
        if(guiaExpectativas.style.display == "none"){
        guiaExpectativas.style.display = "block";
        guiaInicial.style.display = "none";
        }
        else{
        guiaExpectativas.style.display = "none";
        guiaInicial.style.display = "grid";
        }
    }
}
let guiaExpectativas = document.querySelector('#Expectativas')
let guiaSobreMim = document.querySelector('#SobreMim')
let guiaPorque = document.querySelector('#porqueMeInscrever');
let guiaInicial = document.querySelector('#inicial');

let porqueEl = document.querySelector('#why');
porqueEl.addEventListener('click', trocar)
let sobreMimEl = document.querySelector("#who");
sobreMimEl.addEventListener('click', trocar)
let expectativasEl = document.querySelector("#forWhat");
expectativasEl.addEventListener('click', trocar)