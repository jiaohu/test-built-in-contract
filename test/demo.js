
const { ethers } = require("hardhat");

const { attachContract } = require("../scripts/address.js")


describe("test", function () {
    it("first", async () => {
        const hello = ethers.getBytes("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");
        const test = await attachContract("Test");
        const encoder = ethers.AbiCoder.defaultAbiCoder();
        const input = encoder.encode(
            ["bytes"],
            [hello]
        );
        let tx = await test.test1(input);
        console.log(tx);
        // 0x78047bbc26a22703a1ac4ac390de4c489d65e4011ccf410301664007487ad84c
    })

    it("second", async () => {
        const hello = ethers.getBytes("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");
        const test = await attachContract("Test");
        const encoder = ethers.AbiCoder.defaultAbiCoder();
        const input = encoder.encode(
            ["bytes"],
            [hello]
        );
        
        let tx = await test.test2.staticCall(input)
        console.log(tx);
        
        // 0x78047bbc26a22703a1ac4ac390de4c489d65e4011ccf410301664007487ad84c
    })
})