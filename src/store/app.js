import Model from './index'

const initialState = {
    navHeight: 88, // 顶部菜单的高度
    ipxBottomH: 0, // IPX底部的高度
    statusBarHeight: 40 // 状态栏的高度
}
const actions = {
    setInit (state, payload) {
        let o = Object.assign({}, { ...state, ...payload })
        return o
    }
}
const app = new Model({
    initialState,
    actions
})
export default app
