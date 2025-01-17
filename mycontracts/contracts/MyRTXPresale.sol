// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MyRtxToken.sol";
import "./MyUsdtToken.sol";

contract MyRTXPresale {
    // address of admin
    address payable public admin;
    // define the instance of MyRtxToken
    MyRtxToken public rtxToken;
    // define the instance of MyUsdtToken
    MyUsdtToken public usdtToken;
    // token price variable
    uint256 public tokenprice;
    // count of token sold variable
    uint256 public totalsold;
    
    event Sell(address sender, uint256 totalvalue);

    // constructor
    constructor(address _rtxtokenaddress, address _usdttokenaddress, uint256 _tokenvalue) {
        admin = payable(msg.sender);
        tokenprice = _tokenvalue;
        rtxToken = MyRtxToken(_rtxtokenaddress);
        usdtToken = MyUsdtToken(_usdttokenaddress);
    }

    // buyTokens function
    function buyTokens() public payable {
        // check if the contract has the tokens or not
        require(
            rtxToken.balanceOf(address(this)) >= msg.value * tokenprice,
            "the smart contract don't hold the enough tokens"
        );
        // transfer the token to the user
        rtxToken.transfer(msg.sender, msg.value * tokenprice);
        // transfer ther token from user token to the admin
        usdtToken.transferFrom(msg.sender, admin, msg.value);
        // increase the token sold
        totalsold += msg.value * tokenprice;

        //   sell event for ui
        emit Sell(msg.sender, msg.value * tokenprice);
    }

    // end sale
    // function endsale() public {
    //     // check if admin has clicked the function
    //     require(msg.sender == admin, " you are not the admin");
    //     // transfer all the remaining tokens to admin
    //     rtxToken.transfer(msg.sender, rtxToken.balanceOf(address(this)));
    //     // transfer all the etherum to admin and self selfdestruct the contract
    //     //selfdestruct(admin);
    // }
}
