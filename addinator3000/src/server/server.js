const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response){
    fs.readFile('../../public/index.html',(err,data) => {
        response.end(data.toString('UTF-8'));
    });
});

server.listen(3000, () =>{
    console.log('Server listen');
});