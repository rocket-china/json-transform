var fs =  require('fs');
var path = require('path');

var file = path.join(__dirname, './test.json');

fs.readFile(file, 'utf-8', function(err, data) {
    if (err) {
        console.log('文件读取失败');
    } else {
        var obj = JSON.parse(data);
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var element = obj[key];
                console.log(element);
            }
        }
        console.log(data);
    }
});

