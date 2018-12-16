// 为命令行文字添加颜色, 美观
import 'colors'

// 接收命令行参数, 提供基础信息提示功能
import program from 'commander'

// 内部模块
import { existsSync } from 'fs'
import { resolve } from 'path'
import { version } from '../package'

program.version(version)
    .parse(process.argv)

// 没有输入参数就打印help信息
if (program.args.length === 0) {
    program.help()
}

// 获取命令行传入的第一个参数
const [todo = ''] = program.args

// 判断如果 command 下是否存在用户输入的命令对应的文件
if (existsSync(resolve(__dirname, `command/${todo}.js`))) {
    require(`./command/${todo}.js`)
} else {
    console.log(
        `command is not existed`.red
    )
    process.exit(-1)
}