const sha256 = require('sha256');
const createGenesisBlock = () => new Block(0, Date.now(), 'Genesis Block', '0'); //Create a new block, hand it a 0 for the index, the current time, a string stating that it's the Genesis Block, and a previous hash of 0;
const nextBlock = (lastBlock, data) => new Block(lastBlock.index + 1, Date.now(), data, lastBlock.thisHash); //Take the last block, and the new block's data as parameters, create a new block and set the index of the new block to whatever the previous block's index was and add 1, grab the current time, and then grab the previous block's hash and sets it as 'prevHash' on the new block;
const lengthToCreate = 20; //Create a new blockchain at a specified length;
const createBlockchain = num => {
    const blockchain = [createGenesisBlock()]; //Create a new blockchain that'll store in an array:

    let previousBlock = blockchain[0]; //Place the genesis block as the first element in the array;

    for (let i = 1; i < num; i += 1) {
        const blockToAdd = nextBlock(previousBlock, `This is block #${i}`); //Create each block one at a time, handing it the data it requires from the previous block;

        blockchain.push(blockToAdd); //Then place that new block into the array;
        previousBlock = blockToAdd;
    }

    console.log(blockchain);
};

class Block {
    constructor(index, timestamp, data, prevHash) { //Each block on the blockchain will contain 5 pieces of data:
        this.index = index; //The block's index;
        this.timestamp = timestamp; //The precise time it was created;
        this.data = data; //Some arbitrary data (for bitcoin, this data would be the addresses of the sender and receiver of bitcoin and the amount of the transaction);
        this.prevHash = prevHash; //The hash value of the block preceding it;
        this.thisHash = sha256(
            this.index + this.timestamp + this.data + this.prevHash
        ); //A hash of itself;
    }
}

createBlockchain(lengthToCreate);