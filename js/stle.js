const hourhand=document.querySelector('.hora');
const minutehand=document.querySelector('.minuto');
const secondhand=document.querySelector('.second');

const getTime =() => {
 const date = new Date();
 return {
    hora: date.getHours(),
    minuto: date.getMinutes(),
    second: date.getSeconds(),
 };
 
}
/*loup*/
setInterval(() =>{
    const{ second}=getTime();
    secondhand.style.transform =
    `translate(0, -50%) rotate(${second*6}deg)`;

},1000 );

setInterval(() =>{
    const{ minuto}=getTime();
    minutehand.style.transform =
    `translate(0, -50%) rotate(${minuto*6}deg)`;

},1000 );

setInterval(() =>{
    const{ hora}=getTime();
    hourhand.style.transform =
    `translate(0, -50%) rotate(${hora*30}deg)`;

},1000 );