import Web3 from "web3";
import Web3Modal from "web3modal";
import Lucky from "../ABIs/Lucky.json";
import LuckyPresale from "../ABIs/LuckyPresale.json";

let myWeb3;

async function connectToWeb3(){
    // const web3 = new Web3("https://bsc-dataseed1.defibit.io/");
    // const luckyContract = new web3.eth.Contract(Lucky.abi, '0xC3b759bc189BC69fFAd7c5Ab5A522666bC051264');
    // let supply = await luckyContract.methods.totalSupply().call();
    // console.log(supply);
}

async function getLuckyDrawAmount(){
    // const web3 = new Web3("https://bsc-dataseed1.defibit.io/");
    // const luckyContract = new web3.eth.Contract(Lucky.abi, '0xC3b759bc189BC69fFAd7c5Ab5A522666bC051264');
    // let luckyDrawAmount = await luckyContract.methods.luckyDrawAmount().call();
    // return luckyDrawAmount;
}

async function getJackpotAmount(){
    // const web3 = new Web3("https://bsc-dataseed1.defibit.io/");
    // const luckyContract = new web3.eth.Contract(Lucky.abi, '0xC3b759bc189BC69fFAd7c5Ab5A522666bC051264');
    // let jackpotAmount = await luckyContract.methods.jackpotAmount().call();
    // return jackpotAmount;
}

async function getAmountSent() {
    // const web3 = new Web3("https://bsc-dataseed1.defibit.io/");
    // const luckyContract = new web3.eth.Contract(Lucky.abi, '0xC3b759bc189BC69fFAd7c5Ab5A522666bC051264');
    // let totalWinnings = await luckyContract.methods.totalBUSDGiven().call();
    // return totalWinnings;
}

async function getWinners() {
    // const web3 = new Web3("https://bsc-dataseed1.defibit.io/");
    // const luckyContract = new web3.eth.Contract(Lucky.abi, '0xC3b759bc189BC69fFAd7c5Ab5A522666bC051264');
    // let totalWinners = await luckyContract.methods.totalWinners().call();
    // let winnerCount = 0
    // let winnerList = [];
    // if (totalWinners == 0) {
    //     return winnerList;
    // }

    // for (let i = totalWinners; i > 0; i--) {
    //     if (winnerCount == 5) {
    //         return;
    //     }
    //     let winner = await luckyContract.methods._winningUsers(i).call();
    //     let amount = await luckyContract.methods._winningAmounts(i).call();
    //     winnerList.push({title: winner, value: amount});
    //     winnerCount = winnerCount + 1;
    // }

    // return winnerList;
}

async function connectWallet() {
    const providerOptions = {
        /* See Provider Options Section */
    };
        
    const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions // required
    });
    
    const provider = await web3Modal.connect();
    
    const web3 = new Web3(provider);

    myWeb3 = web3;
    console.log(myWeb3);
    console.log(await myWeb3.eth.getAccounts());
    return await myWeb3.eth.getAccounts();
}

async function getUserBalance() {
    // if (myWeb3) {
    //     let userAddress = await myWeb3.eth.getAccounts();
    //     const luckyContract = new myWeb3.eth.Contract(Lucky.abi, '0xC3b759bc189BC69fFAd7c5Ab5A522666bC051264');
    //     let tokenBalance = await luckyContract.methods.balanceOf(userAddress[0]).call();
    //     let wei_amount = myWeb3.utils.toWei(tokenBalance.toString(),'gwei');
    //     return myWeb3.utils.fromWei(wei_amount.toString());
    // } else {
    //     return 0;
    // }
}

async function getUserTickets() {
    // if (myWeb3) {
    //     let userAddress = await myWeb3.eth.getAccounts();
    //     const luckyContract = new myWeb3.eth.Contract(Lucky.abi, '0xC3b759bc189BC69fFAd7c5Ab5A522666bC051264');
    //     let userTickets = await luckyContract.methods.userTickets(userAddress[0]).call();
    //     return userTickets;
    // } else {
    //     return 0;
    // }
}

async function getMoveablePresaleAmount() {
    // if (myWeb3) {
    //     let userAddress = await myWeb3.eth.getAccounts();
    //     const luckyContract = new myWeb3.eth.Contract(Lucky.abi, '0xC3b759bc189BC69fFAd7c5Ab5A522666bC051264');
    //     let movableAmount = await luckyContract.methods.getAmountMovable(userAddress[0]).call();
    //     let wei_amount = myWeb3.utils.toWei(movableAmount.toString(),'gwei');
    //     return myWeb3.utils.fromWei(wei_amount.toString());
    // } else {
    //     return 0
    // }
}

const BUSD = '0xe9e7cea3dedca5984780bafc599bd69add087d56';
const presaleContract = '0x5346F36C8802A241f3a31FD6c24c6Fb934dD5F27';
async function getBUSDApprovalBalance() {
    if (myWeb3) {
        let userAddress = await myWeb3.eth.getAccounts();
        let contract = new myWeb3.eth.Contract(Lucky.abi, BUSD);
        let balance = await contract.methods.allowance(userAddress[0], presaleContract).call();
        return balance;
    }
}

async function isWhitelisted() {
    if (myWeb3) {
        let userAddress = await myWeb3.eth.getAccounts();
        let contract = new myWeb3.eth.Contract(LuckyPresale.abi, presaleContract);
        let isWhitelisted = await contract.methods.approvedWallets(userAddress[0]).call();
        return isWhitelisted[0];
    }
}

async function approveBUSD() {
    if (myWeb3) {
        let userAddress = await myWeb3.eth.getAccounts();
        let contract = new myWeb3.eth.Contract(Lucky.abi, BUSD);
        let balance = await contract.methods.approve(userAddress[0], myWeb3.utils.toWei("250")).send({
            from: userAddress[0]
        });
        return;
    }
}

async function depositBUSD() {
    if (myWeb3) {
        let userAddress = await myWeb3.eth.getAccounts();
        let contract = new myWeb3.eth.Contract(LuckyPresale.abi, presaleContract);
        let balance = await contract.methods.addPresaleBUSD().send({
            from: userAddress[0]
        });
        console.log(balance);
        return;
    }

}

export {
    connectToWeb3,
    getLuckyDrawAmount,
    getJackpotAmount,
    getAmountSent,
    getWinners,
    connectWallet,
    getUserBalance,
    getUserTickets,
    getMoveablePresaleAmount,
    getBUSDApprovalBalance,
    approveBUSD,
    depositBUSD,
    isWhitelisted
}