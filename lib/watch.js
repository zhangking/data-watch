 // @flow

import Watcher from './watcher'

export default function watch (target:any,config:object) {
    return new Watcher(target,config)['value']
}