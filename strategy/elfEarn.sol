// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

// //import "../balancer-core-v2/vault/interfaces/IVault.sol";
// //import "../balancer-core-v2/lib/openzeppelin/IERC20.sol";
// import "../interfaces/IERC20.sol";
// import "./interfaces/ITranche.sol";

import "../balancer-core-v2/vault/interfaces/IVault.sol";
import "../ytc/interfaces/ITranche.sol";
import "../balancer-core-v2/lib/openzeppelin/IERC20.sol";

contract elfEarn {
  //IERC20 public immutable inputToken;
 // IERC20 public immutable outputToken;

 address public constant PTTOKEN = 0x5690332C2f0c12F00c147cE350d95B19a0C24f14;

  //IVault private immutable iVault;
  address public constant BALANCER_VAULT = 0xBA12222222228d8Ba445958a75a0704d566BF2C8;

  address public constant USDC = 0x78dEca24CBa286C0f8d56370f5406B48cFCE2f86;
  address public constant TRANCHE = 0x80272c960b862B4d6542CDB7338Ad1f727E0D18d;

  ITranche public iTranche;

  constructor(
      // IERC20 _inputToken,
      // IERC20 _outputToken,
      // IVault _iVault
       ) 
  {
    //iVault = _iVault;
   // inputToken = _inputToken;
    //outputToken = _outputToken;
  }

  //function doBatchSwap(uint inputAmount) external payable returns (int256[] memory)
  //{
    //enum SwapKind { GIVEN_IN, GIVEN_OUT }
  //  enum SwapKind { inputAmount, 0 }
  //  SwapKind kind;

    //iVault(BALANCER_VAULT).batchSwap(
    //    kind,
    //    BatchSwapStep[] memory swaps,
    //    IAsset[] memory assets,
    //    FundManagement memory funds,
    //    int256[] memory limits,
    //    uint256 deadline
    //);
  //}

  function alive() external pure returns (string memory) {
    return "I am ALIVE!";
  }

  //Returns PT and YT balance for the account
  // function getPTBalance(address myAccount) external view returns (uint256){
  //       //return IERC20(PTTOKEN).balanceOf(address(myAccount));
  //       return IERC20(PTTOKEN).balanceOf(myAccount);
  // }

  function getUSDCBalance() external view returns (uint256){
        return IERC20(USDC).balanceOf(msg.sender);
  }

  function getPTBalance() external view returns (uint256){
        return IERC20(TRANCHE).balanceOf(msg.sender);
  }

  function getYTBalance() external view returns (uint256) {
          return ITranche(TRANCHE).interestSupply();
  }

  function getYield() external view returns (uint256) {
        ITranche tranche = ITranche(TRANCHE);
        address baseTokenAddress = address(tranche.underlying());
        uint256 initialBalance = IERC20(baseTokenAddress).balanceOf(msg.sender);
        //address(uint160(addr)) makes it of type address payable.
        address payable wrappedPositionAddress = address(uint160(address(tranche.position())));
        
        return initialBalance;
  }

}

  
