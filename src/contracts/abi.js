const abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "_from",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "count",
				type: "uint256",
			},
		],
		name: "CountIncrement",
		type: "event",
	},
	{
		inputs: [],
		name: "count",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "increment",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];
export default abi;
