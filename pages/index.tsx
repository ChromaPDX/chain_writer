import Head from "next/head";
import React, { useEffect, useState } from "react";
import Web3 from 'web3';

let web3;
declare var window: any

const Index =  (props: any) => {

  const [body, setBody] = useState('hello web3');

  useEffect(() => {
    (async () => {
      if (window.ethereum) {
        // Modern DApp browsers
        web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
        } catch (error) {
          // User denied account access
          console.log(error);
        }
      }
      else if (window.web3) {
        // Legacy dapp browsers
        web3 = new Web3(window.web3.currentProvider);
      }
      else {
        // Non-dapp browsers
        console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
      }
      // window.BrowserSolc.getVersions(function (soljsonSources, soljsonReleases) {
      //   // console.log(soljsonReleases['0.6.0'] )

      //   window.BrowserSolc.loadVersion(soljsonReleases['0.4.6'], function (c) {
      //     console.log('Solc loaded!')
      //     solc = c;
      //   })

      // })

    })();
  }, []);



  const deploy = async (text: string) => {

    // console.log(solc)

    // var input = {
    //   language: 'Solidity',
    //   sources: {
    //     'test.sol': '////hello world\ncontract x { function f() public { } }',
    //     // 'foo.sol': text,
    //     // 'IAsciiArt.sol': iascii,
    //   },
    // };

    // let jsonContractSource = JSON.stringify({
    //   language: 'Solidity',
    //   sources: {
    //     'Task': {
    //       content: 'contract x { function f() public { } }',
    //     },
    //   },
    //   settings: {
    //     outputSelection: {
    //       '*': {
    //         '*': ['abi',"evm.bytecode"]
    //       },
    //     },
    //   },
    // });


    // let result = solc.compile(input);
    // console.log(result)

    // const ntrfc = JSON.parse(result.contracts.x.interface);
    // console.log(ntrfc);
    var factory = new web3.eth.Contract([
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          }
        ],
        "name": "ERC721TokenCreated",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "symbol",
            "type": "string"
          }
        ],
        "name": "deployNewERC721Token",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ], `0xf7fb9B9D6136D8AA533510fCEa5499ddF238bC70`);

    const t = await factory.methods.deployNewERC721Token("Demo ERC721 Token","DEMO721").send({
      from: web3.currentProvider.selectedAddress
    });
    console.log(t);
    // factory.methods.deployNewERC721Token().send();

    // myContract.deploy({
    //   data: result.contracts.x.bytecode,
    //   arguments: []
    // })
    //   .send({
    //     from: web3.currentProvider.selectedAddress,
    //     gas: 1000000,
    //     gasPrice: '20000000000'
    //   }, (error, transactionHash) => {
    //     console.log("done?", error, transactionHash);
    //   })

  }

  return (
    <div>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <main>
        <div className="text-2xl">
          <textarea style={{
            margin: 'auto',
            display: 'block'
          }} rows={10} cols={50}
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />

          <button onClick={(e) => deploy(body)} style={{
            margin: 'auto',
            display: 'block'
          }}>
            submit
          </button>

        </div>
      </main>
    </div>
  );
};

export default Index;