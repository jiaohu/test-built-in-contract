const { ethers } = require("hardhat");
const { readFileSync } = require('fs');


async function attachContract(name) {
  const filename = `./public/${network.name}.json`;
  const obj = JSON.parse(readFileSync(filename, 'utf8'));
  const address = obj[name];

  const C = await ethers.getContractFactory(name);
  return await C.attach(address);
}

module.exports = {
    attachContract
  };