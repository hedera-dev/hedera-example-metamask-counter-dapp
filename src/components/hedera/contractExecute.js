import abi from "../../contracts/abi.js";
import axios from "axios";
import { ethers } from "ethers";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

async function contractExecuteFcn(walletData, contractAddress) {
	console.log(`\n=======================================`);
	console.log(`- Executing the smart contract...🟠`);

	// ETHERS PROVIDER AND SIGNER
	const provider = walletData[1];
	const signer = provider.getSigner();

	// EXECUTE THE SMART CONTRACT
	let txHash;
	let finalCount;
	try {
		// CHECK SMART CONTRACT STATE
		const initialCount = await getCountState();
		console.log(`- Initial count: ${initialCount}`);

		// EXECUTE CONTRACT FUNCTION
		const myContract = new ethers.Contract(contractAddress, abi, signer);
		const incrementTx = await myContract.increment();
		const incrementRx = await incrementTx.wait();
		txHash = incrementRx.transactionHash;

		// CHECK SMART CONTRACT STATE AGAIN
		await delay(5000); // DELAY TO ALLOW MIRROR NODES TO UPDATE BEFORE QUERYING
		finalCount = await getCountState();
		console.log(`- Final count: ${finalCount}`);
		console.log(`- Contract executed. Transaction hash: \n${txHash} ✅`);
	} catch (executeError) {
		console.log(`- ${executeError.message.toString()}`);
	}

	return [txHash, finalCount];

	async function getCountState() {
		let countDec;
		const countInfo = await axios.get(`https://${walletData[2]}.mirrornode.hedera.com/api/v1/contracts/${contractAddress}/state`);

		if (countInfo.data.state[0] !== undefined) {
			const countHex = countInfo.data.state[0].value;
			countDec = parseInt(countHex, 16);
		} else {
			countDec = 0;
		}
		return countDec;
	}
}

export default contractExecuteFcn;
