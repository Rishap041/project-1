const path = require("path");
const HDWallet = require('truffle-hdwallet-provider');
const fs = require('fs');

const mnemonic = "age sting shoulder concert student student brother warm ill cry sword you";
//const infuraKey = 'bf8db4bc4d5c40d68e05f66e175293ad';

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWallet(mnemonic, 'https://rinkeby.infura.io/v3/bf8db4bc4d5c40d68e05f66e175293ad'),
      network_id: 4,       // Ropsten's id
    },
  },
};