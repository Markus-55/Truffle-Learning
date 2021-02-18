const ERC20 = artifacts.require("ERC20");
contract("ERC20", async accounts => {
  it("The balance of account one should have 100 tokens after migration", async () => {
    let instance = await ERC20.deployed();
    let balance = await instance.balanceOf(accounts[1]);
      assert.equal(balance.valueOf(), 100, "balance of account one is not 100 after migration");
  });
});

/*contract("ERC20", accounts => {
  it("The balance of account one should have 100 tokens after migration", () => {
    return ERC20.deployed().then(instance => instance.balanceOf(accounts[1]))
    .then(balance => assert.equal(balance.valueOf(), 100, "balance of account one is not 100 after migration"));
  });
});*/
