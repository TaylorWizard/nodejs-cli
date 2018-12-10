'use strict'

const co = require('co')
const prompt = require('co-prompt')
const chalk = require('chalk')
const fs = require('fs')

module.exports = () => {
    co(function * (){
        // 分步接收用户输入的参数
        let tplName = yield prompt('Template name: ')
        let gitUrl = yield prompt('Git http link: ')
        let branch = yield prompt('Branch: ')

        
    })
}