import { ethers } from "hardhat";
import { AsciiArt__factory, ArtExample__factory } from "../typechain";
import hre from "hardhat";
import delay from "delay";
import { Contract, ContractFactory } from "ethers";

const waitDeployedAndVerify = async (contract: Contract, givenParams?: any) => {
  console.log("address", contract.address);
  console.log("hash", contract.deployTransaction.hash);
  await contract.deployed();
  console.log("deployed, waiting before verifying");
  await contract.deployTransaction.wait(4);
  
  const verifyOpts: any = {
    address: contract.address
  };
  
  if (givenParams) {
    verifyOpts.constructorArguments = givenParams;
  }
  
  await hre.run("verify:verify", verifyOpts);
}

async function main() {
  // DEPLOY MAIN CONTRACT
  
  const mainFactory = (await ethers.getContractFactory(
    "AsciiArt"
  )) as AsciiArt__factory;

  const deployerAddress = await mainFactory.signer.getAddress();
  console.log("Deployer address ", deployerAddress);
  const mainContract = await mainFactory.deploy();
  await waitDeployedAndVerify(mainContract);
  
  console.log("Verified main contract, deploying example");
  
  const exampleFactory = (await ethers.getContractFactory(
    "ArtExample"
  )) as ArtExample__factory;
  const param1 = mainContract.address;
  const param2 = deployerAddress;
  const exampleContract = await exampleFactory.deploy(param1, param2);
  await waitDeployedAndVerify(exampleContract, [param1, param2]);
  
  console.log('done');
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });