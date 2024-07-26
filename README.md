# Candle Auction Smart Contract

This project implements a smart contract for a candle auction using Solidity and Hardhat.

## Overview

A candle auction is a variation of an English auction in which the end of the auction is signaled by the expiration of a candle. When the candle burns out, the highest bid wins the auction. This implementation uses a time-based mechanism to simulate the candle burning out.

## Features

- **Bidding**: Participants can place bids.
- **Auction Timing**: The auction ends when the simulated candle (timer) expires.
- **Withdrawal**: Non-winning bidders can withdraw their bids.
- **End Auction**: The highest bidder wins the auction and receives the funds.

## Setup

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/candle-auction.git
    cd candle-auction

    ```

2.  **install dependencies**
    npm install

3.  **deploy the contract**
    npx hardhat run scripts/deploy.js

4.  **compile**
    npx hardhat compile

5.  **interact with deployed contract using console**
    npx hardhat console

    eg. const CandleAuction = await ethers.getContractFactory("CandleAuction");
    const candleAuction = await CandleAuction.attach("0xyourcontractaddress");
    // Place a bid
    await candleAuction.bid({ value: ethers.utils.parseEther("1.0") });
    // Withdraw a bid
    await candleAuction.withdraw();
