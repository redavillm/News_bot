const fetch = require("node-fetch");

const translation = async (text) => {
    try {
        return fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=en&tl=ru&q=${text}`)
            .then(res => res.json())
            .then(res => {
                return res[0][0][0];
            })
    } catch (error) {
        console.log('Error while translation', error);
    }
}

module.exports = {
    translation
}