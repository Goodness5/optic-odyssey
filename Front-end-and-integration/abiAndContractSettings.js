// NFT contract settings
const nftContractABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "string", name: "name", type: "string" },
      {
        indexed: false,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "isPublic", type: "bool" },
    ],
    name: "CollectionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "collectionaddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
    ],
    name: "ItemAddedToCollection",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "itemId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "ItemBought",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "offerer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "itemaccessid",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "offerprice",
        type: "uint256",
      },
    ],
    name: "OfferMade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "username",
        type: "string",
      },
    ],
    name: "UserRegistered",
    type: "event",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "itemId", type: "bytes32" },
      { internalType: "address", name: "offerer", type: "address" },
    ],
    name: "acceptOffer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "collectionaddress", type: "address" },
      { internalType: "string", name: "item_name", type: "string" },
      { internalType: "string", name: "_uri", type: "string" },
      { internalType: "string", name: "_description", type: "string" },
      { internalType: "string", name: "_category", type: "string" },
      { internalType: "uint256", name: "_price", type: "uint256" },
    ],
    name: "addItemToCollection",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "itemId", type: "bytes32" }],
    name: "buyItem",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_collectionaddr", type: "address" },
      { internalType: "bool", name: "_is_public", type: "bool" },
    ],
    name: "changeCollectionVisisbility",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "itemId", type: "bytes32" },
      { internalType: "uint256", name: "newPrice", type: "uint256" },
    ],
    name: "changeItemPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "item_id", type: "bytes32" }],
    name: "claimItemFromOffer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string", name: "_username", type: "string" },
      { internalType: "string", name: "_collectionname", type: "string" },
      { internalType: "bool", name: "_isPublic", type: "bool" },
      { internalType: "string", name: "_category", type: "string" },
    ],
    name: "createCollection",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllPublicItems",
    outputs: [
      {
        components: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "address", name: "itemadress", type: "address" },
          { internalType: "uint256", name: "price", type: "uint256" },
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "bytes32", name: "accessid", type: "bytes32" },
          { internalType: "string", name: "collectionname", type: "string" },
          { internalType: "string", name: "description", type: "string" },
          { internalType: "string", name: "item_name", type: "string" },
          { internalType: "string", name: "category", type: "string" },
          { internalType: "string", name: "uri", type: "string" },
          { internalType: "bool", name: "listed_for_sale", type: "bool" },
          { internalType: "address[]", name: "offers", type: "address[]" },
        ],
        internalType: "struct OpticOdyssey.Items[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllUsers",
    outputs: [
      {
        components: [
          { internalType: "string", name: "username", type: "string" },
          { internalType: "address", name: "useraddress", type: "address" },
          { internalType: "uint256", name: "balance", type: "uint256" },
          { internalType: "uint256", name: "joined_at", type: "uint256" },
          { internalType: "address[]", name: "collections", type: "address[]" },
          { internalType: "bytes32[]", name: "itemIds", type: "bytes32[]" },
        ],
        internalType: "struct OpticOdyssey.User[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "itemId", type: "bytes32" }],
    name: "getItemById",
    outputs: [
      {
        components: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "address", name: "itemadress", type: "address" },
          { internalType: "uint256", name: "price", type: "uint256" },
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "bytes32", name: "accessid", type: "bytes32" },
          { internalType: "string", name: "collectionname", type: "string" },
          { internalType: "string", name: "description", type: "string" },
          { internalType: "string", name: "item_name", type: "string" },
          { internalType: "string", name: "category", type: "string" },
          { internalType: "string", name: "uri", type: "string" },
          { internalType: "bool", name: "listed_for_sale", type: "bool" },
          { internalType: "address[]", name: "offers", type: "address[]" },
        ],
        internalType: "struct OpticOdyssey.Items",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_useraddress", type: "address" },
    ],
    name: "getUserDetails",
    outputs: [
      {
        components: [
          { internalType: "string", name: "username", type: "string" },
          { internalType: "address", name: "useraddress", type: "address" },
          { internalType: "uint256", name: "balance", type: "uint256" },
          { internalType: "uint256", name: "joined_at", type: "uint256" },
          { internalType: "address[]", name: "collections", type: "address[]" },
          { internalType: "bytes32[]", name: "itemIds", type: "bytes32[]" },
        ],
        internalType: "struct OpticOdyssey.User",
        name: "_user",
        type: "tuple",
      },
      {
        components: [
          { internalType: "string", name: "name", type: "string" },
          { internalType: "string", name: "category", type: "string" },
          { internalType: "address", name: "nftContract", type: "address" },
          { internalType: "bytes32[]", name: "itemIds", type: "bytes32[]" },
          { internalType: "bool", name: "isPublic", type: "bool" },
        ],
        internalType: "struct OpticOdyssey.Collection[]",
        name: "_collections",
        type: "tuple[]",
      },
      {
        components: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "address", name: "itemadress", type: "address" },
          { internalType: "uint256", name: "price", type: "uint256" },
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "bytes32", name: "accessid", type: "bytes32" },
          { internalType: "string", name: "collectionname", type: "string" },
          { internalType: "string", name: "description", type: "string" },
          { internalType: "string", name: "item_name", type: "string" },
          { internalType: "string", name: "category", type: "string" },
          { internalType: "string", name: "uri", type: "string" },
          { internalType: "bool", name: "listed_for_sale", type: "bool" },
          { internalType: "address[]", name: "offers", type: "address[]" },
        ],
        internalType: "struct OpticOdyssey.Items[]",
        name: "_items",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getallPublicCollections",
    outputs: [
      {
        components: [
          { internalType: "string", name: "name", type: "string" },
          { internalType: "string", name: "category", type: "string" },
          { internalType: "address", name: "nftContract", type: "address" },
          { internalType: "bytes32[]", name: "itemIds", type: "bytes32[]" },
          { internalType: "bool", name: "isPublic", type: "bool" },
        ],
        internalType: "struct OpticOdyssey.Collection[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "", type: "bytes32" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "itemOffers",
    outputs: [
      { internalType: "uint256", name: "offer", type: "uint256" },
      { internalType: "address", name: "offerer", type: "address" },
      { internalType: "bool", name: "accepted", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "itemId", type: "bytes32" },
      { internalType: "uint256", name: "price", type: "uint256" },
    ],
    name: "listItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "itemId", type: "bytes32" },
      { internalType: "uint256", name: "offerPrice", type: "uint256" },
    ],
    name: "makeOffer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "tipUser",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "itemId", type: "bytes32" }],
    name: "unlistItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_caller", type: "address" }],
    name: "user_exists",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "users",
    outputs: [
      { internalType: "string", name: "username", type: "string" },
      { internalType: "address", name: "useraddress", type: "address" },
      { internalType: "uint256", name: "balance", type: "uint256" },
      { internalType: "uint256", name: "joined_at", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const keccak256 = require('keccak256');

function toChecksumAddress(address) {
    address = address.toLowerCase().replace('0x', '');
    const hash = keccak256(address).toString('hex');
    let checksummedAddress = '0x';

    for (let i = 0; i < address.length; i++) {
        if (parseInt(hash[i], 16) >= 8) {
            checksummedAddress += address[i].toUpperCase();
        } else {
            checksummedAddress += address[i];
        }
    }

    return checksummedAddress;
}

// Address to convert
const address = "0x5De93b7d36E1bDECA9438A4B3C0e64E5fb637e76";
const checksummedAddress = toChecksumAddress(address);
console.log("checksum:" + checksummedAddress);

const nftContractAddress = checksummedAddress;

module.exports = {
  nftContractAddress,
  nftContractABI,
};
