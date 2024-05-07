const http = require('http');

const fs = require('fs');

const port = 8000;

const reqHandeler = (req,res) => {
    let fileName =  "";
    
    switch(req.url){
        case '/':
            fileName = "./index.html";
        break;
        
        case '/about':
            fileName = "./about.html";
        break;

        case '/contact':
            fileName = "./contact.html";
        break;

        case '/blog':
            fileName = "./blog.html";
    }

    fs.readFile(fileName,(err,result)=>{
        if(!err){
            res.end(result);
        }
    })
}


const server = http.createServer(reqHandeler);

server.listen(port,(err) =>{
    if(err){
        console.log("Error in port");
        return false;
    }
    console.log("server start");
})
