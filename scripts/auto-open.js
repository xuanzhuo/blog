var spawn = require('child_process').exec;
hexo.on('new', function(data){
  spawn('start  "D:\Programs\dev\Typora\Typora.exe" ' + data.path);
});