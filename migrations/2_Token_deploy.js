// Variable ERC20 = to the contract ERC20
const ERC20 = artifacts.require("ERC20");

// Export the function with injected truffle parameters
module.exports = async (deployer, network, accounts) => {

  // Variable name = MarkusCoin
  const name = "MarkusCoin";
  // Variable symbol = MKC
  const symbol = "MKC";
  // Variable decimals = 8
  const decimals = 8;

  // Deploy contract ERC20 with name, symbol and decimals that we need to wait for
  await deployer.deploy(ERC20, name, symbol, decimals);
  // Variable instance = to the deployed ERC20 contract that we need to wait for
  let instance = await ERC20.deployed();

  // gives the returned value of the mint function that we need to wait for
  // taken from the instance of the ERC20 contract
  await instance.mint(accounts[1], 100);

  // Variable balance = to the returned value of the balanceOf function that we need to wait for
  // taken from the instance of the ERC20 contract
  let balance = await instance.balanceOf(accounts[1]);
  console.log(`   > successfully minted ${balance} tokens to account one`);

/*deployer.deploy(ERC20, name, symbol, decimals).then(instance => {
  instance.mint(accounts[1], 100).then(() => {
    instance.balanceOf(accounts[1]).then(balance => {
      console.log("successfully minted " + balance + " tokens to account one after migration")
    });
  });
}).catch((err) => {
console.log("err");
});*/
}
