pragma solidity 0.5.12;

contract Ownable {
    address public owner;
    address payable ownerPayable = address(uint160(owner));

    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }

    constructor() public{
        owner = msg.sender;
    }
}
