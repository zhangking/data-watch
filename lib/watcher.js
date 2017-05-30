 // @flow
 
import shouldWatch from './shouldWatch'
import { noop } from './common' 

export default class Watcher  {
  value: any;
  _value: any;
  _config: object;

  constructor(target: any,config: Object) {
    this._config = Object.assign({
      sync: false,
      deep: true,
      immediate: false,
      callback: noop
    },config)
    this.value = this.dataProxy(target,true)
    if (this._config.immediate) {
     // this.run()
     }
  }

  cancel () {

  }

  run(newVal,oldVal) {
    if (this._config.sync) {
      this._config.callback.call(null,newVal,oldVal)
    } else {
      //async

    }
  }

  dataProxy (target: any,init: boolean) {
    let proxy = new Proxy(target, this.getHandler(init || this._config.deep))
    Object.defineProperty(target, '__dataproxy__', {
      value: proxy,
      enumerable: false,
      writable: false,
      configurable: true
    })
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
        console.log(Reflect.get(target, key, receiver))
        if (deep && shouldWatch(value)) {
            value = self.dataProxy(value)
        }
        Reflect.set(target, key, value, receiver)
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
