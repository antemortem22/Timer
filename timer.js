let inputs, clock, alarm, hours, minutes, seconds, repeater; // Declare variables

window.addEventListener('load', () => { 
    inputs = Array.from(document.getElementsByClassName('number'));
    clock = document.querySelector('.clock');
    alarm = new Audio('sound/alarm.mp3');
});

function startTimer(){
    parseTime();
}

function parseTime(){
    hours = Number(inputs[0].value);
    minutes = Number(inputs[1].value);
    seconds = Number(inputs[2].value);
}

function setTimer(){
    clock.innerHTML = `<p class="number">${hours > 9 ? hours : ('0' + hours)}</p><span>hs</span><p
    class="number"> ${minutes > 9 ? minutes : ('0' + minutes)}</p><span>min</span><p
    class="number">${seconds > 9 ? seconds : ('0' + seconds)}</p><span>sec</span>`
    
}
