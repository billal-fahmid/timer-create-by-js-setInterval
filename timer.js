let timar ;
const count = document.getElementById('count');
    const minHtml = document.getElementById('min');
    const hoursHtml = document.getElementById('hours');

document.getElementById('start').addEventListener('click' , function(){
    
    let sec =0;
    let min =0;
    let hours = 0;
    var intervalId= setInterval(()=>{
        count.innerText =''
        console.log(++sec)
       if(sec=== 60){
            min++;
            sec=0;
       }
       if(min ===60){
            hours++;
            min=0;
            sec=0;
       }
        count.innerText = sec;
        minHtml.innerText = min;
        hoursHtml.innerText = hours;
       
    },1000);
    timar = intervalId;
    // count.innerText =''
   
    
})
document.getElementById('stop').addEventListener('click' ,function(){
    clearInterval(timar)
})
document.getElementById('reset').addEventListener('click' , function(){
    clearInterval(timar)
    count.innerText = 00;
    minHtml.innerText = 00;
    hoursHtml.innerText = 00;
})