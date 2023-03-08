let $ = document
let hourInput = $.querySelector('.hourInput');
let minuteInput = $.querySelector('.minuteInput');
let secondInput = $.querySelector('.secondInput');



setInterval(showTime,1000)

function showTime(){
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hourInput.innerHTML = hour;
    minuteInput.innerHTML = minute;
    secondInput.innerHTML = second;

    if (hourInput.innerHTML.length == 1){
        hourInput.innerHTML = "0" + hour;
    }

    if (minuteInput.innerHTML.length == 1){
        minuteInput.innerHTML = "0" + minute;
    }
    
    if (secondInput.innerHTML.length == 1){
        secondInput.innerHTML = "0" + second;
    }
}

