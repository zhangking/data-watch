var dataproxy = require('./dist/index.js');
var watch = dataproxy.watch;
var data = [{name:1}]

var newData = watch(data,{
    sync: true,
    deep: true,
    immediate: false,
    callback: (value)=>{console.log(value)}
});
newData[0].name = 2;
[ { name: 2 } ]

// no log