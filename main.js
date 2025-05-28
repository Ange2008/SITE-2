const botoes = document.querySelectorAll(".botoes");
const textos = document.querySelectorAll(".aba-conteudo");
for (let i=0; i < botoes.length; i++){
    botoes [i].onclick = function(){
        for (let j=0; j < botoes.length; j++){
            botoes [j].classList.remove ("ativo");
            textos [j].classList.remove ("ativo");
        }
        botoes [i].classList.add ("ativo");
        textos [i].classList.add ("ativo");
    }
}
const contadores = document.querySelectorAll("contador");
const tempoObjetivo1 = new Date ("2025-07-13T00:00:00");
const tempoObjetivo2 = new Date ("")
const tempoObjetivo3 = new Date ("2025-10-08T00:00:00");
const tempoObjetivo4 = new Date ("2026-07-15T00:00:00");
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];
function atualizaCronometro (){
    for (let i= 0; i < contadores.length; i++){
        document.getElementById ("dias"+i).textContent = caculaTempo(tempos [i])[0];
        document.getElementById ("horas"+i).textContent = caculaTempo(tempos [i])[1];
        document.getElementById ("min"+i).textContent = caculaTempo(tempos [i])[2];
        document.getElementById ("seg"+i).textContent = caculaTempo(tempos [i])[3];
    }
    for (let i = 0; i < contadores.length; i++){
        //contadores[i].textContent = calculaTempo (tempos [i]);
    }
}
function comecaCronometro (){
    atualizaCronometro ();
    setInterval (atualizaCronometro, 1000);
}
comecaCronometro ();