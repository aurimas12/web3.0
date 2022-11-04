// SPDX-License-Identifier: UNLINCENSED
pragma solidity >=0.7.0 <0.9.0;

contract BiddingContract{
    string public name="";
    uint public bidAmount;
    bool public eligible;
    uint constant minBid=10;

    function setItemName(string memory nm) public {
        name=nm;
    }

    function setBidAmount(uint x) public {
        bidAmount=x;
    }

    function determineEligibility() public {
        if(bidAmount>=minBid) {
            eligible=true;
        } else {
            eligible = false;
        }
    }
}
