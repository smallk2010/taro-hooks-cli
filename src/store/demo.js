const sleep = async t => new Promise(resolve => setTimeout(resolve, t))
const initialState = { name: '' }
const actions = {
    async setInfo () {
        await sleep(3000)
        return Promise.resolve({ name: "cC", job: '全栈' })
    },
    setJob (state, job) {
        return Object.assign({}, { ...state, job })
    },
    setName (state, name) {
        return Object.assign({}, { ...state, name })
    }
}

const demo = new Model({
    initialState,
    actions
})
/*
// 组件
import {useStore} from '../store/demo';
const Person = ()=>{
    const [state,actions] = useStore();
    return (
        <div>
            <span> My name is {state.name}.</span>
            <button onClick={()=> actions.setName(‘kK .‘)}>设置名字</button>
        </div>
    )
}
*/