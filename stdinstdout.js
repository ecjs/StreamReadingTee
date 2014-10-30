var fs = require('fs');
var through = require('through');

var ws = fs.createWriteStream(process.argv[2]);
ws.on('error', function (err) {
    console.log(err);
  });

var tr = through(write,end);
function write(buf){
  ws.write(buf.toString());
  console.log(buf.toString());
}
function end(){
  console.log("Thats all!");
}

process.stdin.pipe(tr);
