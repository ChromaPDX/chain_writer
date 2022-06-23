// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "./IAsciiArt.sol";

contract AsciiArt is ERC721Burnable, IAsciiArt {
    uint256 public lastMintId;
    mapping(uint256 => address) public tokenIdToSmartContract;

    constructor() public ERC721("ASCII Art", "ASCII") {}

    function mint(address mintTo) public override {
        // TOOD: require contract meets interface
        // require(Address.isContract(msg.sender), "must be smart contract");

        // TODO: ensure its not registered before

        uint256 newMintId = lastMintId + 1;
        lastMintId = newMintId;
        tokenIdToSmartContract[newMintId] = msg.sender;
        _mint(mintTo, newMintId);
    }
}
