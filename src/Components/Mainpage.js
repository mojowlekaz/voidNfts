import React, { useState } from 'react'
import Box from '@mui/material/Box';
import {AiOutlinePlusCircle } from 'react-icons/ai'
import {useEffect} from 'react';
import {abi, CA} from '/Users/macbook/reactvoid/src/function.js'

export default function Mainpage() {
    const[count, UseCounter] = useState(0)
    const ethers = require("ethers")
    const [walletAddress, setWalletAddress] = useState("")
    const [supply, setSupply] = useState("")
    
    useEffect( () => {
        switchN();
      getConnectedWallet();
      totalSupply();
      currentSupply()
    })
  async function   getConnectedWallet(){
        if (typeof window.ethereum !== 'undefined') 
        try{
        const provider = new ethers.providers.Web3Provider(window.ethereum)            
        await provider.send("eth_requestAccounts", []);
        let signer = await provider.getSigner();
        console.log("Accounts address:", await signer.getAddress());
        let Accounts = await signer.getAddress();
        setWalletAddress(Accounts)
          } 
          catch(err){
          
          }
          else {
            alert.error('Please Install Metamask', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              })
      
          }
          return true;
        
        }

  async function connect(){
    if (typeof window.ethereum !== 'undefined') 
    try{
    const provider = new ethers.providers.Web3Provider(window.ethereum)            
    await provider.send("eth_requestAccounts", []);
    let signer = await provider.getSigner();
    console.log("Accounts address:", await signer.getAddress());
    let Accounts = await signer.getAddress();
   alert.success('Connected Successfully', { 
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      color: "green",
      })
      document.getElementsByClassName('b').innerHTML =    setWalletAddress(Accounts)
      } 
      catch(err){
    
      }
      else {
       alert.error('Please Install Metamask', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })
  
      }
      return true;
    
    }

  async function switchN(){

        const provider = window.ethereum;
        const GoerliChainId = '0x5';
        
    if(!provider){
      
        console.log("Metamask is not installed, please install!");
    }else{
      
      const chainId = await provider.request({ method: 'eth_chainId' });
      
      if(chainId === GoerliChainId){
        
      console.log("Bravo!, you are on the correct network");
    }else{
      
    console.log("oulalal, switch to the correct network");
    try {
      
        await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: GoerliChainId}],
      });
      console.log("You have succefully switched to Binance Test network")
      
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
       console.log("This network is not available in your metamask, please add it")
       try {
          await provider.request({
            method: 'wallet_addEthereumChain',
            params: [
            { chainId: '0x5', 
              chainName:'Goerli test network',
              rpcUrls:['https://goerli.infura.io/v3/'],
              blockExplorerUrls:['https://goerli.etherscan.io'],
              nativeCurrency: {
            symbol:'GorliETH', // 2-6 characters long
        decimals: 18
          }
              
              }],
          });
        } catch (addError) {
          // handle "add" error
          console.log(addError);
        }
      }
    
    }
    }
      }
}
    
  const increment = () => {
        let val = 10;
        if(count>=10 ){

        } else{
            UseCounter(count + 1)
        }
      
    }

  const decrement = () => {
      let value = 0;
      if(value <=1 ) {
        value =1 
      }
      else{
       value = count; 
      }
      UseCounter(value -1)
    }

  async function mintNft() {
        if(connect) 
        try{
            let m = count;
        //  let amount = document.getElementById("m").value;
          let provider = new ethers.providers.Web3Provider(window.ethereum);
          let signer =  await provider.getSigner();
          let signature = await signer.signMessage ("Mint");
          let  contract = new ethers.Contract(CA,  abi, signer);
          const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
         console.log(account);
        //  const minting =   await contract.mint(count);
        //  const response = await contract.mint(count,{value:minting.mul(0.01)});
       const cost = await contract.price();
const response = await contract.mint(count,{value:cost.mul(count)});
   document.getElementById('c').innerHTML=  'Minted!!'

    } catch(error) {
        console.log(`Connect to metamask ${error}`)
    }else{
        console.log('connect to metamask')
    }
}  
async function currentSupply() {
    if(mintNft) 
    try{
    //  let amount = document.getElementById("m").value;
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      let signer =  await provider.getSigner();
      let  contract = new ethers.Contract(CA,  abi, provider);
      const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
     console.log(account);
    //  const minting =   await contract.mint(count);
    //  const response = await contract.mint(count,{value:minting.mul(0.01)});
    const amountleft = await contract.totalSupply();
    document.getElementById('p').innerHTML= amountleft;
    

} catch(error) {
    console.log(`Connect to metamask ${error}`)
}else{
    console.log('connect to metamask')
}


}

async function totalSupply() {
  if(mintNft) 
  try{
  //  let amount = document.getElementById("m").value;
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    let signer =  await provider.getSigner();
    let  contract = new ethers.Contract(CA,  abi, provider);
    const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
   console.log(account);
  //  const minting =   await contract.mint(count);
  //  const response = await contract.mint(count,{value:minting.mul(0.01)});
  const amountleft = await contract.MAX_TOKENS();
  document.getElementById('l').innerHTML= amountleft;
  

} catch(error) {
  console.log(`Connect to metamask ${error}`)
}else{
  console.log('connect to metamask')
}


}

async function TotalSupply() {
  let provider = new ethers.providers.Web3Provider(window.ethereum);
  // let signer =  await provider.getSigner();
  let  contract = new ethers.Contract(CA,  abi, provider);
  const viewdep = await contract.userBalance();

}
const style = {
fontSize: '40px',
fontFamily: 'COCOGOOSE, sans-serif',


  '@media (maxWidth: 400px)': {
    fontSize: '41px',
  },
};

  return (
    <div className='Main-Container'>
        <div className='title'>
        </div>

        <div className='main-box'>
            <div className='boxn'>
              <div className='box1'>

              </div>
              <div className='center'>
     <label className='h2'>Original Animation Studio</label>
     </div>
            </div>
      
            <div className='box2'>
                <div className='middle'>
                  <h1 style={{color:'black', justifyContent: 'center', alignItems: 'center', fontSize: '50px', lineHeight: '80px', letterSpacing: 'normal'}}> 
                   { <label  id='p' /> ? <label  id='p' /> : "--"}  /{<label  id='l' /> ? <label  id='l' /> : "--"}</h1> 
                  
                  <p>1Feather cost 0.01ETH</p> 
                  <div className='b' > <small>  
                  {walletAddress.length > 0 ? <p className='b'>{walletAddress.substring(0)}.... {walletAddress.substring(100)}</p> : ""}
                  </small></div>  <br />
               <div className='split'>
               <button> <p>  
                  {walletAddress.length > 0 ? `Connected! ` : "ConnectWallet"}
                  </p></button> 
                </div> <br />

                  <p> Connect To Goerli Testnet  Network</p>  <br /> 
                  <div id='c'>
                  </div>
                  {/* https://testnets.opensea.io/ */}
                  <small>
                    <a className='a' href='https://testnets.opensea.io/collection/mojowlekaz'>View NFt Collection on Opensea</a>
                  </small>
            
                </div>
             <div className='split1'>
             <button onClick={() => decrement()} className='button, button1'><h1 className="h1" style={{color: '#ffffff'}}>-</h1> </button>
             <p>Mint: {count}</p>
             <button id='m' onClick={() => increment()} className='button, button1'><h1 className="h1" style={{color: '#ffffff'}}>+</h1> </button> 
             </div> <br />  <br />
             <button onClick={mintNft} className='btn1'><p>Mint</p></button>
            </div>
            <div className='boxn'>
              <div className='boxxx'>
              </div>
     <div className='center'>
     <label className='h2'>First WebComic</label>
     </div>
            </div>
    </div>
                
    </div>
  )
}
