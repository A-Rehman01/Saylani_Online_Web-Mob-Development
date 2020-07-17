//Task1
function Submit() {
    var Email = document.getElementById('Email');
    var password = document.getElementById('password');
    var Rpassword = document.getElementById('Rpassword');

    //after onclick

    document.write("Email: " + Email.value);
    document.write("<br>");
    document.write("Password: " + password.value);
    document.write("<br>");
    document.write("Repeat Password: " + Rpassword.value);
    document.write("<br>");
    document.write("<br>")
}

//Task2
function Dispalyfull() {
    var data = document.getElementById('frontend')
    var data2 = document.getElementById('backend');
    data.innerHTML = data2.innerHTML;
}
function Dispalyless() {
    var data = document.getElementById('frontend')
    var data2 = document.getElementById('backend');
    var temp = document.getElementById('temp');
    data.innerHTML = temp.innerHTML;
}

//task3
function SubmitStu() {
    var id = document.getElementById('id');
    var Name = document.getElementById('name');
    var Class = document.getElementById('class');
    if ((id.value) === '' || (Name.value) === '' || (Class.value) === '') {
        alert("insert Data")
        return;
    }
    var table = document.getElementById('Stutable');
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var btn = document.createElement('button');
    var text = document.createTextNode('Delete')
    btn.appendChild(text);
    cell1.innerHTML = id.value;
    cell2.innerHTML = Name.value;
    cell3.innerHTML = Class.value;
    btn.setAttribute('id', 'btndel')
    btn.setAttribute('onclick', 'Delrow(this)')
    var cell4 = row.insertCell(3);
    cell4.appendChild(btn);
    id.value = '';
    Class.value = '';
    Name.value = '';
    var editbtn = document.createElement('button');
    var text2 = document.createTextNode('Edit');
    editbtn.appendChild(text2);
    editbtn.setAttribute('onclick', 'Editdata(this)')
    var cell4 = row.insertCell(4);
    cell4.appendChild(editbtn)

}
function Delrow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById('Stutable');
    table.deleteRow(index);
    console.log(index)
}


function Editdata(obj) {
    var id = document.getElementById('id');
    var Name = document.getElementById('name');
    var Class = document.getElementById('class');

    var index = obj.parentNode.parentNode;
    var td = index.getElementsByTagName('td')

    id.value = td[0].innerHTML;
    Name.value = td[1].innerHTML;
    Class.value = td[2].innerHTML;

    Delrow(obj)
    console.log(td[0].innerHTML)
}