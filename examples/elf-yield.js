// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface. If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const elfEarn = await hre.ethers.getContractFactory("elfEarn");
  const elfearn = await elfEarn.deploy();
  await elfearn.deployed();
  console.log("elfEarn deployed to:", elfearn.address);

  console.log(await elfearn.alive());

  console.log("USDC Balance: ",  hre.ethers.BigNumber.from(await elfearn.getUSDCBalance()).toNumber() );

  console.log("estimated gas:", hre.ethers.BigNumber.from(await elfearn.estimateGas.getPTBalance()).toNumber() );
  console.log( "PT balance: ", hre.ethers.BigNumber.from(await elfearn.getPTBalance( {
    gasLimit: 2500000
    })).toNumber() );

  console.log( "YT balance: ", hre.ethers.BigNumber.from(await elfearn.getYTBalance()).toNumber() );

  let tx =  await elfearn.getYield();
  //await tx.wait();
  //console.log(`Yield: ${tx.hash}   ${tx.value}`);

  console.log(hre.ethers.BigNumber.from(tx).toNumber() );

}

// We recommend this pattern to be able to use async/await everywhere and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
