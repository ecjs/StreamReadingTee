var fs = require('fs');
var through = require('through');

//creates a writeable stream
var ws = fs.createWriteStream(process.argv[2]);
ws.on('error', function (err) {
    console.log(err);
  });

// create readable/writable stream and handle the buffers
var tr = through(write,end);
function write(buf){
  //write the buff to the writestream
  ws.write(buf.toString());
  console.log(buf.toString());
}
function end(){
  console.log("Thats all!");
}
//pipe from stdin to our read/writable stream
process.stdin.pipe(tr);
