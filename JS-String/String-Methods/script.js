// JavaScript strig are for storing and manipulating text
let Name = 'Noyon Sarker.';
let Detail = "He is a studen.";
console.log(Name, Detail);

// There are have all string property
console.log(Name.length); // length property returns the length of string

//////////////////// There are have all string Methods. ////////////////////////////////

// slice(start, end), substring(start, end) methods slice the string.
// Here slice() method. start position included but end not included.
console.log(Name.slice(3, 7));
console.log(Name.slice(4));// It's take index 4(include) to last index. substring(4) also simillar.
console.log(Name.substring(2, 8));
console.log(Name.slice(-6, -3));// If parameter is negative value then it's counted from the end.


//////////////// replace() & replaceAll() methods replaces value with another value in a string
console.log(Name.replace('o', 'X')); // Here first 'o' replace by 'x'.
console.log(Name.replaceAll('o', 'Z')); // Here all 'o' replace by 'Z'
console.log(Name.replace(/o/g, 'P')); // it works like replaceAll() method. '/g' flag (global match)

/*
Replace methods allows 'CASE-SENSITIVE'. If we want to ignore 'CASE-SENSITIVE' then.
*/
console.log(Name.replace(/Y/i, 'M'));// '/i' flag (insensitive).


//////////////// tolowerCase(), toUpperCase() methods to convert a string
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());

///////////////// concat() methos join two or more string
let age = 23;
console.log(Name.concat(Detail));
console.log(Name.concat(Detail, age));
console.log(Detail.concat(Name+"His age is "+age));

////////////////// trim(), trimStart(), trimEnd() methods remove whitespace
let txt = '         I love you         ';
console.log(txt.trim());// Remove from both side.
console.log(txt.trimEnd());// Remove from End.
console.log(txt.trimStart());// Remove from Start.

////////////////// charAt(position) & charCodeAt(position) methods
console.log(Name.charAt(4));// It returns character at specific index.
console.log(Name.charCodeAt(4))// It returns the unicode of the character at a specific index.

///////////////// split() method convert a string to Array.
console.log(Detail.split(''));// It just convert to single word Array
console.log(Detail.split(' '));// It's split by comma(,) where it find space.
console.log(Detail.split('s'));// It's split by comma(,) where it find 's'.







