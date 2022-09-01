async function main() {
    const SampleStorage = await ethers.getContractFactory("SampleStorage");
 
    // Start deployment, returning a promise that resolves to a contract object
    const sample_storage = await SampleStorage.deploy();
    console.log("Contract deployed to address:", sample_storage.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });