const hre = require("hardhat");
const fs = require("fs");

async function main() {
//   [signer] = await ethers.getSigners();
//   console.log(`Deploying contracts using ${signer.address}`);

   let data = JSON.parse(fs.readFileSync("./goerli-constants.json"));
   console.log('parse ');
//   const bytecodeHash = ethers.utils.solidityKeccak256(["bytes"], [data.trancheBytecode],{ gasLimit : 10});
//   const balVault = data.balancerVault;
//   const trancheFactory = data.trancheFactory;

  const YTC = await hre.ethers.getContractFactory("YieldTokenCompounding");
  const ytc_contract = await YTC.deploy();
  await ytc_contract.deployed();
  console.log("ytc_contract deployed to:", ytc_contract.address);

   //data["yieldTokenCompoundingAddress"] = ytc_contract;
   data["yieldTokenCompoundingAddress"] = ytc_contract.address;
   fs.writeFileSync("./goerli-constants.json", JSON.stringify(data, null, 2));

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
