
var count = 0;

// setinterval ko rokne ke lye
var interval;
//Repeatative Function
interval = setInterval(() => {
    count++;
    console.log(count);
}, 1000) // 1000mili=1sec


//Kuch tym bad strt hoga
setTimeout(() => {
    // cleatinterval builtin he setinterval ko rokne ke liye to 5sec bad setinterval ko rok dena
    clearInterval(interval); //agr setinterval ko interval me dete to rok nh sakte
}, 5000)   // 5000mili=5sec




// Stop Watch App
var minid = document.getElementById('min')
var secid = document.getElementById('sec')
var msecid = document.getElementById('msec')
var interval2;
var min = 0;
var sec = 0;
var msec = 0;
var btn = document.getElementById('startbtn');

function start() {
    interval2 = setInterval(() => {
        msec++;
        msecid.innerHTML = msec;

        if (msec === 100) {
            sec++;
            secid.innerHTML = sec;
            msec = 0;
        }

        else if (sec === 10) {
            sec = 0;
            min++;
            minid.innerHTML = min;

        }
    }, 10);
    btn.disabled = true
}

function pause() {
    clearInterval(interval2)
    btn.disabled = false
}



function stop() {
    min = 0;
    sec = 0;
    msec = 0;
    minid.innerHTML = min;
    secid.innerHTML = sec;
    msecid.innerHTML = msec;
    pause()
}
