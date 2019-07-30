var fs =  require('fs');
var path = require('path');

var file = path.join(__dirname, './test.json');

fs.readFile(file, 'utf-8', function(err, data) {
    if (err) {
        console.log('文件读取失败');
    } else {
        var obj = JSON.parse(data);
        var writeObj =  {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var element = obj[key];
                console.log(element);
               writeObj[key] = element + 'a';
            }
        }
        var writeJson = JSON.stringify(writeObj, null, 4);
        fs.writeFile('transform.json', writeJson, function(err) {
            if (err)  throw err;
            console.log('done');
        });
    }
});

