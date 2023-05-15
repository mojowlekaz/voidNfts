require("@nomicfoundation/hardhat-toolbox");


const SEPOLIA_PRIVATE_KEY = "Chnage this with your own Metamask privatekey";

module.exports = {
  solidity: "0.8.1",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/4ae71f97b73a4317a2dcd6aec964a447",
      accounts: [SEPOLIA_PRIVATE_KEY],
      chainId: 11155111,
      blockConfirmation: 6
    }
  }
};