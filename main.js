import {Telegraf, Markup} from 'telegraf'

const token = '6788408872:AAGygind7MMQkxInFxNyUCssZJzv5He9OIE' 
const webAppUrl = 'https://www.google.com/' 

const bot = new Telegraf (token)

bot.command('start', (ctx)=>{
    ctx.reply(
        'Hi! press the button below to launch the app',
        Markup.keyboard([
            Markup.button.webApp(
                'Press on ME!',
                webAppUrl
            )
        ])
    )
})

bot.launch()