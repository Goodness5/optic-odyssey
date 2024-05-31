// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;
import {OpticOdysseyNft} from "./nft.sol";

contract OpticOdyssey {

    constructor(){
        
    }
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
    address[] private allusers;
    uint publicCollectionCount;
    mapping(address => User) public users;
    mapping(address => Collection) private collections;
    mapping(bytes32 => Items) private items;
    mapping(bytes32 => mapping(address => Offers)) public itemOffers;
    event UserRegistered(address user, string username);
    event CollectionCreated(string name, address nftContract, bool isPublic);
    event OfferMade(address offerer, bytes32 itemaccessid, uint offerprice);
    event ItemAddedToCollection(address collectionaddress, uint256 itemId);
    event ItemBought(address buyer, bytes32 itemId, address seller, uint price);
    modifier userExists(address _caller) {
        User storage _user = users[msg.sender];
        require(
            _user.joined_at != 0 && bytes(_user.username).length != 0,
            "user does not exist"
        );

        _;
    }

    function user_exists(address _caller) public view returns (bool) {
        User storage _user = users[_caller];
        if (_user.joined_at != 0 && bytes(_user.username).length != 0) {
            return true;
        } else {
            return false;
        }
    }

    function getItemById(bytes32 itemId) external view returns (Items memory) {
        return items[itemId];
    }

    function generateSymbol(
        string memory _name
    ) internal pure returns (string memory) {
        bytes memory nameBytes = bytes(_name);
        bytes memory symbolBytes = new bytes(nameBytes.length);
        uint symbolLength = 0;
        bool capitalizeNext = true;

        for (uint i = 0; i < nameBytes.length; i++) {
            if (nameBytes[i] == " ") {
                capitalizeNext = true;
            } else if (capitalizeNext) {
                symbolBytes[symbolLength] = nameBytes[i] >= "a" &&
                    nameBytes[i] <= "z"
                    ? bytes1(uint8(nameBytes[i]) - 32)
                    : nameBytes[i];
                symbolLength++;
                capitalizeNext = false;
            }
        }

        bytes memory symbol = new bytes(symbolLength);
        for (uint i = 0; i < symbolLength; i++) {
            symbol[i] = symbolBytes[i];
        }

        return string(symbol);
    }

    function _getUserDetails(
        address _userAddr
    ) internal view returns (User memory, Collection[] memory, Items[] memory) {
        require(user_exists(_userAddr), "User does not exist");
        User storage user = users[_userAddr];

        // Create an array of collections
        Collection[] memory userCollections = new Collection[](
            user.collections.length
        );

        // Count the total number of items
        uint totalItems = 0;
        for (uint i = 0; i < user.collections.length; i++) {
            Collection storage collection = collections[user.collections[i]];
            userCollections[i] = collection;
            totalItems += collection.itemIds.length;
        }

        // Create an array of items
        Items[] memory userItems = new Items[](totalItems);
        uint itemIndex = 0;
        for (uint i = 0; i < user.collections.length; i++) {
            Collection storage collection = collections[user.collections[i]];
            for (uint j = 0; j < collection.itemIds.length; j++) {
                bytes32 itemId = collection.itemIds[j];
                userItems[itemIndex] = items[itemId];
                itemIndex++;
            }
        }

        return (user, userCollections, userItems);
    }

    function getUserDetails()
        public
        view
        returns (
            User memory _user,
            Collection[] memory _collections,
            Items[] memory _items
        )
    {
        (_user, _collections, _items) = _getUserDetails(msg.sender);
    }

    function getallPublicCollections()
        public
        view
        returns (Collection[] memory)
    {
        Collection[] memory publicCollections = new Collection[](
            publicCollectionCount
        );
        uint publicCollectionsIndex = 0;
        for (uint i = 0; i < allusers.length; i++) {
            address userAddr = allusers[i];
            User storage user = users[userAddr];
            for (uint j = 0; j < user.collections.length; j++) {
                address collectionAddr = user.collections[j];
                Collection storage collection = collections[collectionAddr];
                if (collection.isPublic) {
                    publicCollections[publicCollectionsIndex] = collection;
                    publicCollectionsIndex++;
                }
            }
        }

        return publicCollections;
    }

    function changeCollectionVisisbility(
        address _collectionaddr,
        bool _is_public
    ) public userExists(msg.sender) {
        require(
            isCollectionOwner(msg.sender, _collectionaddr),
            "not authorized"
        );
        Collection storage _collection = collections[_collectionaddr];
        bool prevvisibility = _collection.isPublic;
        if (_is_public == prevvisibility) {
            revert("same visibility");
        } else if (_is_public == false && prevvisibility == true) {
            _collection.isPublic = _is_public;
            publicCollectionCount -= 1;
        } else if (_is_public == true && prevvisibility == false) {
            _collection.isPublic = _is_public;
            publicCollectionCount += 1;
        }
    }

    function createCollection(
        string memory _username,
        string memory _collectionname,
        bool _isPublic
    ) public {
        bool existinguser = user_exists(msg.sender);
        if (!existinguser) {
            User storage _newuser = users[msg.sender];
            _newuser.username = _username;
            _newuser.joined_at = block.timestamp;
            allusers.push(msg.sender);
            emit UserRegistered(msg.sender, _username);
        }
        string memory symbol = generateSymbol(_collectionname);
        // Deploy a new OpticOdysseyNft contract
        OpticOdysseyNft nftContract = new OpticOdysseyNft(
            _collectionname,
            symbol,
            msg.sender
        );
        address nftContractAddress = address(nftContract);

        Collection storage _newcollection = collections[nftContractAddress];

        _newcollection.name = _collectionname;
        _newcollection.nftContract = nftContractAddress;
        _newcollection.isPublic = _isPublic;

        users[msg.sender].collections.push(nftContractAddress);
        if (_isPublic) {
            publicCollectionCount += 1;
        }
        emit CollectionCreated(_collectionname, nftContractAddress, _isPublic);
    }

    function addItemToCollection(
        address collectionaddress,
        string memory item_name,
        string memory _uri,
        uint _price
    ) public {
        require(
            collections[collectionaddress].nftContract != address(0),
            "Collection does not exist"
        );
        require(
            isCollectionOwner(msg.sender, collectionaddress),
            "Only the owner can add items"
        );
        Collection storage _collection = collections[collectionaddress];
        OpticOdysseyNft nftContract = OpticOdysseyNft(_collection.nftContract);
        uint256 newItemId = nftContract.mint(msg.sender, _uri);
        bytes32 accessId = keccak256(
            abi.encodePacked(msg.sender, collectionaddress, newItemId)
        );
        Items storage _newitem = items[accessId];
        _newitem.item_name = item_name;
        _newitem.uri = _uri;
        _newitem.id = newItemId;
        _newitem.owner = msg.sender;
        _newitem.price = _price;
        _newitem.collectionname = _collection.name;
        _collection.itemIds.push(accessId);
        users[msg.sender].itemIds.push(accessId);
        emit ItemAddedToCollection(collectionaddress, newItemId);
    }

    function isCollectionOwner(
        address _user,
        address _collectionaddress
    ) internal view returns (bool) {
        for (uint i = 0; i < users[_user].collections.length; i++) {
            if (
                users[_user].collections[i] ==
                collections[_collectionaddress].nftContract
            ) {
                return true;
            }
        }
        return false;
    }

    function tipUser(address _user) public payable {
        require(
            bytes(users[_user].username).length != 0,
            "User not registered"
        );
        users[_user].balance += msg.value;
    }

    function buyItem(bytes32 itemId) public payable {
        Items storage item = items[itemId];
        require(item.owner != address(0), "Item does not exist");

        address payable seller = payable(item.owner);
        item.owner = msg.sender;

        // Transfer the NFT to the buyer
        OpticOdysseyNft nftContract = OpticOdysseyNft(item.itemadress);
        nftContract.transferFrom(seller, msg.sender, item.id);

        // Transfer Ether to the seller
        uint serviceCharge = (item.price * 1) / 100;
        uint amount = item.price - serviceCharge;
        (bool success, ) = seller.call{value: amount}("");
        (bool success2, ) = address(this).call{value: serviceCharge}("");
        require(success, "Ether transfer to seller failed");
        require(success2, "Ether transfer to seller failed");
        removeItemIdFromUser(seller, itemId);
        users[msg.sender].itemIds.push(itemId);
        // Clear listing for the item
        item.listed_for_sale = false;

        emit ItemBought(msg.sender, itemId, seller, item.price);
    }

    function listItem(
        bytes32 itemId,
        uint price
    ) public userExists(msg.sender) {
        Items storage item = items[itemId];
        require(item.owner == msg.sender, "You can only list your own items");
        require(!item.listed_for_sale, "Item is already listed for sale");

        item.price = price;
        item.listed_for_sale = true;

        // Transfer the NFT to the contract
        OpticOdysseyNft nftContract = OpticOdysseyNft(item.itemadress);
        nftContract.transferFrom(msg.sender, address(this), item.id);
    }

    function unlistItem(bytes32 itemId) public userExists(msg.sender) {
        Items storage item = items[itemId];
        require(item.owner == msg.sender, "You can only unlist your own items");
        require(item.listed_for_sale, "Item is not listed for sale");

        item.listed_for_sale = false;

        // Transfer the NFT back to the owner
        OpticOdysseyNft nftContract = OpticOdysseyNft(item.itemadress);
        nftContract.transferFrom(address(this), msg.sender, item.id);
    }

    function changeItemPrice(
        bytes32 itemId,
        uint newPrice
    ) public userExists(msg.sender) {
        Items storage item = items[itemId];
        require(
            item.owner == msg.sender,
            "You can only change the price of your own items"
        );
        require(item.listed_for_sale, "Item is not listed for sale");

        item.price = newPrice;
    }

    function makeOffer(bytes32 itemId, uint offerPrice) public payable {
        Items storage item = items[itemId];
        require(
            item.owner != msg.sender,
            "You cannot make an offer on your own item"
        );
        require(item.listed_for_sale, "Item is not listed for sale");

        // Store the offer
        itemOffers[itemId][msg.sender] = Offers(offerPrice, msg.sender, false);
        item.offers.push(msg.sender);

        emit OfferMade(msg.sender, itemId, offerPrice);
    }

    function acceptOffer(bytes32 itemId, address offerer) public payable {
        Items storage item = items[itemId];
        require(
            item.owner == msg.sender,
            "You can only accept offers on your own items"
        );
        require(item.listed_for_sale, "Item is not listed for sale");
        require(
            itemOffers[itemId][offerer].offerer != address(0),
            "No offer exists for this item from the specified offerer"
        );

        Offers memory offerdet = itemOffers[itemId][offerer];
        offerdet.accepted = true;
    }

    function claimItemFromOffer(bytes32 item_id) public payable {
        require(
            itemOffers[item_id][msg.sender].offerer != msg.sender,
            "No offer exists for this item from the specified offerer"
        );
        require(itemOffers[item_id][msg.sender].accepted, "offer not accepted");
        Items storage item = items[item_id];
        address seller = item.owner;
        OpticOdysseyNft nftContract = OpticOdysseyNft(item.itemadress);
        nftContract.transferFrom(seller, msg.sender, item.id);

        uint serviceCharge = (item.price * 1) / 100;
        uint amount = item.price - serviceCharge;
        (bool success, ) = seller.call{value: amount}("");
        (bool success2, ) = address(this).call{value: serviceCharge}("");
        require(success, "Ether transfer to seller failed");
        require(success2, "Ether transfer to seller failed");
        users[msg.sender].itemIds.push(item_id);
        removeItemIdFromUser(seller, item_id);
        // Clear listing for the item
        item.listed_for_sale = false;

        emit ItemBought(msg.sender, item_id, seller, item.price);
    }

    function removeItemIdFromUser(address user, bytes32 itemId) internal {
        uint indexToRemove;
        for (uint i = 0; i < users[user].itemIds.length; i++) {
            if (users[user].itemIds[i] == itemId) {
                indexToRemove = i;
                break;
            }
        }
        // Shift elements after the removed index
        for (uint i = indexToRemove; i < users[user].itemIds.length - 1; i++) {
            users[user].itemIds[i] = users[user].itemIds[i + 1];
        }
        // Remove the last element
        users[user].itemIds.pop();
    }
}
