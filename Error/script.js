////////////////////////// Error Handlling
/*
try -catch
*/

try{
    Love('Love is a Horror word.');
}
catch(err){
    console.log(err.message);
}

//////// Error throwing

let x = '52';
try{
    if(x == '') throw 'Empty';
    if(x <= 5) throw 'Lowest';
    if(x > 5) throw 'highest';
}
catch(pick){
    console.log(pick);
}


///////////////////

