//mynews_telegram_bot
require("dotenv").config();
const fetch = require("node-fetch");

const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TOKEN;

const bot = new TelegramBot(token, { polling: true });

const getData = () => {
    return fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=20f1dd6d7cdb481794e6858275346afb')
    .then(res => res.json())
    .then(res => res.articles);
};

bot.onText(/\/info/, async (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
      chatId,
      "Это бот для получения актуальных новостей.\nОн пока находится в разработе, тут будет указазан список команд."
    );
  });