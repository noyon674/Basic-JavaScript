const d = new Date('october 12, 2014 11:13:00');
console.log(d);
const dd = new Date(2015, 11, 25, 10, 30, 20);
console.log(dd);


/////////////////// All Date Get Methods /////////////////
console.log(dd.getFullYear()); // return just year
console.log(d.getMonth());// returns month 
console.log(dd.getDate());// returns number of day
console.log(dd.getHours());// returns hours
console.log(dd.getMinutes());// returns minutes
console.log(dd.getSeconds());// returns seconds
console.log(dd.getTime());// returns milliseconds since january 1, 1970

