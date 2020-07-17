// ========================= Chap 43-48 Start ===============================

//Task1
function link(name) {
    alert(name)
}

//Task 2
function mobile(name){
    alert("Thankx a purching a mobile form us : "+ name);
}

//Task3
var table = document.getElementById('table1')
function DeleteRow (num) {
    console.log(num.parentNode.parentNode.rowIndex)
    var index=num.parentNode.parentNode.rowIndex
    table1.deleteRow(index);
}

 //Task4
function Changeimg(id) {
    var img = document.getElementById('img')

    if (id === 1) {
        img.src='https://th.bing.com/th/id/OIP.PaQZQhRKkwP6HDRj6T1lqwHaG_?w=208&h=196&c=7&o=5&dpr=1.56&pid=1.7'
    }
    if (id === 0) {
        img.src='https://th.bing.com/th/id/OIP.txF0n2Bqgfl4Wc2nK7pDCQHaK-?w=115&h=180&c=7&o=5&dpr=1.56&pid=1.7'

    }
}

//Task5
finalvalue = 1;
function Update(type) {
    var value = document.getElementById('value');

    if (type === 'inc') {
        ++finalvalue;
        value.innerHTML = finalvalue;
    }
    else {
        --finalvalue;
        value.innerHTML = finalvalue;
    }
}
// ========================= Chap 43-48 end ===============================
