const payment = true;
const mark = 80;

function enroll(callback1){
    console.log('Enrollment processing.');
    if(payment){
        setTimeout(()=>{
            console.log('Payment complete.')
            callback1();
        }, 2000);
    }
    else{
        console.log('Payment failed!');
    }
}
function progress(callback2){
    console.log('Course progress Running.');
    if(mark >= 80){
        setTimeout(()=>{
            callback2();
        }, 5000);
    }
    else{
        console.log('Sorry! Your mark less than 80. You are not eligiable for certificate');
    }
}
function getcertificate(){
    console.log('Wellcome & Good wishes. You are eligiable for certificate');
}
///////
enroll(()=>{
    progress(getcertificate);
});
