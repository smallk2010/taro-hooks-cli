import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import OoSkeleton from '../oo-skeleton'
import OoLoading from '../oo-loading'
import OoToast from '../oo-toast'
import OoAlert from '../oo-alert'

import './index.scss'

const OoCommon = ({ loading = false, msgs = [], aniedFn }) => {

  return (
    <View>
      {(loading || msgs.length) && <View className="oo-common" >
        {loading && <OoLoading></OoLoading>}
        {msgs.length && <OoToast msgs={msgs} aniedFn={aniedFn}></OoToast>}
      </View>}
    </View>
  )
}

OoCommon.options = {
  addGlobalClass: true
}

export default OoCommon

