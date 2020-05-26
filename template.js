/**
 * pages模版快速生成脚本,执行命令 npm run page `文件名`
 * components模版快速生成脚本,执行命令 npm run comp `文件名`
 */

const fs = require('fs');
const cwd = process.cwd();
const tmplName = process.argv[2];
const dirName = process.argv[3];
const isStore = process.argv[4];
console.log(process.cwd())
if (!dirName) {
  console.log('文件夹名称不能为空！');
  console.log('示例：npm run page test');
  process.exit(0);
}
let suffix = tmplName === 'page' ? 'page' : 'oo'
let fnName = tmplName === 'page' ? titleCase(dirName) : 'Oo' + titleCase(dirName)
// 页面模版
let indexTmpl = `import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
${isStore === 's' ? 'import {useStore} from \'../../store/demo\'' : ''}
import './index.scss'

export default ${fnName} = () => {
  ${isStore === 's' ? 'const [state,actions] = useStore()' : ''}
  return (
    <View className="${suffix}-${dirName}" ${isStore === 's' ? 'onClick={()=> actions.setName(\'kK .\')}' : ''}>
      ${dirName}${isStore === 's' ? '{state.name}' : ''}
    </View>
  )
}

${fnName}.config = {
  navigationBarTitleText: '${dirName}'
}

`;
if (tmplName === 'comp') {
  indexTmpl += `${fnName}.options = {
    addGlobalClass: true
  }`
}
// scss文件模版
const scssTmpl = `@import "../../var.scss";
.${suffix}-${dirName} {
}
`;
// store文件模版
const storeTmpl = `const sleep = async t => new Promise(resolve => setTimeout(resolve, t))
const initialState = { name: '${dirName}' }
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

const ${dirName} = new Model({
    initialState,
    actions
})`;

let dir = tmplName === 'page' ? 'pages' : 'components'
let fileName = tmplName === 'page' ? '' : 'oo-'
fs.mkdirSync(`${cwd}/src/${dir}/${fileName}${dirName}`);
process.chdir(`${cwd}/src/${dir}/${fileName}${dirName}`);

fs.writeFileSync('index.js', indexTmpl);
fs.writeFileSync('index.scss', scssTmpl);

let sDir = `${cwd}/src/store`
console.log(`${dir}/${fileName}${dirName}模版已创建`);
if (isStore == 's') {
  process.chdir(sDir);
  fs.writeFileSync(`${dirName}.js`, storeTmpl);
  console.log(`store/${dirName}已创建`);
}

function titleCase (str) {
  const array = str.toLowerCase().split(' ');
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length);
  }
  const string = array.join(' ');
  return string;
}

process.exit(0);
