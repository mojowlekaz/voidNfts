const hre = require("hardhat");

async function main() {
  const VoidNfts = await hre.ethers.getContractFactory("NFT");
  const voidnft = await VoidNfts.deploy();

  await voidnft.deployed();

  console.log("This is the VoidFeathers NFT Address:" ,voidnft.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
