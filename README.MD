# URL Shortener
Simple Node URL Shortener made in JavaScript

![license](https://img.shields.io/badge/license-MIT-green) ![npm version](https://img.shields.io/badge/npm-6.14.4-orange) ![node version](https://img.shields.io/badge/node-10.19.0-blue)

## Pre-requisites

You'll need the [node](https://pip.pypa.io/en/stable/) package to run this application.

On Linux:
```bash
sudo apt update
sudo apt install nodejs
```

After it, you should to install <b>request package</b> typing:

```npm
npm install request
```

## Usage

On main.js file:
```javascript
let reqObject = {
    destination: "PUT_ORIGINAL_URL_HERE",
    domain: { fullName: "rebrand.ly" }
}
```

## How to run

After install NodeJS in your machine, to run this script, open any command terminal and run

```bash
cd urlshortener
node main.js
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
This project was made by me (Luís Dourado) and you're free to fork/clone everything! Cheers to open-source community :D
[MIT](https://choosealicense.com/licenses/mit/)