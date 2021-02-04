/**
 * URL Shortener (Encurtador de URL)
 * Node v15.1.0
 * https://github.com/luisdourado33
 * 
 * @param scopeChar set scope character to show on API response
 * @return scopeStyle a scoped string
 */

const colors = require('colors');
const scopeStyle = (scopeCharacter, originalUrl, callbackMessage) => {
    let scopeStyle = "";
    for (let i = 1; i <= (originalUrl.length); i++) {
        scopeStyle += scopeCharacter;
    }
    scopeStyle = scopeStyle + scopeCharacter + scopeCharacter;

    const warnBadge = "[BE CAREFUL]".bgRed + " ";
    callbackMessage = callbackMessage.bgGreen.black;

    const warningMessage = warnBadge + "Don't use these shortened links to keep high-level \nsecurity information, it might be erased anytime.".red;
    const toString = `${scopeStyle}\n${scopeCharacter}\n${scopeCharacter} ${warningMessage}\n${scopeCharacter}\n${scopeCharacter} ${originalUrl}\n${scopeCharacter} ${callbackMessage}\n${scopeCharacter}\n${scopeStyle}`;
    return toString;
}

module.exports = {
    scopeStyle
};