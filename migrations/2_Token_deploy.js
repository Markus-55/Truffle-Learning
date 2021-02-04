// Variable ERC20 = to the contract ERC20
const ERC20 = artifacts.require("ERC20");

// Export the function with injected truffle parameters
module.exports = (deployer, network, accounts) => {

  // Variable name = MarkusCoin
  const name = "MarkusCoin";
  // Variable symbol = MKC
  const symbol = "MKC";
  // Variable decimals = 8
  const decimals = 8;
  // Deploy contract ERC20 with name, symbol, decimals
  deployer.deploy(ERC20, name, symbol, decimals).then(instance => {
    // with the instance mint 100 from account 1
    instance.mint(accounts[1], 100);
  });
}
