const fetch = require("node-fetch");
const { translation } = require("./translation");
const apiKey = process.env.NEWS_API_KEY


const getNewsBySubject = async (sub, count = 1) => {
    return fetch(`https://newsapi.org/v2/everything?q=${sub}&apiKey=${apiKey}`)
        .then(res => res.json())
        .then(async res => {
            const texts = [];
            for (const el of res.articles.slice(0, count)) {
                texts.push(`${await translation(el.title)}\n\n${await translation(el.description)}\n\n${el.url}`)
            }
            return texts;
        });
}

module.exports = {
    getNewsBySubject
}