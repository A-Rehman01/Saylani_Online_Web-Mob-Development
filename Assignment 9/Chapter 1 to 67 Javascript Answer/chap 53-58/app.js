var images = document.getElementById('imagesdiv');
var modeldiv=document.getElementById('myModal');

for (var i = 1; i <= 10; i++) {
    var image = document.createElement('img');
    image.src = "./images/" + i + ".jpg"
    image.setAttribute('class', 'img')
    image.setAttribute('onclick', 'model(this)')
    image.setAttribute('alt', 'scenery')
    image.setAttribute('id', i)
    images.appendChild(image);
}
function model(obj) {
    modeldiv.style.display='block';
    var mainimage=document.getElementById('mainimage');
    var caption =document.getElementById('caption');
    mainimage.src=obj.src;
    caption.innerHTML=obj.alt;
    console.log(obj)

}
function closemodel(){
    modeldiv.style.display='none';
}

function zoomOut() {
    var para = document.getElementById('para');
    var style = window.getComputedStyle(para);
    var font = style.fontSize;
    font = parseInt(font);
    para.style.fontSize = font - 10 + 'px';
}
function zoomIn() {
    var para = document.getElementById('para');
    var style = window.getComputedStyle(para);
    var font = style.fontSize;
    font = parseInt(font);
    para.style.fontSize = font + 10 + 'px';
}