// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.18;

import {OpticOdysseyNft} from "./nft.sol";

contract OpticOdyssey {
    struct User {
        bytes32 username;
        
        string avatar;
        address useraddress;
        uint256 balance;
        uint joined_at;
        address[] collections;
        bytes32[] itemIds;
    }

    struct Collection {
        bytes32 name;
        address owner;
        bytes32 category;
        string coverPhotoUrl;
        address nftContract;
        bytes32[] itemIds;
        bool isPublic;
    }

    struct Item {
        address owner;
        address itemAddress;
        uint price;
        uint id;
        bytes32 accessId;
        bytes32 collectionName;
        string description;
        bytes32 itemName;
        bytes32 category;
        string uri;
        bool listedForSale;
        // address[] offers;
    }

    struct Offer {
        uint offer;
        address offerer;
        bool accepted;
    }

    constructor(){

    }

    address[] private allUsers;
    uint public publicCollectionCount;
    mapping(address => User) public users;
    mapping(address => Collection) private collections;
    mapping(bytes32 => Item) private items;
    mapping(bytes32 => mapping(address => Offer)) public itemOffers;
    event UserRegistered(address user, bytes32 username);
    event CollectionCreated(bytes32 name, address nftContract, bool isPublic);
    // event OfferMade(address offerer, bytes32 itemaccessid, uint offerprice);
    event ItemAddedToCollection(address collectionaddress, uint256 itemId);
    event ItemBought(address buyer, bytes32 itemId, address seller, uint price);
    modifier userExists(address _caller) {
        require(userExistsInternal(_caller), "User does not exist");
        _;
    }

    function userExistsInternal(address _caller) internal view returns (bool) {
        User storage user = users[_caller];
        return (user.joined_at != 0 && user.username != 0);
    }

    function getItemById(bytes32 itemId) external view returns (Item memory) {
        return items[itemId];
    }

    function getUserDetails(address _userAddr) 
        public 
        view 
        returns (User memory, Collection[] memory, Item[] memory) 
    {
        User storage user = users[_userAddr];
        require(userExistsInternal(_userAddr), "User does not exist");

        Collection[] memory userCollections = new Collection[](user.collections.length);
        uint totalItems = 0;
        for (uint i = 0; i < user.collections.length; i++) {
            Collection storage collection = collections[user.collections[i]];
            userCollections[i] = collection;
            totalItems += collection.itemIds.length;
        }

        Item[] memory userItems = new Item[](totalItems);
        uint itemIndex = 0;
        for (uint i = 0; i < user.collections.length; i++) {
            Collection storage collection = collections[user.collections[i]];
            for (uint j = 0; j < collection.itemIds.length; j++) {
                bytes32 itemId = collection.itemIds[j];
                userItems[itemIndex++] = items[itemId];
            }
        }

        return (user, userCollections, userItems);
    }

    function getAllPublicCollections() public view returns (Collection[] memory) {
        Collection[] memory publicCollections = new Collection[](publicCollectionCount);
        uint index = 0;
        for (uint i = 0; i < allUsers.length; i++) {
            address userAddr = allUsers[i];
            User storage user = users[userAddr];
            for (uint j = 0; j < user.collections.length; j++) {
                Collection storage collection = collections[user.collections[j]];
                if (collection.isPublic) {
                    publicCollections[index++] = collection;
                }
            }
        }
        return publicCollections;
    }

    function getAllUsers() public view returns (User[] memory) {
        User[] memory userList = new User[](allUsers.length);
        for (uint i = 0; i < allUsers.length; i++) {
            userList[i] = users[allUsers[i]];
        }
        return userList;
    }

    function getAllPublicItems() public view returns (Item[] memory) {
        uint itemCount = 0;
        for (uint i = 0; i < allUsers.length; i++) {
            address userAddr = allUsers[i];
            User storage user = users[userAddr];
            for (uint j = 0; j < user.collections.length; j++) {
                Collection storage collection = collections[user.collections[j]];
                if (collection.isPublic) {
                    itemCount += collection.itemIds.length;
                }
            }
        }

        Item[] memory publicItems = new Item[](itemCount);
        uint itemIndex = 0;
        for (uint i = 0; i < allUsers.length; i++) {
            address userAddr = allUsers[i];
            User storage user = users[userAddr];
            for (uint j = 0; j < user.collections.length; j++) {
                Collection storage collection = collections[user.collections[j]];
                if (collection.isPublic) {
                    for (uint k = 0; k < collection.itemIds.length; k++) {
                        publicItems[itemIndex++] = items[collection.itemIds[k]];
                    }
                }
            }
        }
        return publicItems;
    }

    function changeCollectionVisibility(address _collectionAddr, bool _isPublic) 
        public 
        userExists(msg.sender) 
    {
        require(isCollectionOwner(msg.sender, _collectionAddr), "Not authorized");
        Collection storage collection = collections[_collectionAddr];
        // require(collection.isPublic != _isPublic, "Same visibility");
        
        collection.isPublic = _isPublic;
        publicCollectionCount = _isPublic ? publicCollectionCount + 1 : publicCollectionCount - 1;
    }

    function createCollection(
        bytes32 _username,
        bytes32 _collectionName,
        bool _isPublic,
        bytes32 _category,
        string memory _coverPhotoUrl,
        string memory _avatar
    ) public {
        bytes32[] memory tb = new bytes32[](0);
        if (!userExistsInternal(msg.sender)) {
            users[msg.sender] = User({
                username: _username,
                avatar: _avatar,
                useraddress: msg.sender,
                balance: 0,
                joined_at: block.timestamp,
                collections: new address[](0) ,
                itemIds: tb
            });
            allUsers.push(msg.sender);


            emit UserRegistered(msg.sender, _username);
        }

        bytes32 symbol = "-NFT";
        OpticOdysseyNft nftContract = new OpticOdysseyNft(string(abi.encodePacked(_collectionName)), string(abi.encodePacked(symbol)));
        address nftContractAddress = address(nftContract);
        collections[nftContractAddress] = Collection({
            name: _collectionName,
            owner: msg.sender,
            category: _category,
            coverPhotoUrl: _coverPhotoUrl,
            nftContract: nftContractAddress,
            itemIds: tb,
            isPublic: _isPublic
        });

        users[msg.sender].collections.push(nftContractAddress);
        if (_isPublic) {
            publicCollectionCount++;
        }
        emit CollectionCreated(_collectionName, nftContractAddress, _isPublic);
    }

    function addItemToCollection(
        address collectionAddress,
        bytes32 itemName,
        string memory uri,
        string memory description,
        bytes32 category,
        uint price
    ) public {
        require(collections[collectionAddress].nftContract != address(0), "Collection does not exist");
        require(isCollectionOwner(msg.sender, collectionAddress), "Only the owner can add items");

        OpticOdysseyNft nftContract = OpticOdysseyNft(collections[collectionAddress].nftContract);
        uint256 newItemId = nftContract.mint(msg.sender, string(abi.encodePacked(uri)));
        bytes32 accessId = keccak256(abi.encodePacked(msg.sender, collectionAddress, newItemId));
        // address[] memory t = new address[](0);
        items[accessId] = Item({
            owner: msg.sender,
            itemAddress: collectionAddress,
            price: price,
            id: newItemId,
            accessId: accessId,
            collectionName: collections[collectionAddress].name,
            description: description,
            itemName: itemName,
            category: category,
            uri: uri,
            listedForSale: false
            // offers: new address[](0)
        });

        collections[collectionAddress].itemIds.push(accessId);
        users[msg.sender].itemIds.push(accessId);

        emit ItemAddedToCollection(collectionAddress, newItemId);
    }

    function isCollectionOwner(address _user, address _collectionAddress) internal view returns (bool) {
        address[] storage userCollections = users[_user].collections;
        for (uint i = 0; i < userCollections.length; i++) {
            if (userCollections[i] == _collectionAddress) {
                return true;
            }
        }
        return false;
    }

    function tipUser(address _user) public payable {
        // require(userExistsInternal(_user), "User not registered");
        (bool success, ) = _user.call{value: msg.value}("");
        // require(success, "Ether transfer failed");
        if(success){

        users[_user].balance += msg.value;
        }
        else{
            revert();
        }
    }

    function buyItem(bytes32 itemId) public payable {
        Item storage item = items[itemId];
        require(item.owner != address(0), "Item does not exist");
        require(item.listedForSale, "Item not for sale");

        address payable seller = payable(item.owner);
        item.owner = msg.sender;

        OpticOdysseyNft nftContract = OpticOdysseyNft(item.itemAddress);
        nftContract.safeTransferFrom(address(this), msg.sender, item.id);

        uint serviceCharge = (item.price * 1) / 100;
        uint amount = item.price - serviceCharge;

        (bool success, ) = seller.call{value: amount}("");
        require(success, "Ether transfer to seller failed");

        users[msg.sender].itemIds.push(itemId);
        item.listedForSale = false;
        emit ItemBought(msg.sender, itemId, seller, item.price);
    }

    function listItem(bytes32 itemId, uint price) public userExists(msg.sender) {
        Item storage item = items[itemId];
        require(item.owner == msg.sender, "You can only list your own items");
        require(!item.listedForSale, "Item is already listed for sale");

        item.price = price;
        item.listedForSale = true;

        OpticOdysseyNft nftContract = OpticOdysseyNft(item.itemAddress);
        nftContract.transferFrom(msg.sender, address(this), item.id);
    }

    function unlistItem(bytes32 itemId) public userExists(msg.sender) {
        Item storage item = items[itemId];
        require(item.owner == msg.sender, "You can only unlist your own items");
        require(item.listedForSale, "Item is not listed for sale");

        item.listedForSale = false;

        OpticOdysseyNft nftContract = OpticOdysseyNft(item.itemAddress);
        nftContract.transferFrom(address(this), msg.sender, item.id);
    }

    function changeItemPrice(bytes32 itemId, uint newPrice) external userExists(msg.sender) {
        Item storage item = items[itemId];
        require(item.owner == msg.sender, "You can only change the price of your own items");
        require(item.listedForSale, "Item is not listed for sale");

        item.price = newPrice;
    }

    function removeItemIdFromUser(address user, bytes32 itemId) internal {
        uint indexToRemove = findItemIndex(users[user].itemIds, itemId);
        uint lastIndex = users[user].itemIds.length - 1;

        if (indexToRemove != lastIndex) {
            users[user].itemIds[indexToRemove] = users[user].itemIds[lastIndex];
        }
        users[user].itemIds.pop();
    }

    function findItemIndex(bytes32[] memory itemsArray, bytes32 itemId) internal pure returns (uint) {
        for (uint i = 0; i < itemsArray.length; i++) {
            if (itemsArray[i] == itemId) {
                return i;
            }
        }
        revert("Item ID not found");
    }
}
