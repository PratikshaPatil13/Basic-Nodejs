var fs = require('fs');
fs.readFile('test.txt',function(err,data){
    if(err){
        console.log(err);

    }
    setTimeout(()=>{
        console.log("display after 3 second")
    }, 2000);
});

console.log('You can Start Here');
