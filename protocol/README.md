# OpticOdyssey Smart Contract Documentation
## Contract Addresses

| Contract Name | Address                                    | Verification Status |
|---------------|--------------------------------------------|---------------------|
| HUB        | [0x5De93b7d36E1bDECA9438A4B3C0e64E5fb637e76](https://rootstock-testnet.blockscout.com/address/0x5De93b7d36E1bDECA9438A4B3C0e64E5fb637e76) | Verified           |




## Overview

OpticOdyssey is a smart contract that manages users, collections, items, and offers in a decentralized marketplace. Users can create collections, add items to collections, list items for sale, make offers on items, and buy items.

## Prerequisites

- Solidity version: ^0.8.18
- OpticOdysseyNft contract

## Smart Contract: `OpticOdyssey`

### Constructor

```solidity
constructor() {}
```

Initializes the contract. There are no parameters or specific initializations in the constructor.

### Structures

- **User**: Represents a user in the system.
  - `string username`
  - `address useraddress`
  - `uint256 balance`
  - `uint joined_at`
  - `address[] collections`
  - `bytes32[] itemIds`

- **Collection**: Represents a collection of items.
  - `string name`
  - `string category`
  - `address nftContract`
  - `bytes32[] itemIds`
  - `bool isPublic`

- **Items**: Represents an item in a collection.
  - `address owner`
  - `address itemaddress`
  - `uint price`
  - `uint id`
  - `bytes32 accessid`
  - `string collectionname`
  - `string description`
  - `string item_name`
  - `string category`
  - `string uri`
  - `bool listed_for_sale`
  - `address[] offers`

- **Offers**: Represents an offer made on an item.
  - `uint offer`
  - `address offerer`
  - `bool accepted`

### State Variables

- `address[] private allusers`
- `uint publicCollectionCount`
- `mapping(address => User) public users`
- `mapping(address => Collection) private collections`
- `mapping(bytes32 => Items) private items`
- `mapping(bytes32 => mapping(address => Offers)) public itemOffers`

### Events

- `event UserRegistered(address user, string username)`
- `event CollectionCreated(string name, address nftContract, bool isPublic)`
- `event OfferMade(address offerer, bytes32 itemaccessid, uint offerprice)`
- `event ItemAddedToCollection(address collectionaddress, uint256 itemId)`
- `event ItemBought(address buyer, bytes32 itemId, address seller, uint price)`

### Modifiers

- `modifier userExists(address _caller)`

### Functions

#### User Management

- `function user_exists(address _caller) public view returns (bool)`
  - Checks if a user exists.

- `function getAllUsers() public view returns (User[] memory)`
  - Returns a list of all users.

#### Item Management

- `function getItemById(bytes32 itemId) external view returns (Items memory)`
  - Returns details of an item by its ID.

#### Collection Management

- `function createCollection(string memory _username, string memory _collectionname, bool _isPublic, string memory _category) public`
  - Creates a new collection.

- `function addItemToCollection(address collectionaddress, string memory item_name, string memory _uri, string memory _description, string memory _category, uint _price) public`
  - Adds an item to a collection.

- `function changeCollectionVisibility(address _collectionaddr, bool _is_public) public userExists(msg.sender)`
  - Changes the visibility of a collection.

- `function getallPublicCollections() public view returns (Collection[] memory)`
  - Returns all public collections.

#### Item Transactions

- `function buyItem(bytes32 itemId) public payable`
  - Allows a user to buy an item.

- `function listItem(bytes32 itemId, uint price) public userExists(msg.sender)`
  - Lists an item for sale.

- `function unlistItem(bytes32 itemId) public userExists(msg.sender)`
  - Unlists an item from sale.

- `function changeItemPrice(bytes32 itemId, uint newPrice) public userExists(msg.sender)`
  - Changes the price of a listed item.

#### Offer Management

- `function makeOffer(bytes32 itemId, uint offerPrice) public payable`
  - Makes an offer on an item.

- `function acceptOffer(bytes32 itemId, address offerer) public payable`
  - Accepts an offer made on an item.

- `function claimItemFromOffer(bytes32 item_id) public payable`
  - Claims an item after an offer has been accepted.

#### Utility Functions

- `function generateSymbol(string memory _name) internal pure returns (string memory)`
  - Generates a symbol for a collection.

- `function _getUserDetails(address _userAddr) internal view returns (User memory, Collection[] memory, Items[] memory)`
  - Internal function to get user details, collections, and items.

- `function getUserDetails(address _useraddress) public view returns (User memory _user, Collection[] memory _collections, Items[] memory _items)`
  - Returns user details, collections, and items.

- `function getAllPublicItems() public view returns (Items[] memory)`
  - Returns all public items.

- `function isCollectionOwner(address _user, address _collectionaddress) internal view returns (bool)`
  - Checks if a user is the owner of a collection.

- `function tipUser(address _user) public payable`
  - Allows tipping a user.

- `function removeItemIdFromUser(address user, bytes32 itemId) internal`
  - Removes an item ID from a user.

### Usage

1. **Register a User**: Users are automatically registered when they create a collection.
2. **Create a Collection**: Use `createCollection` to create a new collection.
3. **Add Items**: Use `addItemToCollection` to add items to a collection.
4. **List Items for Sale**: Use `listItem` to list an item for sale.
5. **Make Offers**: Use `makeOffer` to make an offer on an item.
6. **Accept Offers**: Use `acceptOffer` to accept an offer on an item.
7. **Buy Items**: Use `buyItem` to buy an item listed for sale.

### Notes

- Ensure that the user exists before performing any actions.
- Only collection owners can add items or change collection visibility.
- Users can list and unlist their own items for sale.
- Offers can only be made on items listed for sale and can be accepted by item owners.
