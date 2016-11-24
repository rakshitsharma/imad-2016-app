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


//counter code
var button = document.getElementById('counter');    

button.onclick = function(){
    
    //create a request
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }  
        //not done yet
    };
    //make a request
    request.open('Get', 'http://rakshitsharma.imad.hasura-app.io/counter', true);
    request.send(null);
};

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //make a request to the server and send the name
    //capture a list of names and render it as a list
    var name = ['name1' , 'name2' , 'name3', 'name4'];
    var list = '';
    for( var i=0 ; i<name.length ; i++){
        list += '<li>' + name[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list ;
};