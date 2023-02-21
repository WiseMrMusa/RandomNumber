import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      forking: {
        enabled:true,
        url: process.env.SEPOLIA_RPC || "",
      },
      accounts: {
        accountsBalance: "10000000000000000000000000000000000000000000000000000"
      }
    },
    // eth_ropsten: {
    //   // url: eth_ropsten.url,
    //   chainId: 3,
    //   gasPrice: 20000000000,
    //   gas: 6000000,
    //   accounts: { mnemonic: eth_ropsten.mnemonic }
    // },
    sepolia : {
      //@ts-ignore
      url: process.env.SEPOLIA_RPC,
      gas: 6000,
      gasPrice: 200000,
      //@ts-ignore
      accounts: [process.env.PRIVATE_KEY1]
    },
    goerli : {
      url : process.env.GOERLI_RPC,
      //@ts-ignore
      accounts : [process.env.PRIVATE_KEY1]
    }
  },  
  etherscan: {
    apiKey: process.env.ETHERSCAN,
  }
};

export default config;
