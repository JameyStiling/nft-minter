async function main() {
    const MyNfts = await hre.ethers.getContractFactory("MyNfts");
    const myNfts = await MyNfts.deploy("MyNfts", "Mine");
  
    await myNfts.deployed();
  
    console.log("MyNfts deployed to:", myNfts.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  