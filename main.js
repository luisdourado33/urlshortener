/**
 * URL Shortener (Encurtador de URL)
 * Node v15.1.0
 * https://github.com/luisdourado33
 * 
 * @param destination an url that refers website link which will be shortened
 * @param domain API name to catch a good connection
 * @return the website link shortened
 */

let request = require("request");
const scope = require('./scope');

let reqObject = {
    destination: "https://music.youtube.com/watch?v=0tTn95TLIaw&list=RDAMVMUSo0sAaJKR0",
    domain: { fullName: "rebrand.ly" }
}

let requestHeaders = {
    "Content-Type": "application/json",
    "apikey": "ccc538390ba94c6f95141f935efb7b54"
}

request({
    uri: "https://api.rebrandly.com/v1/links",
    method: "POST",
    body: JSON.stringify(reqObject),
    headers: requestHeaders
}, (err, response, body) => {
    let link = JSON.parse(body);

    const originalUrl = `Original URL: ${link.destination}`
    const callbackMessage = `URL shortened: https://${link.shortUrl}`

    /**
     * Callback message
     */

    /**
     * @function scopeStyle(scopeChar: string, originalUrl, callbackMessage)
     * @param scopeChar defines what's character which will be shown 
     *                  the message 
     */
    console.log(scope.scopeStyle('/', originalUrl, callbackMessage));
})