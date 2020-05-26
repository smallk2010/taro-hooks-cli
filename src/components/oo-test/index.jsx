import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import app from '../../store/app'
import './index.scss'

const OoTest = () => {
  const [state, actions] = app.useStore()
  return (
    <View className="oo-test" onClick={() => actions.setInit({ navHeight: 342 })}>
      hello,OoTest，这是来自远方的{state.navHeight}
    </View>
  )
}

OoTest.config = {
  navigationBarTitleText: 'OoTest'
}

OoTest.options = {
  addGlobalClass: true
}

export default OoTest

