const chai = require('chai');
const { expect } = chai;
const BN = require('bn.js');
const FACTORY = artifacts.require("./Factory.sol");
// const ERC20TOKEN = artifacts.require("./ERC20Token.sol");
const ERC721TOKEN = artifacts.require("./ERC721Token.sol");

chai.use(require('chai-bn')(BN));

contract("Factory", async accounts => {
  let Factory;
  // let ERC20Token;
  let ERC721Token;

  before("Create new instance of factory contract", async () => {
    Factory = await FACTORY.deployed();
  });

  it("Should use factory to deploy new ERC721 token", async () => {
    ERC721Token = await Factory.deployNewERC721Token(
      "Demo ERC721 Token",
      "DEMO721", 
    );
    const TokenInstance = await ERC721TOKEN.at(ERC721Token.logs[0].args.tokenAddress);
    const symbol = await TokenInstance.symbol.call();
    expect(symbol).to.equal("DEMO721")
  });

  it("Should mint a new ERC721 item", async () => {
    const TokenInstance = await ERC721TOKEN.at(ERC721Token.logs[0].args.tokenAddress);
    const minter = accounts[1];
    
    const uri = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `;
    const tx = await TokenInstance.awardItem(minter, uri);

    const tokenIdBN = tx.logs[1].args.newItemId;
    const tokenId = tokenIdBN.toNumber()
    const owner = await TokenInstance.ownerOf.call(tokenId);
    const tokenUri = await TokenInstance.tokenURI.call(tokenId);
    
    expect(owner).to.equal(minter);
    expect(tokenUri).to.equal(uri);
  });


});
