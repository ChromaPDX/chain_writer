import Head from "next/head";
import React, { useEffect, useState } from "react";
import Web3 from 'web3';

import FactoryJson from "../build/contracts/Factory.json";
import FactoryAddress from "../build/contractAddress.txt";
import ERC721TokenJson from "../build/contracts/ERC721Token.json";
// import ERC721TokenAddress from "../build/ERC721TokenAddress.txt";

console.log(FactoryJson.abi, FactoryAddress)

let web3;
declare var window: any

const Index = (props: any) => {

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

    })();
  }, []);


  const deploy = async (text: string) => {

    var factory = new web3.eth.Contract(FactoryJson.abi, FactoryAddress);

    const deployedERC721Token = await factory.methods.deployNewERC721Token("Demo ERC721 Token", "DEMO721")
    .send({
      from: web3.currentProvider.selectedAddress,
      gasPrice: '1000000000000',
      gas: 5000000
    });
    console.log("deployedERC721Token", deployedERC721Token);

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