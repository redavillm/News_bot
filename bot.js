require("dotenv").config();
const fetch = require("node-fetch");
const axios = require("axios");

const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TOKEN;

const bot = new TelegramBot(token, { polling: true });

// const getData = async (them) => {
//     return await fetch(`https://newsapi.org/v2/everything?q=${them}&apiKey=20f1dd6d7cdb481794e6858275346afb`)
//     .then(res => res.json())
//     .then(res => res.articles);
// };


const translation = async (text) => {
    try {
        return await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=en&tl=ru&q=${text}`)
            .then(res => res.json())
            .then(res => {
                console.log(res[0][0][0])
            })
    } catch (error) {
        console.log('Error while translation', error);
    }
}

// translation('hello world')
console.log(translation('hello world'))

bot.onText(/\/info/, async (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
        chatId,
        "Это бот для получения актуальных новостей.\nОн пока находится в разработе, тут будет указазан список команд. "
    );
});

bot.onText(/\/news (.+)/, async (msg, match) => {
    try {
        const chatId = msg.chat.id;
        const them = match[1].split(" ");
        await fetch(`https://newsapi.org/v2/everything?q=${them}&apiKey=20f1dd6d7cdb481794e6858275346afb`)
            .then(res => res.json())
            .then(res => {
                res.articles.slice(0, 2).map(el => {
                    bot.sendMessage(chatId, `${translation(el.title)}\n\n${translation(el.description)}\n\n${el.url}`)
                })
            });

    }
    catch (error) {
        console.log('News error:', error);
    }
});