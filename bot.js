require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");
const { getNewsBySubject } = require("./lib/news");

const token = process.env.TOKEN;

const bot = new TelegramBot(token, { polling: true });

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
        const texts = await getNewsBySubject(them);
        console.log(texts)
        bot.sendMessage(chatId, texts[0]);

    }
    catch (error) {
        console.log('News error:', error);
    }
});