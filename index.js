import watch from "./lib/watch"

var data = {
    age:{
        number:1
    }
}

var newData = watch(data,{
    sync: true,
    deep: true,
    immediate: false,
    callback: (newVal,oldVal)=>{console.log(newVal,oldVal)}
});

newData.age.number = 2;

