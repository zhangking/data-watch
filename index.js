import watch from "./lib/watch"

var data = {
    age:{
        number:1
    }
}

var newData = watch(data,{
    sync: false,
    deep: true,
    immediate: false,
    callback: (value)=>{console.log(value)}
});

newData.age.number = 2;
