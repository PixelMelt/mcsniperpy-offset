const math = require('mathjs')

console.log(`                          _                             __  __          _   `)
console.log(` _ __ ___   ___ ___ _ __ (_)_ __   ___ _ __       ___  / _|/ _|___  ___| |_ `)
console.log(`| '_ \` _ \\ / __/ __| '_ \\| | '_ \\ / _ \\ '__|____ / _ \\| |_| |_/ __|/ _ \\ __|`)
console.log(`| | | | | | (__\\__ \\ | | | | |_) |  __/ | |_____| (_) |  _|  _\\__ \\  __/ |_ `)
console.log(`|_| |_| |_|\\___|___/_| |_|_| .__/ \\___|_|        \\___/|_| |_| |___/\\___|\\__|`)
console.log(`                           |_|                                              `)

console.log(``)
console.log(`Created by Pix#7008`)
console.log(`Git: github.com/PixelMelt/mcsniperpy-offset | Discord: https://mcsniperpy.com/discord`)

const readline = require('readline').createInterface({ 
  input: process.stdin, 
  output: process.stdout 
}) 
 
readline.question(`[Input] What's your request time? => `, (RT) => { 
  readline.question(`[Input] What's your names drop time? => `, (DT) => { 
    readline.question(`[Input] What's your previous delay? => `, (PD) => {
      DT = DT.replace(/\:/g,'')
      RT = RT.replace(/\:/g,'')
      DT = parseInt(DT) + 0.1
      var x = RT - DT
      var dtab = math.evaluate(`${x} * 1000`)
      var fdel = math.evaluate(`${PD} + ${dtab}`)
      fdel = math.round(fdel)
      console.log(`[Sucess] Set your delay to ${fdel}`)
      readline.close()
    })
  }) 
})
