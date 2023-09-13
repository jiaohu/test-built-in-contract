// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers, upgrades } = require("hardhat");
const { writeFile } = require('fs');

async function deploy_contract(contract, args, params) {
  const a = args || [];

  const C = await ethers.getContractFactory(contract, params);

  const cc = await C.deploy(...a);
  await cc.waitForDeployment();

  console.log(contract, "address is: ", cc.target);

  return cc;
}



async function main() {
  const test = await deploy_contract("Test");

  const addresses = {
    Test: test.target
  }
  const filename = `./public/${network.name}.json`;
  writeFile(
    filename,
    JSON.stringify(addresses, null, 2),
    function (err) {
      if (err) {
        console.log(err);
      }
    });
  console.log(`Save to ${filename}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
