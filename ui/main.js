console.log('Loaded!');

//change the text of the main-text div

//var element = document.getElementById('main-text');
//element.innerHTML = 'new value'

//move the image
var marginLeft = 0;
function moveright() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
var img = document.getElementById('madi');
img.onclick = function() {
    var interval = setInterval(moveright, 100);
};