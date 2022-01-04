const express = require('express');
const app = express();
app.use(express.static('public'));

app.set('port',process.env.PORT || 3000)


app.listen(app.get('port'), ()=>{
    console.log('on http://localchost:'+app.get('port'));
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});