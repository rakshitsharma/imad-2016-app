/*move the image
var marginLeft = 0;
function moveright() {
    marginLeft = marginLeft + 0.1;
    img.style.marginLeft = marginLeft + 'px';
}
var img = document.getElementById('madi');
img.onclick = function() {
    var interval = setInterval(moveright, 100);
};*/

var button = document.getElementById('counter');    
var counter =0;

button.onclick = function(){
    
    //make a request to counter endpoint
    
    //capture the response and store it in a variable
    
    //render the variable in correct span
    counter = counter +1;
    var span = document.getElementById("count");
    span.InnerHtml = counter.toString();
};