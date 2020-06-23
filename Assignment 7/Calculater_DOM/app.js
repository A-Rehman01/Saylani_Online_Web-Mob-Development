var finalres = '';
function gettext(number) {
    var num = document.getElementById("result");

    if (number == '+' || number == '-' || number == '*' || number == '/') {
        finalres += number;
        num.value = '';
    }
    else {
        num.value += number;
        finalres += number;
        console.log(finalres);
    }
}


function cleardata() {
    var clear = document.getElementById("result");
    clear.value = '';
    finalres = '';
}

function gettextres() {
    var res = document.getElementById("result")
    try {
        res.value = (eval(finalres));
        finalres = res.value;
    }
    catch(e){
        alert("Invalid Expression");
        cleardata(); 
    }
    
    
}