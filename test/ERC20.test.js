// Variable ERC20 = to the contract ERC20
const ERC20 = artifacts.require("ERC20");
// Export the function with injected truffle parameters
contract("ERC20", async accounts => {
  it("should have 100 tokens in the balance after migration", async () => {
    // Variable instance = to the deployed ERC20 contract that needs to wait
    let instance = await ERC20.deployed();
    // variable balance = to balanceOf function call instance that needs to wait
    let balance = await instance.balanceOf.call(accounts[1]);
      // Assert that the expected and actual parameters are equal
      assert.equal(balance.valueOf(), 100, "balance is not 100 after migration");
  });
});

/*const ERC20 = artifacts.require("ERC20");

contract("ERC20", accounts => {
  it("should have 100 tokens in the balance after migration", () => {
    ERC20.deployed()
    .then(instance => {
      instance.balanceOf.call(accounts[0]);
    })
    .then(balance => {
        assert.equal(balance.valueOf(), 100, "balance is not 100 after migration");
      });
  });
});*/
