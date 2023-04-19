require("dotenv").config();
const fetch = require("node-fetch");
const axios = require("axios");

// const TelegramBot = require("node-telegram-bot-api");

// const token = process.env.TOKEN;

// const bot = new TelegramBot(token, { polling: true });

// const getData = async (them) => {
//     return await fetch(`https://newsapi.org/v2/everything?q=${them}&apiKey=20f1dd6d7cdb481794e6858275346afb`)
//     .then(res => res.json())
//     .then(res => res.articles);
// };

// bot.onText(/\/info/, async (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(
//         chatId,
//         "Это бот для получения актуальных новостей.\nОн пока находится в разработе, тут будет указазан список команд."
//     );
// });

// bot.onText(/\/news (.+)/, async (msg, match) => {
//     try {
//         const chatId = msg.chat.id;
//         const them = match[1].split(" ");
//         await fetch(`https://newsapi.org/v2/everything?q=${them}&apiKey=20f1dd6d7cdb481794e6858275346afb`)
//             .then(res => res.json())
//             .then(res => {
//                 res.articles.slice(0, 1).map(el => {
//                     bot.sendMessage(chatId, `${el.title}\n\n${el.description}\n\n${el.url}`)
//                 })
//             });

//     }
//     catch (error) {
//         console.log(error);
//     }
// });

// let arr;

// const start = async () => {
//     const res = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=20f1dd6d7cdb481794e6858275346afb');
//     const data = await res.json();
//     // console.log(data.articles);
//     arr = data.articles;
//     return data.articles;
// };
// console.log(arr);

// start().then(console.log);

const options = {
  method: 'GET',
  url: 'https://nlp-translation.p.rapidapi.com/v1/translate',
  params: {text: 'Hello, world!!', to: 'es', from: 'en'},
  headers: {
    'X-RapidAPI-Key': 'f56bef77bfmsh48997d373a66bcbp100bb8jsna0d4337ac5cf',
    'X-RapidAPI-Host': 'nlp-translation.p.rapidapi.com'
  }
};

axios.request(options).then(res => console.log(res.data));