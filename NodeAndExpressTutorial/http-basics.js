const http = require('http')
server= http.createServer((req,res)=>{
    if(req.url=='/home')
    {
        res.end('this is home')
    }
    else if(req.url=='/about')
    {
        res.end('this is about')
    }
    else{
        res.end(`<p>Oops error</p> <a href="/home">home</a>`)
    }
})

server.listen(5000)