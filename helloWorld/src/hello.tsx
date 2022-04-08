import React, { useState, useEffect } from "react";
import Web3 from 'web3'

let web3;

declare var window: any

function App() {
  
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
      // else if (window.web3) {
      //   // Legacy dapp browsers
      //   web3 = new Web3(window.web3.currentProvider);
      // } 
      // else {
      //   // Non-dapp browsers
      //   console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
      // }
    })(); 
  }, []);


  return (
    <div className="App">
      <h1>hello world</h1>
    </div >
  );
}

export default App;
