const http=require('http');

let app=http.createServer((req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Node.js Server!\n');
})


app.listen(3000,()=>{
    console.log('server started')
})