/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { CoslendComptroller, CoslendComptrollerInterface } from '../CoslendComptroller';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'contract MarketToken',
        name: 'marketToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'action',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'pauseState',
        type: 'bool',
      },
    ],
    name: 'ActionPaused',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'action',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'pauseState',
        type: 'bool',
      },
    ],
    name: 'ActionPausedGlobally',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'error',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'info',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'detail',
        type: 'uint256',
      },
    ],
    name: 'Failure',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'contract MarketToken',
        name: 'marketToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'MarketEntered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'contract MarketToken',
        name: 'marketToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'MarketExited',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'contract MarketToken',
        name: 'marketToken',
        type: 'address',
      },
    ],
    name: 'MarketListed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract MarketToken',
        name: 'marketToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newBorrowCap',
        type: 'uint256',
      },
    ],
    name: 'NewBorrowCap',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldCloseFactorMantissa',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newCloseFactorMantissa',
        type: 'uint256',
      },
    ],
    name: 'NewCloseFactor',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'contract MarketToken',
        name: 'marketToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldCollateralFactorMantissa',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newCollateralFactorMantissa',
        type: 'uint256',
      },
    ],
    name: 'NewCollateralFactor',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'contract IDistribution',
        name: 'oldDistribution',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'contract IDistribution',
        name: 'distribution',
        type: 'address',
      },
    ],
    name: 'NewDistribution',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldLiquidationIncentiveMantissa',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newLiquidationIncentiveMantissa',
        type: 'uint256',
      },
    ],
    name: 'NewLiquidationIncentive',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'oldMaintainer',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'maintainer',
        type: 'address',
      },
    ],
    name: 'NewMaintainer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldMaxAssets',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newMaxAssets',
        type: 'uint256',
      },
    ],
    name: 'NewMaxAssets',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract MarketToken',
        name: 'marketToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newMintCap',
        type: 'uint256',
      },
    ],
    name: 'NewMintCap',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'contract IPriceOracle',
        name: 'oldPriceOracle',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'contract IPriceOracle',
        name: 'newPriceOracle',
        type: 'address',
      },
    ],
    name: 'NewPriceOracle',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'contract MarketToken',
        name: 'marketToken',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'state',
        type: 'bool',
      },
    ],
    name: '_setBorrowPaused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newCloseFactorMantissa',
        type: 'uint256',
      },
    ],
    name: '_setCloseFactor',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract MarketToken',
        name: 'marketToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'newCollateralFactorMantissa',
        type: 'uint256',
      },
    ],
    name: '_setCollateralFactor',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'state',
        type: 'bool',
      },
    ],
    name: '_setDistributeRewardPaused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IDistribution',
        name: 'newDistribution',
        type: 'address',
      },
    ],
    name: '_setDistribution',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_liquidateWhiteAddresses',
        type: 'address[]',
      },
    ],
    name: '_setLiquidateWhiteAddresses',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newLiquidationIncentiveMantissa',
        type: 'uint256',
      },
    ],
    name: '_setLiquidationIncentive',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newMaintainer',
        type: 'address',
      },
    ],
    name: '_setMaintainer',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract MarketToken[]',
        name: 'marketTokens',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'newBorrowCaps',
        type: 'uint256[]',
      },
    ],
    name: '_setMarketBorrowCaps',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract MarketToken[]',
        name: 'marketTokens',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'newMintCaps',
        type: 'uint256[]',
      },
    ],
    name: '_setMarketMintCaps',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newMaxAssets',
        type: 'uint256',
      },
    ],
    name: '_setMaxAssets',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract MarketToken',
        name: 'marketToken',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'state',
        type: 'bool',
      },
    ],
    name: '_setMintPaused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IPriceOracle',
        name: 'newOracle',
        type: 'address',
      },
    ],
    name: '_setPriceOracle',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract MarketToken',
        name: 'marketToken',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'state',
        type: 'bool',
      },
    ],
    name: '_setRedeemPaused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract MarketToken',
        name: 'marketToken',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'state',
        type: 'bool',
      },
    ],
    name: '_setRepayPaused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'state',
        type: 'bool',
      },
    ],
    name: '_setSeizePaused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'state',
        type: 'bool',
      },
    ],
    name: '_setTransferPaused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract MarketToken',
        name: 'marketToken',
        type: 'address',
      },
    ],
    name: '_supportMarket',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'accountAssets',
    outputs: [
      {
        internalType: 'contract MarketToken',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'allMarkets',
    outputs: [
      {
        internalType: 'contract MarketToken',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'marketToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'borrower',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'borrowAmount',
        type: 'uint256',
      },
    ],
    name: 'borrowAllowed',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'borrowCaps',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'borrowPaused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'marketToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'borrower',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'borrowAmount',
        type: 'uint256',
      },
    ],
    name: 'borrowVerify',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'contract MarketToken',
        name: 'marketToken',
        type: 'address',
      },
    ],
    name: 'checkMembership',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'closeFactorMantissa',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'distributeRewardPaused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'distribution',
    outputs: [
      {
        internalType: 'contract IDistribution',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'marketTokens',
        type: 'address[]',
      },
    ],
    name: 'enterMarkets',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'marketTokenAddress',
        type: 'address',
      },
    ],
    name: 'exitMarket',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'getAccountLiquidity',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAllMarkets',
    outputs: [
      {
        internalType: 'contract MarketToken[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'getAssetsIn',
    outputs: [
      {
        internalType: 'contract MarketToken[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'marketTokenModify',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'redeemTokens',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'borrowAmount',
        type: 'uint256',
      },
    ],
    name: 'getHypotheticalAccountLiquidity',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'marketToken',
        type: 'address',
      },
    ],
    name: 'isMarketListed',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'marketTokenBorrowed',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'marketTokenCollateral',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'liquidator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'borrower',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'repayAmount',
        type: 'uint256',
      },
    ],
    name: 'liquidateBorrowAllowed',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'marketTokenBorrowed',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'marketTokenCollateral',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'liquidator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'borrower',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'repayAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'seizeTokens',
        type: 'uint256',
      },
    ],
    name: 'liquidateBorrowVerify',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'marketTokenBorrowed',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'marketTokenCollateral',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'actualRepayAmount',
        type: 'uint256',
      },
    ],
    name: 'liquidateCalculateSeizeTokens',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'liquidateWhiteAddresses',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'liquidationIncentiveMantissa',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maintainer',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'marketTokenBorrowPaused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'marketTokenMintPaused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'marketTokenRedeemPaused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'marketTokenRepayPaused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'markets',
    outputs: [
      {
        internalType: 'bool',
        name: 'isListed',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: 'collateralFactorMantissa',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxAssets',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'marketToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'minter',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'mintAmount',
        type: 'uint256',
      },
    ],
    name: 'mintAllowed',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'mintCaps',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'mintPaused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'marketToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'minter',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'mintAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'mintTokens',
        type: 'uint256',
      },
    ],
    name: 'mintVerify',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'oracle',
    outputs: [
      {
        internalType: 'contract IPriceOracle',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'marketToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'redeemer',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'redeemTokens',
        type: 'uint256',
      },
    ],
    name: 'redeemAllowed',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'redeemPaused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'marketToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'redeemer',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'redeemAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'redeemTokens',
        type: 'uint256',
      },
    ],
    name: 'redeemVerify',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'marketToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'payer',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'borrower',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'repayAmount',
        type: 'uint256',
      },
    ],
    name: 'repayBorrowAllowed',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'marketToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'payer',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'borrower',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'repayAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'borrowerIndex',
        type: 'uint256',
      },
    ],
    name: 'repayBorrowVerify',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'repayPaused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'marketTokenCollateral',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'marketTokenBorrowed',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'liquidator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'borrower',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'seizeTokens',
        type: 'uint256',
      },
    ],
    name: 'seizeAllowed',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'seizePaused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'marketTokenCollateral',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'marketTokenBorrowed',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'liquidator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'borrower',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'seizeTokens',
        type: 'uint256',
      },
    ],
    name: 'seizeVerify',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'marketToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'src',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'dst',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'transferTokens',
        type: 'uint256',
      },
    ],
    name: 'transferAllowed',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'transferPaused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'marketToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'src',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'dst',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'transferTokens',
        type: 'uint256',
      },
    ],
    name: 'transferVerify',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export class CoslendComptroller__factory {
  static readonly abi = _abi;
  static createInterface(): CoslendComptrollerInterface {
    return new utils.Interface(_abi) as CoslendComptrollerInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): CoslendComptroller {
    return new Contract(address, _abi, signerOrProvider) as CoslendComptroller;
  }
}