const { expect } = require("chai");


describe("elfEarn", function() {
  it("Should return alive when the contract in good standing", async function() {
    const elfEarn = await ethers.getContractFactory("elfEarn");
    const elfearn = await elfEarn.deploy();
    await elfearn.deployed();

    expect(await elfearn.alive()).to.equal("I am ALIVE!");

    console.log(await elfearn.getPTBalance());

  });
});
