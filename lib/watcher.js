 // @flow
 
import shouldWatch from './shouldWatch'
import { noop } from './common' 
import { queueWatcher } from './queue'

let uid = 0
let lengthF = false

export default class Watcher  {
  value: any;
  canceled: boolean;
  id: number;
  _config: object;

  constructor(target: any,config: Object) {
    this._config = Object.assign({
      sync: false,
      deep: true,
      immediate: false,
      callback: noop
    },config)
    this.value = this.dataProxy(target,true)
    this.canceled = false
    this.id = ++uid 
    if (this._config.immediate) {
      this.run()
    }
  }

  cancel () {
    this.canceled = true
  }

  _run(){
    try{
      this._config.callback.call(null,this.value)
    }catch(e){
      console.log(e)
    }
  }


  run() {
    if (this.canceled) return
    if (this._config.sync) {
      this._run()
    } else {
      //async
      queueWatcher(this)
    }
  }

  dataProxy (target: any,init: boolean) {
    let self = this
    let proxy = new Proxy(target, this.getHandler(init || this._config.deep))
    Object.defineProperty(target, '__dataproxy__', {
      value: proxy,
      enumerable: false,
      writable: false,
      configurable: true
    })
    init ? Object.defineProperty(target, '__watcher__', {
      value: self,
      enumerable: false,
      writable: false,
      configurable: true
    }) : null
    return proxy
  }

  getHandler (deep: boolean){
    let self = this
    return {
      get (target, key, receiver) {
        let value = Reflect.get(target, key, receiver)

        if (key === '__dataproxy__') return value
        if (shouldWatch(value)) {
          if (value.hasOwnProperty('__dataproxy__')) {
            return value['__dataproxy__']
          } else if (deep){
            return self.dataProxy(value)
          }
        }

        return value
      },
      set (target, key, value, receiver) {
        if (deep && shouldWatch(value)) {
            value = self.dataProxy(value)
        }
        Reflect.set(target, key, value, receiver)
        if (Array.isArray(target) && self._config.sync) {
          lengthF ?  null : self.run() 
          lengthF = key !== 'length' 
        } else {
          self.run()
        }

        return true
      },
      deleteProperty (target, propKey) {
        Reflect.deleteProperty(target, propKey)
        self.run()
        return true
      }
    }
  }
}
