// Variable ERC20 = to the contract ERC20
const ERC20 = artifacts.require("ERC20");
// Export the async function with injected truffle parameter
contract("ERC20", async accounts => {
  it("The balance of account one should have 100 tokens after migration", async () => {
    // Variable instance = to the deployed ERC20 contract that we need to wait for
    let instance = await ERC20.deployed();
    // Variable balance = to the returned value of the balanceOf function that we need to wait for
    // taken from the instance of the ERC20 contract
    let balance = await instance.balanceOf(accounts[1]);
      // Assert that the expected and actual parameters are equal
      assert.equal(balance.valueOf(), 100, "balance of account one is not 100 after migration");
  });
});

/*contract("ERC20", accounts => {
  it("The balance of account one should have 100 tokens after migration", () => {
    return ERC20.deployed().then(instance => instance.balanceOf(accounts[1]))
    .then(balance => assert.equal(balance.valueOf(), 100, "balance of account one is not 100 after migration"));
  });
});*/
