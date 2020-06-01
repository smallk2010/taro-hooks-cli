import Taro, { useRef, useState } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

const OoToast = ({ msgs = [], aniedFn }) => {
  let aniCountRef = useRef(0)
  const aniedEvt = () => {
    aniCountRef.current += 1
    if (aniCountRef.current >= msgs.length) {
      aniedFn && aniedFn()
    }
  }
  return (
    <View className="oo-toast" onClick={() => aniedEvt(0)}>
      {msgs.map((msg, index) => {
        return <View className='oo-toast-cont oo-ani' onAnimationend={() => aniedEvt()} key={String(index)}>{msg}</View>
      })}
    </View>
  )
}


OoToast.options = {
  addGlobalClass: true
}

export default OoToast

