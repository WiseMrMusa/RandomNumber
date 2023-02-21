import { ethers } from "hardhat";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  const [owner] = await ethers.getSigners();
  const VRFv2Consumer = await ethers.getContractFactory("VRFv2DirectFundingConsumer");
  const VRFv2Consumer_ = await VRFv2Consumer.deploy();
  await VRFv2Consumer_.deployed();
  console.log(await VRFv2Consumer_.address); 

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
