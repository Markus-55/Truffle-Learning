const ERC20 = artifacts.require("ERC20");

module.exports = async (deployer, network, accounts) => {

  const name = "MarkusCoin";
  const symbol = "MKC";
  const decimals = 8;

  try {
    await deployer.deploy(ERC20, name, symbol, decimals);
    let instance = await ERC20.deployed();
    await instance.mint(accounts[1], 100);
    let balance = await instance.balanceOf(accounts[1]);
    console.log(`   > successfully minted ${balance} tokens to account one`);
  }
  catch(err) {
    console.log("   < Error: " + err);
  }
}

/*const ERC20 = artifacts.require("ERC20");

module.exports = (deployer, network, accounts) => {

  const name = "MarkusCoin";
  const symbol = "MKC";
  const decimals = 8;

  deployer.deploy(ERC20, name, symbol, decimals).then(instance => {
    instance.mint(accounts[1], 100).then(() => {
      instance.balanceOf(accounts[1]).then(balance => {
        console.log("successfully minted " + balance + " tokens to account one after migration")
      }).catch(err => console.log("< Error: " + err));
    }).catch(err => console.log("< Error: " + err));
  });
}*/
