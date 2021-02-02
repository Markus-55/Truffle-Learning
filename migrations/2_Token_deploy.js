const ERC20 = artifacts.require("ERC20");

module.exports = (deployer, network, accounts) => {

  const name = "MarkusCoin";
  const symbol = "MKC";
  const decimals = 8;
  deployer.deploy(ERC20, name, symbol, decimals).then(instance => {
    instance.mint(accounts[0], 100);
  });
};
