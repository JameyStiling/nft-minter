const { expect } = require("chai");
describe("MyNfts", function () {
  it("Should return the right name and symbol", async function () {
    const MyNfts = await hre.ethers.getContractFactory("MyNfts");
    const myNfts = await MyNfts.deploy("MyNfts", "MCL");

    await myNfts.deployed();
    expect(await myNfts.name()).to.equal("MyNfts");
    expect(await myNfts.symbol()).to.equal("MCL");
  });
});
