
const hour = document.querySelector(".container-reloj div .hour ")
const minute = document.querySelector(".container-reloj div .minute ")
const second = document.querySelector(".container-reloj div .second ")
const PmAm  =document.querySelector(".PmAm")
const timeReloj =()=>{
    const horario = new Date();
    const h = horario.getHours();
    const m = horario.getMinutes();
    const s = horario.getSeconds();
    hour.innerHTML=h.toLocaleString();;
    minute.innerHTML = m;
    second.innerHTML = s;
    if(h>23 || h<12){
        PmAm.innerHTML='am';
    }
}

setInterval(timeReloj,1000)