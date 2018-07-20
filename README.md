![Block42](https://static.wixstatic.com/media/0f9f87_48376b7086e84c1b9d2a3f86212f5c44~mv2.png/v1/fill/w_300,h_300,al_c,usm_0.66_1.00_0.01/0f9f87_48376b7086e84c1b9d2a3f86212f5c44~mv2.png)

# CUBIK token crowdsale frontend

## About
The html frontend for CUBIK token crowdsale on Ethereum using Web3, refer to the [crowdsale smart contract](https://github.com/Block42World/cubik-contracts/blob/master/contracts/CubikCrowdsale.sol).

A demo is available [here](http://www.sweatychair.com/block42/crowdsale.html).

- Working in both Main Ethereum Network and Ropsten Test Network
- Working with MetaMask, local and Infura nodes are commented and can be used for debugging
- Bootstrap theme and styled
- Web3 1.0 beta 34 (MetaMask still having issues on Web3 1.0 at the time of writing)
- A absolute-linked version included for website can only use iFrame (such as Wix)

## Development

### Prerequisites
- [Node.js](https://nodejs.org/en/download/)
- [Browserify](http://browserify.org/) `npm install -g browserify`
- [Watchify](https://github.com/substack/watchify) `npm install -g watchify`
- [http-server](https://www.npmjs.com/package/http-server) `npm install -g http-server -g`
- [Concurrently](https://www.npmjs.com/package/concurrently) `npm install -g concurrently`

### Install dependencies
`npm i`

### Watch and bundle JavaScript
`browserify main.js -o static/bundle.js`

### Start web server in localhost with npm
`npm start`

## Modification
To use this crowdsale page for your token ICO, change the token and crowdsale contract address at [crowdsale.js](js/crowdsale.js), then change their ABI at [token_abi.js](js/token_abi.js) and [crowdsale_abi.js](js/crowdsale_abi.js).

## TODO
- Optimize using Vue.js
- Provide a better auto flatten method using NPM
- Fix contract event feedback currently not working with MetaMask
- Put address and setting into JSON file for better structure
- Add better graphic for MetaMask install instruction