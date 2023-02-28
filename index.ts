import { Bot, Middleware } from 'mirai-js'
import cron from 'cron'

import config from './config'
void async function (bot: Bot) {
  let todayReplied: boolean = false;

  await bot.open(config.bot)
  bot.on('FriendMessage', new Middleware()
    .friendFilter([config.target], true)
    .done(async ctx => {
      todayReplied = true
    }))

  const remind = () => {
    if (!todayReplied) {
      bot.sendMessage({
        friend: config.target,
        message: config.msg()
      })
      setTimeout(remind, config.msRemaindInterval)
    }
  }
  new cron.CronJob(config.startCronString, () => {
    todayReplied = false
    remind()
  }).start()


}(new Bot)