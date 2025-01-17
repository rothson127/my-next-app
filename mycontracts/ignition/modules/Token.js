const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TokenModule = buildModule("TokenModule", (m) => {
  const token = m.contract("MyRTXPresale", ['0x8d23dE206D5d54AfE16c1D23E99d7c4C762522Aa', '0xF42d0e91C05F432d0720E337BFC453B2E9F54c11', 5]);
  // const token = m.contract("MyUsdtToken");

  return { token };
});

module.exports = TokenModule;