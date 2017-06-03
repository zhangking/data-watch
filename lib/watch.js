 // @flow

import Watcher from './watcher'

export  function watch (target:any,config:object) {
    return new Watcher(target,config)['value']
}

export function unwatch(data:any){
    data['__watcher__'] ? data['__watcher__'].cancel() : null
    return data
}