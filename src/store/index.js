import { useState, useEffect } from '@tarojs/taro'

const isFunction = fn => typeof fn === 'function'
const isObject = o => typeof o === 'object'
const isPromise = fn => {
    if (fn instanceof Promise) return true
    return isObject(fn) && isFunction(fn.then)
}
// Model 类
class Model {
    constructor({ initialState, actions }) {
        this.state = initialState
        this.actions = {}
        this.queue = []
        Object.keys(actions).forEach((name) => {
            this.actions[name] = (arg) => {
                const res = actions[name].call(this, this.state, arg)
                if (isPromise(res)) {
                    Promise.resolve(res).then((ret) => {
                        this.state = ret
                        this.onDataChange()
                    })
                } else {
                    this.state = res
                    this.onDataChange()
                }
            }
        })
    }
    useStore () {
        const [, setState] = useState()
        // 使用useEffect实现发布订阅
        useEffect(() => {
            const index = this.queue.length
            this.queue.push(setState) // 订阅
            return () => { // 组件销毁时取消
                this.queue.splice(index, 1)
            }
        }, [])
        return [this.state, this.actions]
    }
    onDataChange () {
        const queues = [].concat(this.queue)
        queues.forEach((setState) => {
            setState(this.state) // 通知所有的组件数据变化
        })
    }
}
