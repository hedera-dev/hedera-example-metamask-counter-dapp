# [Click Here to Read the Full Tutorial](https://hedera.com/blog/how-to-create-a-smart-contract-app-on-hedera-using-solidity-react-js-metamask-and-ethers-js-a-simple-counter)

# Intro
In this step-by-step tutorial, you will create a simple counter dApp on the Hedera network using Solidity, React JS, MetaMask, and Ethers JS. The goal with this example is to help you understand the fundamentals of dApp development, making it easier for you to create more complex dApps in the future.

# Tools You Will Use
- React JS ([Documentation](https://react.dev/))
- MetaMask ([Documentation](https://docs.metamask.io/wallet/))
- Ethers JS ([Documentation](https://docs.ethers.org/v6/))
- Solidity ([Documentation](https://docs.soliditylang.org/en/v0.8.19/))
- Hedera JSON-RPC Relay ([Hashio](https://swirldslabs.com/hashio/))
- Mirror node REST API ([Learn More](https://hedera.com/blog/how-to-look-up-transaction-history-on-hedera-using-mirror-nodes-back-to-the-basics))
- Mirror node explorer ([HashScan](https://hashscan.io/testnet))
- Axios ([npm package](https://www.npmjs.com/package/axios))

# Run this dApp using GitPod (Recommended)
[Click here to set up GitPod environment](https://gitpod.io#https://github.com/ed-marquez/hedera-example-metamask-counter-dapp).

# Run this dApp locally
## Clone the Repo
To clone the repository, open your terminal and navigate to the directory where you want to place the project. Then, run the following command:
### `git clone https://github.com/ed-marquez/hedera-example-metamask-counter-dapp.git`

## Navigate to the Directory
Once the cloning process is complete, navigate to the project folder using:
### `cd hedera-example-metamask-counter-dapp`

## Install Project Dependencies and Start the Application
Install all project dependencies. Dependencies are listed in the package.json file, so you can just use:
### `npm install` and `npm start`

# Application Architecture at a High Level
![image](https://user-images.githubusercontent.com/72571340/236001445-55ef5ee1-6370-463c-bb18-e78f6ff66d3a.png)
