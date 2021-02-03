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

let reqObject = {
    destination: "PUT_URL_HERE",
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
    console.log(`Original URL: ${link.destination}\n\nURL shortened: ${link.shortUrl}`);
})