var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles ={
    articleone: {
        title: 'Article one',
        heading: 'Article one | rakshit',
        content:
        `<p>
            This is the content of my first webapp. This is the content of my first webapp. This is the content of my first webapp. This is the content of my first webapp. This is the content of my first webapp.This is the content of my first webapp.This is the content of my first webapp.This is the content of my first webapp.
        </p>
        <p>
            This is the content of my first webapp.This is the content of my first webapp.This is the content of my first webapp.This is the content of my first webapp.This is the content of my first webapp.This is the content of my first webapp.This is the content of my first webapp.This is the content of my first webapp.
        </p>`
    },
    articletwo: {
        title: 'Article two',
        heading: 'Article two | rakshit',
        content:
        `<p>
            This is the content of my second webapp.
        </p>`
    },
    articlethree: {
        title: 'Article three',
        heading: 'Article three | rakshit',
        content:
        `<p>
            This is the content of my second webapp.
        </p>`
    },
};

function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width = device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href='/'>Home</a>
                </div>
                <hr/>
                <h2>
                    ${heading}
                </h2>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter =0;
app.get('/counter', function(req, res){
    counter = counter + 1;
    res.send(counter.toString());
});


var names = [];
app.get('/submit-name', function(req, res){  //url /submit-name?name=****  using query instead params
   //get the name from the request
   var name = req.query.name;
   
   names.push(name);
   //JSON javascript object notation
   res.send(JSON.stringify(names));   //converts names fron array to strings
});

app.get('/:articlename', function(req,res){
    // :articlename === articleone
    var articlename = req.params.articlename;
    res.send(createTemplate(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/rak', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'rak.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
