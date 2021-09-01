const { readFile } = require('fs')
const { readFileSync, writeFileSync } = require('fs')
//async
// sync is executed before async
readFile('./content/file1.txt','utf-8',(err,data)=>{
    if(err)
    {
        console.log(err);
        return
    }
    console.log(data+'\n');
})
//sync
data=readFileSync('./content/file2.txt','utf-8')
data2=readFileSync('./content/file1.txt','utf-8')
writeFileSync('./content/file-sync.txt',`This is join of two files ${data},${data2}`)
console.log(readFileSync('./content/file-sync.txt','utf-8'))