# OpticOdyssey Smart Contract Documentation

## Contract Addresses

| Contract Name | Address                                    | Verification Status |
|---------------|--------------------------------------------|---------------------|
| HUB           | [0x5De93b7d36E1bDECA9438A4B3C0e64E5fb637e76](https://rootstock-testnet.blockscout.com/address/0x5De93b7d36E1bDECA9438A4B3C0e64E5fb637e76) | Verified           |

## Overview

OpticOdyssey is a smart contract deployed on the Rootstock blockchain that manages users, collections, items, and offers in a decentralized marketplace. This platform is tailored for photographers and artists to showcase and sell their work in a decentralized manner.

## Prerequisites

- Solidity version: ^0.8.18
- Rootstock testnet or mainnet access
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
  - `address userAddress`
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

- **Item**: Represents an item in a collection.
  - `address owner`
  - `address itemAddress`
  - `uint price`
  - `uint id`
  - `bytes32 accessId`
  - `string collectionName`
  - `string description`
  - `string itemName`
  - `string category`
  - `string uri`
  - `bool listedForSale`
  - `address[] offers`

- **Offer**: Represents an offer made on an item.
  - `uint offerPrice`
  - `address offerer`
  - `bool accepted`

### State Variables

- `address[] private allUsers`
- `uint publicCollectionCount`
- `mapping(address => User) public users`
- `mapping(address => Collection) private collections`
- `mapping(bytes32 => Item) private items`
- `mapping(bytes32 => mapping(address => Offer)) public itemOffers`

### Events

- `event UserRegistered(address user, string username)`
- `event CollectionCreated(string name, address nftContract, bool isPublic)`
- `event OfferMade(address offerer, bytes32 itemAccessId, uint offerPrice)`
- `event ItemAddedToCollection(address collectionAddress, uint256 itemId)`
- `event ItemBought(address buyer, bytes32 itemId, address seller, uint price)`

### Modifiers

- `modifier userExists(address _caller)`

### Functions

#### User Management

- `function userExists(address _caller) public view returns (bool)`
  - Checks if a user exists.

- `function getAllUsers() public view returns (User[] memory)`
  - Returns a list of all users.

#### Item Management

- `function getItemById(bytes32 itemId) external view returns (Item memory)`
  - Returns details of an item by its ID.

#### Collection Management

- `function createCollection(string memory _username, string memory _collectionName, bool _isPublic, string memory _category) public`
  - Creates a new collection.

- `function addItemToCollection(address collectionAddress, string memory itemName, string memory _uri, string memory _description, string memory _category, uint _price) public`
  - Adds an item to a collection.

- `function changeCollectionVisibility(address _collectionAddr, bool _isPublic) public userExists(msg.sender)`
  - Changes the visibility of a collection.

- `function getAllPublicCollections() public view returns (Collection[] memory)`
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

- `function claimItemFromOffer(bytes32 itemId) public payable`
  - Claims an item after an offer has been accepted.

#### Utility Functions

- `function generateSymbol(string memory _name) internal pure returns (string memory)`
  - Generates a symbol for a collection.

- `function _getUserDetails(address _userAddr) internal view returns (User memory, Collection[] memory, Item[] memory)`
  - Internal function to get user details, collections, and items.

- `function getUserDetails(address _userAddress) public view returns (User memory _user, Collection[] memory _collections, Item[] memory _items)`
  - Returns user details, collections, and items.

- `function getAllPublicItems() public view returns (Item[] memory)`
  - Returns all public items.

- `function isCollectionOwner(address _user, address _collectionAddress) internal view returns (bool)`
  - Checks if a user is the owner of a collection.

- `function tipUser(address _user) public payable`
  - Allows tipping a user.

- `function removeItemIdFromUser(address user, bytes32 itemId) internal`
  - Removes an item ID from a user.

## Smart Contract: `OpticOdysseyNft`

### Constructor

```solidity
constructor(string memory name, string memory symbol) ERC721(name, symbol) Ownable(msg.sender) {}
```

Initializes the contract with a name and symbol for the NFT collection.

### State Variables

- `uint256 public nextTokenId`: Tracks the next token ID to be minted.

### Functions

- `function mint(address to, string memory tokenURI) public onlyOwner returns (uint256)`
  - Mints a new token with the specified `tokenURI` to the address `to`. Only the owner can call this function.
  - Increments the `nextTokenId` after minting the token.
  - Returns the token ID of the newly minted token.

### Usage

1. **Minting NFTs**: Use the `mint` function to create new NFTs for a collection. This function can only be called by the contract owner.
2. **Managing Token URIs**: Each token can have a unique URI that points to the metadata of the item.

### Example Code

```solidity
// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.18;

import "../lib/openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "../lib/openzeppelin-contracts/contracts/access/Ownable.sol";

contract OpticOdysseyNft is ERC721URIStorage, Ownable {
    uint256 public nextTokenId;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) Ownable(msg.sender) {}

    function mint(address to, string memory tokenURI) public onlyOwner returns (uint256) {
        uint256 tokenId = nextTokenId;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
        nextTokenId++;
        return tokenId;
    }
}
```

## rootstock testnet address: 0xbb7358f68f32ecc25a1afc91869314e2a3443846295797aabfce0c58c2fcf0dc




