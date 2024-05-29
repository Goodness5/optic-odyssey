// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract CollectionVoting {
    struct Collection {
        address owner;
        uint votes;
    }

    mapping(address => Collection) public collections;
    address[] public topCollections;

    event CollectionVoted(address indexed collectionOwner, uint indexed votes);
    event CollectionRegistered(address indexed collectionOwner);


    // Vote for a collection
    function voteForCollection(address collectionOwner) public {
        require(collectionOwner != address(0), "Invalid collection owner address");
        require(collections[collectionOwner].owner == address(0), "Collection already exists");
        
        collections[collectionOwner].owner = collectionOwner;
        collections[collectionOwner].votes++;
        emit CollectionVoted(collectionOwner, collections[collectionOwner].votes);
        
        updateTopCollections();
    }

    function registerCollection() public {
        require(collections[msg.sender].owner == address(0), "Collection already exists");
        
        collections[msg.sender].owner = msg.sender;
        emit CollectionRegistered(msg.sender);
    }
    // Update top collections based on votes
    function updateTopCollections() internal {
        delete topCollections;
        for (uint i = 0; i < 5; i++) {
            address topCollectionOwner;
            // uint maxVotes = 0;
            // for (uint j = 0; j < address(this).balance; j++) {
            //     address collectionOwner = collections[j].owner;
            //     uint votes = collections[collectionOwner].votes;
            //     if (votes > maxVotes && !isTopCollection(collectionOwner)) {
            //         topCollectionOwner = collectionOwner;
            //         maxVotes = votes;
            //     }
            // }
            if (topCollectionOwner != address(0)) {
                topCollections.push(topCollectionOwner);
            }
        }
    }

    // Check if a collection is already in the top collections list
    function isTopCollection(address collectionOwner) internal view returns (bool) {
        for (uint i = 0; i < topCollections.length; i++) {
            if (topCollections[i] == collectionOwner) {
                return true;
            }
        }
        return false;
    }

    // Get the top 5 collections
    function getTopCollections() public view returns (address[] memory) {
        return topCollections;
    }
}
