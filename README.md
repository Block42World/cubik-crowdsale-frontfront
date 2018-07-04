![Block42](https://static.wixstatic.com/media/0f9f87_48376b7086e84c1b9d2a3f86212f5c44~mv2.png/v1/fill/w_300,h_300,al_c,usm_0.66_1.00_0.01/0f9f87_48376b7086e84c1b9d2a3f86212f5c44~mv2.png)

# CUBIK token crowdsale frontend

## About
The html frontend for CUBIK token crowdsale on Ethereum using web3, refer to the [crowdsale smart contract](https://github.com/Block42World/cubik-contracts/blob/master/contracts/CubikCrowdsale.sol).

A demo is available [here](http://www.sweatychair.com/block42/crowdsale.html).

- Working in both Main Ethereum Network and Ropsten Test Network
- Working with MetaMask, local and Infura nodes are commented and can be used for debugging
- Bootstrap theme and styled
- Web3 1.0 beta 34 (MetaMask still having issues on Web3 1.0 at the time of writing)
- A flatten version included for website using iFrame

## Modification
To use this crowdsale page for your token ICO, change the token and crowdsale contract address at [crowdsale.js](js/crowdsale.js), then change their ABI at [token_abi.js](js/token_abi.js) and [crowdsale_abi.js](js/crowdsale_abi.js).

## Run a server
```
python -m SimpleHTTPServer 8000
// browse to http://localhost:8000/index.html
```

## TODO
- Optimize using Vue.js
- Provide a better auto flatten method using NPM
- Fix contract event feedback currently not working with MetaMask
- Put address and setting into JSON file for better structure
- Add better graphic for MetaMask install instruction