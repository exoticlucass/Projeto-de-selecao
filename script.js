
// trocar pagina

function trocar(e){
    if(e.currentTarget == porqueEl){
        if(guiaPorque.style.display == "none"){
            guiaPorque.style.display = "block";
            guiaInicial.style.display = "none";
            escVoltar.style.display = "block";
        }
        else{
            guiaPorque.style.display = "none";
            guiaInicial.style.display = "grid";
            escVoltar.style.display = "none";
        }
    }
    if(e.currentTarget == sobreMimEl){
        if(guiaSobreMim.style.display == "none"){
            guiaSobreMim.style.display = "flex";
            guiaInicial.style.display = "none";
            escVoltar.style.display = "block";
        }
        else{
            guiaSobreMim.style.display = "none";
            guiaInicial.style.display = "grid";
            escVoltar.style.display = "none";
        }
    }
    if(e.currentTarget == expectativasEl){
        if(guiaExpectativas.style.display == "none"){
            guiaExpectativas.style.display = "block";
            guiaInicial.style.display = "none";
            escVoltar.style.display = "block";
        }
        else{
            guiaExpectativas.style.display = "none";
            guiaInicial.style.display = "grid";
            escVoltar.style.display = "none";
        }
    }
}
let guiaExpectativas = document.querySelector('#Expectativas')
let guiaSobreMim = document.querySelector('#SobreMim')
let guiaPorque = document.querySelector('#porqueMeInscrever');
let guiaInicial = document.querySelector('#inicial');
let escVoltar = document.querySelector('#esc')

let porqueEl = document.querySelector('#why');
porqueEl.addEventListener('click', trocar)
let sobreMimEl = document.querySelector("#who");
sobreMimEl.addEventListener('click', trocar)
let expectativasEl = document.querySelector("#forWhat");
expectativasEl.addEventListener('click', trocar)

// data atual
function dateDiferencaEmDias(a, b) {
    let data1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    let data2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
 
    return Math.floor((data2 - data1) / ( 1000 * 60 * 60 * 24) );
 }
let atual = new Date();
let bissexto = new Date("2023/01/26");
let nasc = new Date("2007/01/26");
let diasErrados = dateDiferencaEmDias(nasc,bissexto)%365;
diasDiferenca = dateDiferencaEmDias(nasc,atual);
diasDiferenca = diasDiferenca-diasErrados;

anos = diasDiferenca/365;
dias = diasDiferenca%365;
let textoSobremim = document.querySelector('#Texto-sobreMim');
textoSobremim.innerHTML = "Meu nome é Lucas de Almeida Rocha tenho "+Math.trunc(anos)+" anos e "+dias+" dias e sou aluno do 2° ano como tecnico em informatica no CEFET-MG. Desde pequeno gosto muito de computação e acabei tendo interesse na área e no curso. Quero aproveitar ao máximo os conhecimentos oferecidos pelo CEFET-MG então continuo a me esforçar bastante nesse segundo ano na instituição."



// Esc
function fechaGuia(){
    guiaInicial.style.display = "grid";
    escVoltar.style.display = "none";
    guiaPorque.style.display = "none";
    guiaSobreMim.style.display = "none";
    guiaExpectativas.style.display = "none";
}

let bodyEl = document.querySelector('body');
bodyEl.addEventListener('keydown', (e) => {
    if(e.which === 27 && guiaInicial.style.display == "none"){
        fechaGuia();
    }
})

let header = document.querySelector('header');
header.addEventListener('click', fechaGuia);