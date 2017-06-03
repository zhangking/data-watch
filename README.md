### use proxy to implement reactive data

## usage

```
import { watch , unwatch } from "data-watch"

var data = [{name:1}]

var newData = watch(data,{
    sync: true,
    deep: true,
    immediate: false,
    callback: (value)=>{console.log(value)}
});
newData[0].name = 2;
// [ { name: 2 } ]

unwatch(newData);
newData[0].name = 1;
// no log
```

### params

|   value |   |
| ------------ | ------------ |
|   sync |  whether  to trigger callback synchronously|
|   deep |  whether to watch data deeply |
|   immediate |   whether to trigger callback immediately|
|   callback |  callback |
