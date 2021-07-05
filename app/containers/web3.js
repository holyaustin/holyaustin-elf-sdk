import {
  Zora,
  constructMediaData,
  sha256FromBuffer,
  generateMetadata,
  constructBidShares,
} from "@zoralabs/zdk"; // Zora provider
  import axios from "axios"; // axios requests
  import Web3Modal from "web3modal"; // Web3Modal
  import { providers } from "ethers"; // Ethers
  import { ethers } from "ethers";
  import { useState, useEffect } from "react"; // State management
  import { createContainer } from "unstated-next"; // Unstated-next containerization
  import WalletConnectProvider from "@walletconnect/web3-provider"; // WalletConnectProvider (Web3Modal)
  
  // Web3Modal provider options --set for RINKEBY
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        // Inject Infura
        infuraId: process.env.INFURA_ID,
      },
    },
  };

  function useWeb3() {
    const [zora, setZora] = useState(null); //Zora provider
    const [modal, setModal] = useState(null); //Web3Modal
    const [address, setAddress] = useState(null); //ETH address
    const [provider, setProvider]= useState(null);

    /**
     * Setup Web3Modal on page load (requires window)
     */
    const setupWeb3Modal = () => {
      // Creaste new web3Modal
      const web3Modal = new Web3Modal({
        //network: "mainnet",
        network: "rinkeby",
        cacheProvider: true,
        providerOptions: providerOptions,
      });
  
      // Set web3Modal
      setModal(web3Modal);
    };
  


    /**
     * Authenticate and store necessary items in global state
     */
    const authenticate = async () => {
      // Initiate web3Modal
      const web3Provider = await modal.connect();
      await web3Provider.enable();
  
      // Generate ethers provider
      const provider = new providers.Web3Provider(web3Provider);
      setProvider(provider);

      // Collect address
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAddress(address);

      // Generate Zora provider
      const zora = new Zora(signer, 4);
      setZora(zora);

    };

    /**
     * Converts File to an ArrayBuffer for hashing preperation
     * @param {File} file uploaded file
     * @returns {ArrayBuffer} from file
     */
     const getFileBuffer = async (file) => {
      return new Promise((res, rej) => {
        // create file reader
        let reader = new FileReader();
  
        // register event listeners
        reader.addEventListener("loadend", (e) => res(e.target.result));
        reader.addEventListener("error", rej);
  
        // read file
        reader.readAsArrayBuffer(file);
      });
    };


    /**
     * Mints media 
     * @param {File} file media to mint
     * @param {String} name of media
     * @param {String} description of media
     * @param {Number} fee to share with previous owner
     */
     const mintMedia = async (file, name, description, fee) => {
      // Generate metadataJSON
      const metadataJSON = generateMetadata("zora-20210101", {
        description: description ? description : "",
        mimeType: file.type,
        name: name,
        version: "zora-20210101",
      });
  
      // Generate media buffer
      const buffer = await getFileBuffer(file);
  
      // Generate content hashes
      const contentHash = sha256FromBuffer(Buffer.from(buffer));
      const metadataHash = sha256FromBuffer(Buffer.from(metadataJSON));
  
      // Upload files to fleek
      let formData = new FormData();
      formData.append("upload", file);
      formData.append("name", name);
      formData.append("metadata", metadataJSON);
      
      // Post upload endpoint
      console.log('UPLOAD FILE...')
      const upload = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log('UPLOAD FILE completed........')
      // Collect fileUrl and metadataUrl from Fleek
      const { fileUrl, metadataUrl } = upload.data;
      console.log('web3.js UPLOAD FILE completed........', fileUrl, metadataUrl )

      // Construct mediaData object
      const mediaData = constructMediaData(
        fileUrl,
        metadataUrl,
        contentHash,
        metadataHash
      );

      const bidShares = constructBidShares(
        0, // Creator share
        100 - parseFloat(fee), // Owner share
        parseFloat(fee) // Previous owner share
      );

      // Make transaction
      console.log('CALL ZORA MINT...')
      const tx = await zora.mint(mediaData, bidShares);
      await tx.wait(1); // Wait 1 confirmation and throw user to next screen
    };


    // On load events
    useEffect(setupWeb3Modal, []);
  
    return {
      address,
      authenticate,
      mintMedia
    };
    
  }
  
  // Create unstate-next container
  const web3 = createContainer(useWeb3);
  export default web3;
  