//Task1
//part1
var main_Content = document.getElementById('main-content');

//part2
var children = [];
var index = main_Content.childNodes.length;
var childnode = main_Content.childNodes;
while (index--) {
    if (childnode[index].nodeType === 1) {
        children.unshift(childnode[index])
    }
}
for (var i = 0; i < children.length; i++) {
    console.log(children[i])
}

//part3
var render = document.getElementsByClassName('render')
var renders = [];
var index2 = render.length;
while (index2--) {
    if (render[index2].nodeType === 1) {

        renders.unshift(render[index2].innerHTML)
    }
}
for (var i = 0; i < renders.length; i++) {
    console.log(renders[i]);
}

//part4
var first_name = document.getElementById('first-name');
first_name.value = 'Abdul Rehman'

//part5
var last_name = document.getElementById('last-name');
var email = document.getElementById('email');
last_name.value = 'Abdul Rasheed';
email.value = 'arehmana377@gmail.com';



//Task2

//part1
var form_content = document.getElementById('form-content');
console.log(form_content.nodeType)

//part2
var last_name = document.getElementById('last-name');
console.log(last_name.nodeType)
var children = last_name.childNodes;
children.forEach((obj) => {
    console.log(obj.nodeType)
});

//past3
//before
console.log(last_name.textContent);
//after
last_name.textContent="hello";
console.log(last_name.textContent);

//part4
var main_Content = document.getElementById('main-content');
console.log(main_Content.firstElementChild)
console.log(main_Content.lastElementChild)

//part5
var last_name = document.getElementById('last-name');
console.log(last_name.nextElementSibling)
console.log(last_name.previousElementSibling)

//part6
var email=document.getElementById('email');
console.log(email.nodeType)
console.log(email.parentNode)
