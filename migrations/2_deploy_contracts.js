const fs = require("fs");

var Factory = artifacts.require("./Factory.sol");

module.exports = function(deployer) {
  deployer.deploy(Factory)
  .then(_instance => fs.writeFile('./build/contractAddress.txt', _instance.address, (err, res) => {
    console.log(err, res)
  }));
};
