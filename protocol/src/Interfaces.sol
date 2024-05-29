// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

interface IOpticOdyssey {
    struct User {
        string username;
        uint256 balance;
        uint joined_at;
        address[] collections;
        bytes32[] itemIds;
    }

    struct Collection {
        string name;
        address nftContract;
        bytes32[] itemIds;
        bool isPublic;
    }

    struct Items {
        address owner;
        address itemadress;
        uint price;
        uint id;
        string collectionname;
        string item_name;
        string uri;
        bool listed_for_sale;
        address[] offers;
    }

    struct Offers {
        uint offer;
        address offerer;
        bool accepted;
    }

    event UserRegistered(address indexed user, string username);
    event CollectionCreated(string name, address nftContract, bool isPublic);
    event OfferMade(address offerer, bytes32 itemaccessid, uint offerprice);
    event ItemAddedToCollection(address collectionaddress, uint256 itemId);
    event ItemBought(address buyer, bytes32 itemId, address seller, uint price);

    function getUserDetails() external view returns (User memory, Collection[] memory, Items[] memory);
    function getallPublicCollections() external view returns (Collection[] memory);
    function changeCollectionVisisbility(address _collectionaddr, bool _is_public) external;
    function createCollection(string memory _username, string memory _collectionname, bool _isPublic) external;
    function addItemToCollection(address collectionaddress, string memory item_name, string memory _uri, uint _price) external;
    function tipUser(address _user) external payable;
    function buyItem(bytes32 itemId) external payable;
    function listItem(bytes32 itemId, uint price) external;
    function unlistItem(bytes32 itemId) external;
    function changeItemPrice(bytes32 itemId, uint newPrice) external;
    function makeOffer(bytes32 itemId, uint offerPrice) external payable;
    function acceptOffer(bytes32 itemId, address offerer) external payable;
    function claimItemFromOffer(bytes32 item_id) external payable;
}
