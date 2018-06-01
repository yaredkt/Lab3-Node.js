
const server = require('http').createServer();
var path = require('path');

const fs = require('fs');

// //method1 
// server.on('request', (req, res) => {

//     const src = fs.createReadStream(path.join(__dirname, 'images.jpeg'));
//     src.pipe(res);

// });



server.on('request', (req, res) =>{

    var file = fs.readFile(path.join(__dirname, 'images.jpeg'), (err, data) =>{

        if(err){
            console.log(err);
        }
        else{

            res.end(data);
        }
    });
});

server.listen(1010);
console.log("server is running on port 1010");




