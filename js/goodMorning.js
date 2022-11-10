// Usuario ingresa la hora
// El sistema le saluda de aacuerdo a las diguientes condiciones:
//  hora 1 ~ 5 : Buena madrugada
// hora 6 ~ 12 : Buenos días
// hora 13 ~ 18 : Buenas tardes
// resto de horas : Buenas noches

let hour = prompt('⏲ Ingresa la hora por favor hora (6 ~ 12) - (13 ~ 18):');

if (hour >=1 && hour <=5) {
    document.write('<h1>😵Buena madrugada</h1>');
}
else if (hour >=6 && hour <=12) {
    document.write('<h1>🖐Buenos días</h1>');
}
else if (hour >=13 && hour <=18) {
    document.write('<h1>☀Buenas tardes</h1>');
}
else {
    document.write('<h1>😴Buenas noches</h1>');
}
