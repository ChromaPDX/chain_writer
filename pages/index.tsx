import Head from "next/head";
import React, { useEffect, useState } from "react";
import Web3 from 'web3';

let web3;
declare var window: any

const Index = (props: any) => {

  const [body, setBody] = useState('hello blockchain');

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

      console.log("web3", web3)

    })(); 
  }, []);
  
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

            <button onClick={(e) => alert(body)} style={{
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