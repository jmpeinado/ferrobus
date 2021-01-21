var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

app.get('/', function(req, res){
    res.send("Get!");
});

app.get('/logout', function(req, res){
    res.clearCookie('user');
    res.redirect(307, './index.html');
});

app.set('view engine', 'pug');
app.set('views', './views');

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('static'));

function randomDate(start, end, startHour, endHour) {
    var date = new Date(+start + Math.random() * (end - start));
    //var hour = startHour + Math.random() * (endHour - startHour) | 0;
    //date.setHours(hour);
    return date;

}
app.post('/', function(req, res){
    let params = req.body,
        lastTime = randomDate(new Date('2000'), new Date('2021')),
        nowTime = new Date(),
        userCookie = {};
    
    // Validación
    if (params.userName === 'jmpeinado' && params.userPass === '123456') {
        console.log('login success ');

        console.log('user ' + params.userName);
        console.log('lasTime ', lastTime);
        console.log('nowTime ' + nowTime);

        userCookie = {
            "name": params.userName,
            "lastTime": lastTime,
            "nowTime": nowTime
        }
        res.cookie('user', JSON.stringify(userCookie), {secure: false});
        
        res.redirect('home.html');
        //res.send({
        //    code: 200,
        //    msg: 'success'
        //})
    } else {
        res.redirect('index.html');
        //res.send({
        //    code: 201,
        //    msg: 'Nombre de usuario o contraseña incorrectos'
        //})
    }
});
app.listen(3000);