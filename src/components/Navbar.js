import React, {useState} from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from './images/Logo.png';
import { ethers } from "ethers";


import coinbaseWalletModule from "@web3-onboard/coinbase";
import walletConnectModule from "@web3-onboard/walletconnect";
import injectedModule from "@web3-onboard/injected-wallets";
import Onboard from "@web3-onboard/core";
import ledgerModule from '@web3-onboard/ledger'



//const MAINNET_RPC_URL = `https://mainnet.infura.io/v3/e5f774b6a7634b299af8151929d668c2`;
const MAINNET_RPC_URL = `https://ethereum-mainnet--rpc.datahub.figment.io/apikey/a0ca8dabfea145062d347b295a502433`;


// const ROPSTEN_RPC_URL = `https://ropsten.infura.io/v3/e5f774b6a7634b299af8151929d668c2`;
// const RINKEBY_RPC_URL = `https://rinkeby.infura.io/v3/e5f774b6a7634b299af8151929d668c2`;
const RINKEBY_RPC_URL = `https://ethereum-rinkeby--rpc.datahub.figment.io/apikey/a0ca8dabfea145062d347b295a502433`;

const coinbaseWalletSdk = coinbaseWalletModule(); //Coinbase
const walletConnect = walletConnectModule(); //WalletConnect
const injected = injectedModule(); // Metamask
const ledger = ledgerModule();

const modules = [coinbaseWalletSdk, walletConnect, injected, ledger];

const onboard = Onboard({
  wallets: modules, // created in previous step
  chains: [
    {
      id: "0x1", // chain ID must be in hexadecimel
      token: "ETH",
      namespace: "evm",
      label: "Ethereum Mainnet",
      rpcUrl: MAINNET_RPC_URL
    },
    // {
    //   id: "0x3",
    //   token: "tROP",
    //   namespace: "evm",
    //   label: "Ethereum Ropsten Testnet",
    //   rpcUrl: ROPSTEN_RPC_URL
    // },
    {
      id: "0x4",
      token: "rETH",
      namespace: "evm",
      label: "Ethereum Rinkeby Testnet",
      rpcUrl: RINKEBY_RPC_URL
    },
    {
      id: '0x89',
      token: 'MATIC',
      label: 'Matic(Polygon) Mainnet',
      rpcUrl: 'https://matic-mainnet.chainstacklabs.com'
    },
    {
      id: '0x13881',
      token: 'MAT',
      label: 'Matic(Polygon) Mumbai Testnet',
      rpcUrl: 'https://matic-mumbai.chainstacklabs.com'
    },
    {
      id: '0x4E454152',
      token: 'ETH',
      label: 'Aurora(Near) Mainnet',
      rpcUrl: 'https://mainnet.aurora.dev	'
    },
    {
      id: '0x4E454153',
      token: 'ETH',
      label: 'Aurora(Near) Testnet',
      rpcUrl: 'https://testnet.aurora.dev/'
    },
    {
      id: '0xfa',
      token: 'FTM',
      label: 'Fantom Mainnet',
      rpcUrl: 'https://rpc.ftm.tools/'
    }
  ],
  appMetadata: {
    name: "Activate",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    description: "Fractionalized Real Estate",
    recommendedInjectedWallets: [
      { name: "Coinbase", url: "https://wallet.coinbase.com/" },
      { name: "MetaMask", url: "https://metamask.io" }
    ]
  }
});

const truncateAddress = (address) => {
  if (!address) return "No Account";
  const match = address.match(
    /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

const toHex = (num) => {
  const val = Number(num);
  return "0x" + val.toString(16);
};

function Navbar() {
  const [_, setProvider] = useState();
  const [account, setAccount] = useState();
  const [error, setError] = useState("");
  const [chainId, setChainId] = useState();
  const [network, setNetwork] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const connectWallet = async () => {
    try {
      const wallets = await onboard.connectWallet();
      setIsLoading(true);
      const { accounts, chains, provider } = wallets[0];
      setAccount(accounts[0].address);
      setChainId(chains[0].id);
      setProvider(provider);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  const switchNetwork = async () => {
    await onboard.setChain({ chainId: toHex(network) });
  };

  const handleNetwork = (e) => {
    const id = e.target.value;
    setNetwork(Number(id));
  };

  const disconnect = async () => {
    const [primaryWallet] = await onboard.state.get().wallets;
    if (!primaryWallet) return;
    await onboard.disconnectWallet({ label: primaryWallet.label });
    refreshState();
  };

  const refreshState = () => {
    setAccount("");
    setChainId("");
    setProvider();
  };

    // const showButton = () => {
    //   if (window.innerWidth <= 960) {
    //     setButton(false);
    //   } else {
    //     setButton(true);
    //   }
    // };


    // useEffect(() => {
    //   showButton();
    // }, []);
  
    // window.addEventListener('resize', showButton);


  return (
    <nav className="navbar">
        <div className="navbar-container">
          <div className='navbar__wrapper'>
                <ul className='navbar__nav'>
                <div className="navbar-menu-logo">
                     <img className="navbar-logo" src={logo}></img> 
                     <div >Earth Saviours</div>
                </div>
                <div className="navbar-menu-links">
                <Link to='/HOME' className="navbar-menu" >
                      About
                </Link>
                <Link to='/dashboard' className="navbar-menu">
                My Dashboard
                </Link>
                
                               

                <div>
                  <button onClick={connectWallet}>Connect Wallet</button>  
                  {/* <div>Connection Status: ${!!account}</div>
                  <div>Wallet Address: ${account}</div>
                  <div>Network Chain ID: ${chainId}</div> */}
                </div>
                </div>
                </ul>
                

          
        </div>


        </div>

    </nav>
    
  
  )
}

export default Navbar