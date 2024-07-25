// NFT contract settings
const nftContractABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
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
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "username",
        type: "bytes32",
      },
    ],
    name: "UserRegistered",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "collectionAddress", type: "address" },
      { internalType: "bytes32", name: "itemName", type: "bytes32" },
      { internalType: "string", name: "uri", type: "string" },
      { internalType: "string", name: "description", type: "string" },
      { internalType: "bytes32", name: "category", type: "bytes32" },
      { internalType: "uint256", name: "price", type: "uint256" },
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
      { internalType: "address", name: "_collectionAddr", type: "address" },
      { internalType: "bool", name: "_isPublic", type: "bool" },
    ],
    name: "changeCollectionVisibility",
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
    inputs: [
      { internalType: "bytes32", name: "_username", type: "bytes32" },
      { internalType: "bytes32", name: "_collectionName", type: "bytes32" },
      { internalType: "bool", name: "_isPublic", type: "bool" },
      { internalType: "bytes32", name: "_category", type: "bytes32" },
      { internalType: "string", name: "_coverPhotoUrl", type: "string" },
      { internalType: "string", name: "_avatar", type: "string" },
    ],
    name: "createCollection",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllPublicCollections",
    outputs: [
      {
        components: [
          { internalType: "bytes32", name: "name", type: "bytes32" },
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "bytes32", name: "category", type: "bytes32" },
          { internalType: "string", name: "coverPhotoUrl", type: "string" },
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
    inputs: [],
    name: "getAllPublicItems",
    outputs: [
      {
        components: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "address", name: "itemAddress", type: "address" },
          { internalType: "uint256", name: "price", type: "uint256" },
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "bytes32", name: "accessId", type: "bytes32" },
          { internalType: "bytes32", name: "collectionName", type: "bytes32" },
          { internalType: "string", name: "description", type: "string" },
          { internalType: "bytes32", name: "itemName", type: "bytes32" },
          { internalType: "bytes32", name: "category", type: "bytes32" },
          { internalType: "string", name: "uri", type: "string" },
          { internalType: "bool", name: "listedForSale", type: "bool" },
        ],
        internalType: "struct OpticOdyssey.Item[]",
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
          { internalType: "bytes32", name: "username", type: "bytes32" },
          { internalType: "string", name: "avatar", type: "string" },
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
          { internalType: "address", name: "itemAddress", type: "address" },
          { internalType: "uint256", name: "price", type: "uint256" },
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "bytes32", name: "accessId", type: "bytes32" },
          { internalType: "bytes32", name: "collectionName", type: "bytes32" },
          { internalType: "string", name: "description", type: "string" },
          { internalType: "bytes32", name: "itemName", type: "bytes32" },
          { internalType: "bytes32", name: "category", type: "bytes32" },
          { internalType: "string", name: "uri", type: "string" },
          { internalType: "bool", name: "listedForSale", type: "bool" },
        ],
        internalType: "struct OpticOdyssey.Item",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_userAddr", type: "address" }],
    name: "getUserDetails",
    outputs: [
      {
        components: [
          { internalType: "bytes32", name: "username", type: "bytes32" },
          { internalType: "string", name: "avatar", type: "string" },
          { internalType: "address", name: "useraddress", type: "address" },
          { internalType: "uint256", name: "balance", type: "uint256" },
          { internalType: "uint256", name: "joined_at", type: "uint256" },
          { internalType: "address[]", name: "collections", type: "address[]" },
          { internalType: "bytes32[]", name: "itemIds", type: "bytes32[]" },
        ],
        internalType: "struct OpticOdyssey.User",
        name: "",
        type: "tuple",
      },
      {
        components: [
          { internalType: "bytes32", name: "name", type: "bytes32" },
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "bytes32", name: "category", type: "bytes32" },
          { internalType: "string", name: "coverPhotoUrl", type: "string" },
          { internalType: "address", name: "nftContract", type: "address" },
          { internalType: "bytes32[]", name: "itemIds", type: "bytes32[]" },
          { internalType: "bool", name: "isPublic", type: "bool" },
        ],
        internalType: "struct OpticOdyssey.Collection[]",
        name: "",
        type: "tuple[]",
      },
      {
        components: [
          { internalType: "address", name: "owner", type: "address" },
          { internalType: "address", name: "itemAddress", type: "address" },
          { internalType: "uint256", name: "price", type: "uint256" },
          { internalType: "uint256", name: "id", type: "uint256" },
          { internalType: "bytes32", name: "accessId", type: "bytes32" },
          { internalType: "bytes32", name: "collectionName", type: "bytes32" },
          { internalType: "string", name: "description", type: "string" },
          { internalType: "bytes32", name: "itemName", type: "bytes32" },
          { internalType: "bytes32", name: "category", type: "bytes32" },
          { internalType: "string", name: "uri", type: "string" },
          { internalType: "bool", name: "listedForSale", type: "bool" },
        ],
        internalType: "struct OpticOdyssey.Item[]",
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
    inputs: [],
    name: "publicCollectionCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
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
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "users",
    outputs: [
      { internalType: "bytes32", name: "username", type: "bytes32" },
      { internalType: "string", name: "avatar", type: "string" },
      { internalType: "address", name: "useraddress", type: "address" },
      { internalType: "uint256", name: "balance", type: "uint256" },
      { internalType: "uint256", name: "joined_at", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const collectionContractsABI = [
  {
    type: "constructor",
    inputs: [
      { name: "name", type: "string", internalType: "string" },
      { name: "symbol", type: "string", internalType: "string" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getApproved",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isApprovedForAll",
    inputs: [
      { name: "owner", type: "address", internalType: "address" },
      { name: "operator", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "mint",
    inputs: [
      { name: "to", type: "address", internalType: "address" },
      { name: "tokenURI", type: "string", internalType: "string" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "nextTokenId",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ownerOf",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
      { name: "data", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setApprovalForAll",
    inputs: [
      { name: "operator", type: "address", internalType: "address" },
      { name: "approved", type: "bool", internalType: "bool" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [{ name: "interfaceId", type: "bytes4", internalType: "bytes4" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tokenURI",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "string", internalType: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      { name: "from", type: "address", internalType: "address" },
      { name: "to", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "approved",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ApprovalForAll",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      { name: "approved", type: "bool", indexed: false, internalType: "bool" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "BatchMetadataUpdate",
    inputs: [
      {
        name: "_fromTokenId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "_toTokenId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "MetadataUpdate",
    inputs: [
      {
        name: "_tokenId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      { name: "from", type: "address", indexed: true, internalType: "address" },
      { name: "to", type: "address", indexed: true, internalType: "address" },
      {
        name: "tokenId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "ERC721IncorrectOwner",
    inputs: [
      { name: "sender", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
      { name: "owner", type: "address", internalType: "address" },
    ],
  },
  {
    type: "error",
    name: "ERC721InsufficientApproval",
    inputs: [
      { name: "operator", type: "address", internalType: "address" },
      { name: "tokenId", type: "uint256", internalType: "uint256" },
    ],
  },
  {
    type: "error",
    name: "ERC721InvalidApprover",
    inputs: [{ name: "approver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC721InvalidOperator",
    inputs: [{ name: "operator", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC721InvalidOwner",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC721InvalidReceiver",
    inputs: [{ name: "receiver", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC721InvalidSender",
    inputs: [{ name: "sender", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "ERC721NonexistentToken",
    inputs: [{ name: "tokenId", type: "uint256", internalType: "uint256" }],
  },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
  },
];
const keccak256 = require("keccak256");

function toChecksumAddress(address) {
  address = address.toLowerCase().replace("0x", "");
  const hash = keccak256(address).toString("hex");
  let checksummedAddress = "0x";

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
const address = "0x60EF1291e055793D7Db04B13c75B714C0Fb4b6AB";
const checksummedAddress = toChecksumAddress(address);
console.log("checksum:" + checksummedAddress);

const nftContractAddress = checksummedAddress;

module.exports = {
  nftContractAddress,
  nftContractABI,
  collectionContractsABI
};
