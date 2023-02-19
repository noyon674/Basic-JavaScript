const payment = true;
const mark = 70;
let count = 0;
function Enroll(){
    console.log('Enrollment processing...');
    const promise = new Promise( (resolve, reject)=> {
        setTimeout( ()=> {
            if(payment){
                resolve('payment complete. Go to the next pharse.');
            } else{
                reject('payment faild.');
            }
        }, 2000);
    });
    return promise;
}

function progress(){
    console.log('progress start.');
    const promise = new Promise( (resolve, reject)=>{
        setTimeout(() => {
            if(mark >= 80){
                count+=1;
                resolve('You got A+.');
            } else{
                reject('You are fail.');
            }
        }, 2000);
    });
    return promise;
}

function getcertificate(){
    console.log('certificate processing...');
    const promise = new Promise((resolve, reject)=>{
        setTimeout( ()=>{
            if(count == 1){
                resolve('You are ble to get certificate.');
            } else{
                reject('You are not able to get certificate');
            }
        }, 2000);
    });
    return promise;
}


Enroll()
    .then(progress)
    .then((value)=>{
        console.log(value);
    })
    .then(getcertificate)
    .then( (value)=>{
        console.log(value);
    })

    .catch( (err)=> {
        console.log(err);
    })
