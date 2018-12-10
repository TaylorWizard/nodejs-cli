#! /usr/bin/env node

const program = require('commander')
const inquirer = require('inquirer')
const chalk = require('chalk')
program
    .command('module')
    .alias('m')
    .description('创建新的模块')
    .option('-a, --name [moduleName]', '模块名称', function (str) {
        console.log('str: !!!!!!', str)
    }, '')
    .action(option => {
        console.log('Hello World', option)
        //为什么是Hello World 给你个眼神，自己去体会...
    })
    // 自定义help信息
    .on('--help', function() {
        console.log('Examples: ')
        console.log('')
        console.log('$ app module moduleName')
        console.log('$ app m moduleName');
    })

program.parse(process.argv)