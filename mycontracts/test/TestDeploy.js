const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyRtxToken contract", function () {
  it("buy rtx token by usdt", async function () {
    const [owner, addr1] = await ethers.getSigners();
    const rtxToken = await ethers.deployContract("MyRtxToken");
    const usdtToken = await ethers.deployContract("MyUsdtToken");

    const ownerRtxBalance = await rtxToken.balanceOf(owner.address);
    const addr1UsdtBalance = await usdtToken.balanceOf(addr1.address);
    console.log("owner RTX : " + ownerRtxBalance + " " + owner.address);
    console.log("addr1 USDT : " + addr1UsdtBalance + " " + addr1.address);

    const presaleContract = await ethers.deployContract("MyPresale", [rtxToken, usdtToken, 2]);

    presaleContract.buyTokens();

    console.log("owner RTX : " + ownerRtxBalance + " " + owner.address);
    console.log("addr1 USDT : " + addr1UsdtBalance + " " + addr1.address);
    //expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});