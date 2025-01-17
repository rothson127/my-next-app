// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyUsdtToken is ERC20 {
    constructor() ERC20("MyUsdtToken", "USDT") {
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
    }
}