// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {OpticOdyssey} from "../src/hub.sol";
import {CollectionVoting} from "../src/compete.sol";

contract Deployscript is Script {
   OpticOdyssey hub;
   CollectionVoting votingsys;



    function run() public {
        uint256 key = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(key);

        new OpticOdyssey();

        
    }




}