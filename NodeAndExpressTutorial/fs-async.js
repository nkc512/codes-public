const { readFile, writeFile } = require('fs').promises

const start = async () => {
    try {
        const first = await readFile('./content/file1.txt','utf-8')
        const second = await readFile('./content/file2.txt','utf-8')
        await writeFile(
            './content/merge.txt',`Js is awesome ${first} ${second}`,
            { flag:'a' }
        )
        console.log(first, second);
    }
    catch(error){
        console.log(error);
    }
}
start()