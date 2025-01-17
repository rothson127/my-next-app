const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

const { ethers } = require("hardhat");

describe("Token contract", function () {
  async function deployRtxTokenFixture() {
    const [owner, addr1, addr2] = await ethers.getSigners();

    const myRtxToken = await ethers.deployContract("MyRtxToken");

    // Fixtures can return anything you consider useful for your tests
    return { myRtxToken, owner, addr1, addr2 };
  }

  async function deployUsdtTokenFixture() {
    const [owner, addr1, addr2] = await ethers.getSigners();

    const myRtxUsdtToken = await ethers.deployContract("MyUsdtToken");

    // Fixtures can return anything you consider useful for your tests
    return { myRtxUsdtToken, owner, addr1, addr2 };
  }

  // it("Should assign the total supply of tokens to the owner", async function () {
  //   const { myRtxToken, ownerRtx } = await loadFixture(deployRtxTokenFixture);
  //   const { myUsdtToken, ownerUsdt } = await loadFixture(deployUsdtTokenFixture);

  //   // const ownerBalance = await hardhatToken.balanceOf(owner.address);
  //   // expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  // });

  it("Should transfer tokens between accounts", async function () {

    const { myRtxToken, ownerRtx } = await loadFixture(deployRtxTokenFixture);
    const { myUsdtToken, ownerUsdt } = await loadFixture(deployUsdtTokenFixture);
    console.log("owner RTX : " + ownerRtxBalance + " " + ownerRtx.address);
    console.log("addr1 USDT : " + addr1UsdtBalance + " " + ownerUsdt.address);

    const presaleContract = await ethers.deployContract("MyPresale", [myRtxToken, myUsdtToken, 2]);

    const ownerRtxBalance = await myRtxToken.balanceOf(ownerRtx.address);
    const addr1UsdtBalance = await myUsdtToken.balanceOf(ownerUsdt.address);

    presaleContract.buyTokens({value : 2});



    console.log("owner RTX : " + ownerRtxBalance + " " + ownerRtx.address);
    console.log("addr1 USDT : " + addr1UsdtBalance + " " + ownerUsdt.address);
    // const { hardhatToken, owner, addr1, addr2 } = await loadFixture(
    //   deployTokenFixture
    // );

    // // Transfer 50 tokens from owner to addr1
    // await expect(
    //   hardhatToken.transfer(addr1.address, 50)
    // ).to.changeTokenBalances(hardhatToken, [owner, addr1], [-50, 50]);

    // // Transfer 50 tokens from addr1 to addr2
    // // We use .connect(signer) to send a transaction from another account
    // await expect(
    //   hardhatToken.connect(addr1).transfer(addr2.address, 50)
    // ).to.changeTokenBalances(hardhatToken, [addr1, addr2], [-50, 50]);
  });
});