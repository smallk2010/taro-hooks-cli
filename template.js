/**
 * pages模版快速生成脚本,执行命令 npm run page `文件名` [s]
 * components模版快速生成脚本,执行命令 npm run comp `文件名` [s]
 */

const fs = require('fs');
const cwd = process.cwd(); // 项目路径
const cmd = process.argv[2];  // npm run 命令
const tmplName = process.argv[3]; // 模板名
const isStore = process.argv[4] === 's'; // 是否创建 store
const isComp = cmd === 'comp';
let cmdDir = cmd === 'page' ? 'pages' : 'components';
let suffix = cmd === 'page' ? 'page' : 'oo';

let obj = {
  fnName: isComp ? `${titleCase(suffix)}${titleCase(tmplName)}` : titleCase(tmplName), // hook函数名
  cssName: `${suffix}-${tmplName}`, // css样式名
  tmplName: isComp ? `${suffix}-${tmplName}` : `${tmplName}` // 创建模板的名字
}

if (!tmplName) {
  console.log('文件夹名称不能为空！');
  console.log('示例：npm run page test');
  process.exit(0);
}

// 页面模版
let indexTmpl = `import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
${isStore ? `import ${tmplName} from '../../store/${tmplName}'` : ''}
import './index.scss'

const ${obj.fnName} = () => {
  ${isStore ? `const [state, actions] = ${tmplName}.useStore()` : ''}
  return (
    <View className="${obj.cssName}" ${isStore ? 'onClick={()=> actions.setName(\'kK .\')}' : ''}>
      hello,${obj.fnName}${isStore ? '，这是来自远方的{state.name}' : ''}
    </View>
  )
}

${obj.fnName}.config = {
  navigationBarTitleText: '${obj.fnName}'
}

`;
if (isComp) {
  indexTmpl += `${obj.fnName}.options = {
  addGlobalClass: true
}

export default ${obj.fnName}

`
}
// scss文件模版
const scssTmpl = `@import "../../var.scss";
.${obj.cssName} {}
`;
// store文件模版
const storeTmpl = `import Model from './index'
const sleep = async t => new Promise(resolve => setTimeout(resolve, t))
const initialState = { name: '${tmplName}' }
const actions = {
    async setInfo () {
        await sleep(3000)
        return Promise.resolve({ name: 'cC', job: '全栈' })
    },
    setJob (state, job) {
        return Object.assign({}, { ...state, job })
    },
    setName (state, name) {
        return Object.assign({}, { ...state, name })
    }
}
const ${tmplName} = new Model({
  initialState,
  actions
})
export default ${tmplName}
`;


fs.mkdirSync(`${cwd}/src/${cmdDir}/${obj.tmplName}`);
process.chdir(`${cwd}/src/${cmdDir}/${obj.tmplName}`);

fs.writeFileSync('index.jsx', indexTmpl);
fs.writeFileSync('index.scss', scssTmpl);

if (isStore) {
  let storeDir = `${cwd}/src/store`
  process.chdir(storeDir);
  fs.writeFileSync(`${tmplName}.js`, storeTmpl);
}
console.log('--------------------------------------\n');
console.log(`${cmdDir}/${obj.tmplName}模版已创建`);
isStore && console.log(`store/${tmplName}已创建`);
console.log('--------------------------------------\n');
function titleCase (str) {
  const _arr = str.toLowerCase().split(' ');
  for (let i = 0; i < _arr.length; i++) {
    _arr[i] = _arr[i][0].toUpperCase() + _arr[i].substring(1, _arr[i].length);
  }
  const _str = _arr.join(' ');
  return _str;
}

process.exit(0);
