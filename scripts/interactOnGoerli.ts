import { ethers } from "hardhat";
import dotenv from "dotenv";

async function main() {
  const [owner] = await ethers.getSigners();
  const deployedContract = await ethers.getContractAt("IRandomNumber","0xc0eB87404CeebF40B147d6B483cB2Ec99c98C5d0");
  console.log((await deployedContract.owner()));
  console.log((await deployedContract.requestRandomWords()));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// 29 021 272 406 297 808
// 5 983 384 575 330 022