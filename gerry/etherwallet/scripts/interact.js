const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;


const { ethers } = require("hardhat");
const contract = require("../artifacts/contracts/gerry.sol/SampleStorage.json");

//provider - alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network="rinkeby",API_KEY)

//signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

//contract instance
const simpleContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    let amount = await simpleContract.getBalance();

    console.log("The balance inside the contract is currently: " + amount);

    await simpleContract.withdraw(amount);

    let amountAfter = await simpleContract.getBalance();

    console.log("The balance inside the contract is currently: " + amountAfter);

    
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });