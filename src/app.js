let express = require('express')

const app = express()

app.get('/status', function(req, res){
    res.send('Hello nodejs server')
})

let port = 8081;
app.get('/hello/:person', function(req,res){
    console.log('hello - '+req.params.person)
    res.send('say hello with'+ req.params.person)
})

app.listen(port,function(){
    console.log(port)
})