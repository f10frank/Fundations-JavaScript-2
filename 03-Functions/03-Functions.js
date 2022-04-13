function timeConversion(time){
// dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
// Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas
//las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas 
let newString = time.substring(2,8);
let hour = parseInt(time[0] + time[1]);
let minutes = parseInt(time[3] + time[4]);
let seconds = parseInt(time[6] + time[7]);
const isPm = (time[8] === 'P');
const isAm = (time[8] === 'A');

if(hour > 12 || minutes > 60 || seconds > 60) return false;
if(time.length - 1 !== 9) return false;

if(isPm && hour !== 12) {
    hour += 12;
    newString = hour + newString;
    return newString;
} else if (isAm && hour == 12) {
    newString = '00' + newString;
    return newString;
} 

return time.substring(0,8);



}

module.exports = {
    timeConversion
}