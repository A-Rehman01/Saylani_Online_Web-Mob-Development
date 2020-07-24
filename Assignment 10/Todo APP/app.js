var list = document.getElementById('list');

function Add_item() {

    var input = document.getElementById('todo_Item');
    var li = document.createElement('li');
    li.setAttribute('class', 'li')
    if (input.value === '') {
        return;
    }
    var text = document.createTextNode(input.value)
    li.appendChild(text)

    //btns
   
    var div = document.createElement('div')
    //del 
    var delimg = document.createElement('img')
    delimg.setAttribute('class', 'icons')
    delimg.src = 'http://docs.qgis.org/2.14/en/_images/mActionDeleteSelected.png';
    delimg.setAttribute('onclick','deleteitem(this)')
    div.appendChild(delimg);

    //edi
    var editimg = document.createElement('img');
    editimg.setAttribute('class', 'icons')
    editimg.src = 'http://www.mapcentia.com/images/icons/frontpage/edit.png'
    editimg.setAttribute('onclick','edititem(this)')
    div.appendChild(editimg)
    
    li.appendChild(div)

    list.appendChild(li)
    console.log(li)
    input.value = ''
}
function Delete_item() {
    list.innerHTML='';
}

function deleteitem(e){
    e.parentNode.parentNode.remove();
}
function edititem(e){
    //agr TextContent krtta to btn bhi ht jate
    var val = prompt('Enter Updated Value',e.parentNode.parentNode.firstChild.nodeValue)
    e.parentNode.parentNode.firstChild.nodeValue=val;
}