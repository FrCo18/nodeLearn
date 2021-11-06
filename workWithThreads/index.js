let fs = require('fs');

let myReadShort = fs.createReadStream(__dirname + '/article.txt', 'utf-8');
let myWriteShort = fs.createWriteStream(__dirname + '/news.txt', 'utf8');

myReadShort.on('data', function(chunk){
    console.log('Новые данные получены');
    myWriteShort.write(chunk);
});