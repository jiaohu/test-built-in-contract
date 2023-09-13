
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
        
        // const result = await test.test2(input);
        // console.log(result);
        // const t = await test.estimateGas.balanceOf("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
        //         console.log(t)

        let tx = await test.estimateGas.balanceOf("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
        console.log(tx);
        // const res = await tx.wait();
        // console.log(res);

        // 0x78047bbc26a22703a1ac4ac390de4c489d65e4011ccf410301664007487ad84c
    })
})