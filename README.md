# Optic Odyssey Documentation [Web App](https://optic-odyssey.vercel.app) / [Demo Video](https://youtu.be/1vogtjR3Tko?si=lM6raTfioqOIsyjm)
![File](https://ipfs.filebase.io/ipfs/QmXemFfwccezaoxyrgWrERPvXxZmKCxfDGy7NEikz1rssd)
Optic Odyssey is a never-before-seen NFT Marketplace on Rootstock where creators, photographers and artists from all over the world, from all cultures of life explore and tokenize their photos/assets into NFTs. Optic Odyssey also helps members of the platform to get funding for their brands through the Optic Odyssey DAO. All it takes to tokenize your photos/assets as NFTs is to create a profile, and by the powerful integration of the Filebase AWS SDK, effortlessly upload your photos to IPFS and publish.
To sell your products, you can fix a price for each of them or set them up for bidding. Highest bidder can then buy the NFT. Listing an NFT on the marketplace is completely free and only the buyer pays for transaction fees while minting NFTs. These transaction fees will be used to fund members seeking for funding. Defaulters of the marketplace will also be penalized and kicked out with immediate effect if the offense is gross enough.

## Features of Optic Odysssey
Optic Odyssey offers a plethora of features including but not limited to smart contracts, front end integration, Filebase AWS IPFS SDK integration, a Dashboard, wallet and email login (using Web3Modal x Ethers.js), a profile for each user, a DAO, an NFT marketplace, documentation, search functionalities, paginations, flaticons/font-awesome icons library, 
and an intuitive interface with a slick responsive design and smooth user experience.

## Technologies used to create Optic Odyssey
### Smart Contract Tools
Solidity, Foundry, OpenZeppelin, factory contracts

### Front end and Integration Tools
Web3Modal, Ethers.js, Rootstock testnet Token Tracker, Filebase AWS IPFS SDK, Next.js, Node.js, JavaScript, Tailwind CSS, PostgreSQL

## The Optic Odyssey User Flow

### Connect Wallet
![File](https://ipfs.filebase.io/ipfs/QmXihEzCCJbAs1K6hWXb6cxxgkuG84xZ7B7HpXQmYF2CZg)
To connect wallet, go to the [Web App](https://optic-odyssey.vercel.app). For desktop, click on the "Connect Wallet" button on the upper right of the screen and choose your login method either with wallet or email. If you don't have a wallet installed already, the wallet connect window has links to download a wallet of your choice on your device's browser (Brave browser, Google Chrome, Opera browser, or Yandex browser all work fine). On mobile, simply download your desired EVM-compatible wallet and use its inbuilt browser to connect to Optic Odyssey. Connect your wallet by clicking on the "Connect wallet" button on the upper right of the screen. Ensure to change network to Rootstock test network from the wallet connect window. The display on the screen will change after connecting (typically, it shows your tRBTC balance and a substring of your connected wallet address).

### Get testnet tRBTC for gas fees payments
![File](https://ipfs.filebase.io/ipfs/QmeTAgrea7RSrNT3siQuFW98TBsx1SVxpVEemYCwE6UEs4)
With Optic Odyssey being deployed currently on the testnet of Rootstock, testnet tRBTC is required to pay for gas fees during transactions/minting of NFTs. Testnet tRBTC can be obtained from the [Rootstock testnet faucet](https://faucet.rootstock.io/).

### Web app homepage
The homepage of the Optic Odyssey web app is the first page you see when you visit the app. It is the gateway to Optic Odyssey's dashboard and features the wallet connect button as well as other important information about the platform including documentation.

 ### The Optic Odyssey Dashboard
This is the most functional part of the dApp. It houses the most important parts of the platform including the dApp home, profile, creators, NFT marketplace and DAO governance.

### dApp Homepage
![File](https://ipfs.filebase.io/ipfs/QmNX23NYxmanHve6FyyvrEfg9U5uLuono7eVkmEy4Wsjhe)
This section is the first part of the dashboard. It shows general data of Optic Odyssey including trending collections, top creators, recent categories uploads, the DAO etc.

### The Profile Page
![File](https://ipfs.filebase.io/ipfs/QmSzpiEisCHtPyDDFofgFYYcFU7a4zGD5ME6x7PiqpA8wm)
This section is the most important part of Optic Odyssey. Every creator passes through this section before being able to have an NFT listed on the platform. On this profile page, each user can register as a creator and create collections and add items to created collections. Note that this section is unique to every user. In particular, the following actions can be performed on the profile page:

* `Update profile picture or cover photo:` These can be done by clicking on the edit buttons on the profile/cover at anytime.
* `Create collection:` The create collection functionality requires that a user registers a username at first instance, followed by name of collection, category and visibility of collection (public or private).
* `Add item to collection:` After creating a collection, this is the part where a registered user can add an item to his own collection (you can't add to someone else's collection). It requires inputting the collection name from a dropdown, item title, item category, item description, photo upload, and price of item. Click on the "add to collection" button after to complete this task.
* `View collection:` From the "your collections" tab, you can view all your created collections and items contained in each collection.
* `Publish/unpublish collection:` By clicking on either of these two buttons, you can make a collection public or private.
* `View NFT:` From each collection, you can view individual NFTs metadata and perform item related operations on the item page e.g list/unlist item, accept offers etc.

### The Creators Page
![File](https://ipfs.filebase.io/ipfs/QmUfkQnCwxpGkKBQJymtwC4jNuTZV8j1mhpLUuwjvgKbjz)
![File](https://ipfs.filebase.io/ipfs/QmefaBUtsgK9eDvM6Wi6Y2VHfG5AYycEhvRAMgXKHTbZxT)
This section is the part where every registered creator on Optic Odyssey can be seen. The following actions can be performed:

* `View creators:` Shows a list of all creators.
* `View profile:` Allows a user to view the profile of a creator.
* `Donate:` This button can be used to donate RBTC to a creator if you like his/her products.

*Note: In subsequent upgrades of the user experience, profile photos will be added directly to the creators list. In the view profile part also, a list of collections/items of the viewed creator will also be shown.*

### The NFT Marketplace
![File](https://ipfs.filebase.io/ipfs/QmViLYY6XVnqsuhNvDei9BcCsm4dzdB3iq4cNG7ZG2CDzW)
![File](https://ipfs.filebase.io/ipfs/QmQ1JSir474oxmkQCN6UejqkiPaTUdqVUj2sUm8JA7yKUy)
![File](https://ipfs.filebase.io/ipfs/QmaSoRbmXkmotwvpUfow58qR6LPiTZ7iF131GyJ8fjiQrY)
![File](https://ipfs.filebase.io/ipfs/Qmdabh8AnQPZtcjogSafPcZ3cD4UrbBABriDqDApL9QAvW)

This is the most functional part of the dashboard where every published NFT/collection can be seen. The following actions can be performed here:

* `View collection:` This button right here is used to view the full collection an NFT belongs to.
* `View NFT:` This functionality enables a user to view the metadata of an NFT on the item page.
* `Buy NFT:` This button on the item page comes after clicking on the "View NFT" button and enables a buyer to mint an NFT to his wallet.
* `Sold:` This button indicates that an NFT has been sold.
* `Make offer:` This enables a buyer to make an offer for an NFT. 
* `Search for an NFT:` With the search functionality, any published item/collection on the marketplace can be found. 
* `Paginations:` For a smooth user experience, paginations have been added to the dApp to navigate between items/collections.

*Note: Other functionalities such as "claim offer", "list item", "unlist item" already in the smart contracts of Optic Odyssey will be integrated into the dApp in subsequent upgrades of the product.*

### The Optic Odyssey DAO
All photographers/creators from anywhere in the world, all cultures of life have an option to join the Optic Odyssey DAO. By becoming a member of the DAO, you are able to request for funding and make governance decisions and vote in the DAO. As at the time of writing this documentation, the DAO is still in progress and has not been fully integrated. 

### Team Members (Team Optic Odyssey)
* Patrick Ominisan - Blockchain developer (Web3Bridge)
* Kolapo Goodness - Smart contract developer (Web3Bridge)



# OpticOdyssey Smart Contract Documentation
## Contract Addresses

| Contract Name | Address                                    | Verification Status |
|---------------|--------------------------------------------|---------------------|
| OPTIC-ODYSSEY | [0x5De93b7d36E1bDECA9438A4B3C0e64E5fb637e76](https://rootstock-testnet.blockscout.com/address/0x5De93b7d36E1bDECA9438A4B3C0e64E5fb637e76) | Verified           |


## Overview

OpticOdyssey is a smart contract deployed on the Rootstock blockchain that manages users, collections, items, and offers in a decentralized NFT marketplace. This platform is tailored for photographers/creators and artists to showcase and sell their photos/artworks in a decentralized manner.

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

## Factory Contract

### Constructor

```solidity
constructor() {}
```

Initializes the factory contract.

### Events

- `event OpticOdysseyDeployed(address opticOdysseyAddress)`

### Functions

#### Deployment

- `function deployOpticOdyssey() public returns (address)`
  - Deploys a new instance of the `OpticOdyssey` contract and returns the address of the newly deployed contract.
  - Emits an `OpticOdysseyDeployed` event.

```solidity
contract Factory {
    event OpticOdysseyDeployed(address opticOdysseyAddress);

    function deployOpticOdyssey() public returns (address) {
        OpticOdyssey opticOdyssey = new OpticOdyssey();
        emit OpticOdysseyDeployed(address(opticOdyssey));
        return address(opticOdyssey);
    }
}
```
>>>>>>> e831529b03d00a91c5e312653c1c1c7259aafc2c
