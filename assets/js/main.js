function relogio(){
const relogio=document.querySelector("#relogio")
const iniciar=document.querySelector("#iniciar")
const pausar=document.querySelector("#pausar")
const zerar=document.querySelector("#zerar")
let segundos=0
let timer;
function adicioneOsSegundosNasHoras(segundos){
    const hora=new Date(segundos*1000)
    return hora.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone:'GMT'
    })
}
function criarTimer(){
     timer=setInterval(()=>{
        segundos++
        relogio.innerHTML=adicioneOsSegundosNasHoras(segundos)
    },1000)
    relogio.classList.remove("relogio-vermelho")
}
iniciar.addEventListener("click",(event)=>{
    clearInterval(timer)
   criarTimer()
})
pausar.addEventListener("click",(event)=>{
    relogio.classList.add("relogio-vermelho")
    clearInterval(timer)
})
zerar.addEventListener("click",(event)=>{
    clearInterval(timer)
    relogio.innerHTML="00:00:00"
    segundos=0
    relogio.classList.remove("relogio-vermelho")
})
}
relogio();




















































// const relogio=document.querySelector("#relogio")
// const dataQualquer=new Date(2021,1,1,0,0,0,0)
// const segundosHtml=document.querySelector("#segundos")
// const minutosHtml=document.querySelector("#minutos")
// const horasHtml=document.querySelector("horas")
// let segundos=dataQualquer.getSeconds()
// let minutos=dataQualquer.getMinutes()
// let horas=dataQualquer.getHours()
// function temporizadorSegundos(){
//     segundos++
//     if(segundos>=60)segundos=0
//     if(segundos<10)segundosHtml.innerHTML=`0${segundos}`
//     else{
//     segundosHtml.innerHTML=segundos
//     }  
// }


// function temporizadorMinutos(){
//     minutos++
//     if(minutos>=60)minutos=0
//     if(minutos<10)minutosHtml.innerHTML=`0${minutos}`
//     else{
//     minutosHtml.innerHTML=minutos
//     }
// }
// function temporizadorHoras(){
//     horas++
//     if(horas<10)horasHtml.innerHTML=`0${horas}`
//     else{
//     horasHtml.innerHTML=horas
//     }
// }

//     let timerseg=setInterval(temporizadorSegundos,1000)
//     let timermin=setInterval(temporizadorMinutos,60000)
//     let timerhour=setInterval(temporizadorHoras,3600000)


// function pausarCronometro(){
//     relogio.classList.add("relogio-vermelho")
//     clearInterval(timerseg)
//     clearInterval(timermin)
//     clearInterval(timerhour)
// }
// function zerarCronometro(){
//     relogio.classList.remove("relogio-vermelho")
//     segundos=0
//     minutos=0
//     segundos=0
// }
// function retornarCronometro(){
//     relogio.classList.remove("relogio-vermelho")
//     timerseg=setInterval(temporizadorSegundos,1000)
//     timermin=setInterval(temporizadorMinutos,60000)
//     timerhour=setInterval(temporizadorHoras,3600000)
// }








