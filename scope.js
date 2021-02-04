/**
 * URL Shortener (Encurtador de URL)
 * Node v15.1.0
 * https://github.com/luisdourado33
 * 
 * @param scopeChar set scope character to show on API response
 * @return scopeStyle a scoped string
 */

const scopeStyle = (scopeCharacter, originalUrl, callbackMessage) => {
    let scopeStyle = "";
    for (let i = 1; i <= (originalUrl.length); i++) {
        scopeStyle += scopeCharacter;
    }
    scopeStyle = scopeStyle + scopeCharacter + scopeCharacter;

    const toString = `${scopeStyle}\n* ${originalUrl}\n* ${callbackMessage}\n${scopeStyle}`;
    return toString;
}

module.exports = {
    scopeStyle
};