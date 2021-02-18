pragma solidity 0.5.12;

import "./Ownable.sol";
import "./Safemath.sol";

contract ERC20 is Ownable {

    using SafeMath for uint256;

    string private tokenName;
    string private tokenSymbol;
    uint256 private tokenDecimals;

    uint256 private tokenTotalSupply;

    mapping(address => uint256) private balances;

    constructor(string memory _name, string memory _symbol, uint256 _decimals) public {
        tokenName = _name;
        tokenSymbol = _symbol;
        tokenDecimals = _decimals;
    }

    function name() public view returns(string memory) {
        return tokenName;
    }

    function symbol() public view returns(string memory) {
        return tokenSymbol;
    }

    function decimals() public view returns(uint256) {
        return tokenDecimals;
    }

    function totalSupply() public view returns(uint256) {
        return tokenTotalSupply;
    }

    function balanceOf(address _account) public view returns(uint256) {
        return balances[_account];
    }

    function mint(address _account, uint256 _amount) public onlyOwner {
        require(_account != address(0), "cannot mint to the zero address");

        tokenTotalSupply = tokenTotalSupply.add(_amount);
        balances[_account] = balances[_account].add(_amount);
    }

    function transfer(address _recipient, uint256 _amount) public returns(bool) {
        require(_recipient != address(0), "cannot transfer to the zero address");
        require(balances[msg.sender] >= _amount, "Insufficient balance");

        balances[msg.sender] = balances[msg.sender].sub(_amount);
        balances[_recipient] = balances[_recipient].add(_amount);

        return true;
    }
}
