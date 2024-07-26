const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const CandleAuction = await hre.ethers.getContractFactory("CandleAuction");
    const candleAuction = await CandleAuction.deploy(60); //60 seconds

    await candleAuction.waitForDeployment();

    console.log("CandleAuction deployed to:", candleAuction.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
