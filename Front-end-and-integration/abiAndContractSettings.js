// NFT contract settings
const nftContractABI = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "addItemToCollection",
    inputs: [
      { name: "collectionAddress", type: "address", internalType: "address" },
      { name: "itemName", type: "bytes32", internalType: "bytes32" },
      { name: "uri", type: "string", internalType: "string" },
      { name: "description", type: "string", internalType: "string" },
      { name: "category", type: "bytes32", internalType: "bytes32" },
      { name: "price", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "buyItem",
    inputs: [{ name: "itemId", type: "bytes32", internalType: "bytes32" }],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "changeCollectionVisibility",
    inputs: [
      { name: "_collectionAddr", type: "address", internalType: "address" },
      { name: "_isPublic", type: "bool", internalType: "bool" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "changeItemPrice",
    inputs: [
      { name: "itemId", type: "bytes32", internalType: "bytes32" },
      { name: "newPrice", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createCollection",
    inputs: [
      { name: "_username", type: "bytes32", internalType: "bytes32" },
      { name: "_collectionName", type: "bytes32", internalType: "bytes32" },
      { name: "_isPublic", type: "bool", internalType: "bool" },
      { name: "_category", type: "bytes32", internalType: "bytes32" },
      { name: "_coverPhotoUrl", type: "string", internalType: "string" },
      { name: "_avatar", type: "string", internalType: "string" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getAllPublicCollections",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct OpticOdyssey.Collection[]",
        components: [
          { name: "name", type: "bytes32", internalType: "bytes32" },
          { name: "owner", type: "address", internalType: "address" },
          { name: "category", type: "bytes32", internalType: "bytes32" },
          { name: "coverPhotoUrl", type: "string", internalType: "string" },
          { name: "nftContract", type: "address", internalType: "address" },
          { name: "itemIds", type: "bytes32[]", internalType: "bytes32[]" },
          { name: "isPublic", type: "bool", internalType: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAllPublicItems",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct OpticOdyssey.Item[]",
        components: [
          { name: "owner", type: "address", internalType: "address" },
          { name: "itemAddress", type: "address", internalType: "address" },
          { name: "price", type: "uint256", internalType: "uint256" },
          { name: "id", type: "uint256", internalType: "uint256" },
          { name: "accessId", type: "bytes32", internalType: "bytes32" },
          { name: "collectionName", type: "bytes32", internalType: "bytes32" },
          { name: "description", type: "string", internalType: "string" },
          { name: "itemName", type: "bytes32", internalType: "bytes32" },
          { name: "category", type: "bytes32", internalType: "bytes32" },
          { name: "uri", type: "string", internalType: "string" },
          { name: "listedForSale", type: "bool", internalType: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAllUsers",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct OpticOdyssey.User[]",
        components: [
          { name: "username", type: "bytes32", internalType: "bytes32" },
          { name: "avatar", type: "string", internalType: "string" },
          { name: "useraddress", type: "address", internalType: "address" },
          { name: "balance", type: "uint256", internalType: "uint256" },
          { name: "joined_at", type: "uint256", internalType: "uint256" },
          { name: "collections", type: "address[]", internalType: "address[]" },
          { name: "itemIds", type: "bytes32[]", internalType: "bytes32[]" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getItemById",
    inputs: [{ name: "itemId", type: "bytes32", internalType: "bytes32" }],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct OpticOdyssey.Item",
        components: [
          { name: "owner", type: "address", internalType: "address" },
          { name: "itemAddress", type: "address", internalType: "address" },
          { name: "price", type: "uint256", internalType: "uint256" },
          { name: "id", type: "uint256", internalType: "uint256" },
          { name: "accessId", type: "bytes32", internalType: "bytes32" },
          { name: "collectionName", type: "bytes32", internalType: "bytes32" },
          { name: "description", type: "string", internalType: "string" },
          { name: "itemName", type: "bytes32", internalType: "bytes32" },
          { name: "category", type: "bytes32", internalType: "bytes32" },
          { name: "uri", type: "string", internalType: "string" },
          { name: "listedForSale", type: "bool", internalType: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getUserDetails",
    inputs: [{ name: "_userAddr", type: "address", internalType: "address" }],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct OpticOdyssey.User",
        components: [
          { name: "username", type: "bytes32", internalType: "bytes32" },
          { name: "avatar", type: "string", internalType: "string" },
          { name: "useraddress", type: "address", internalType: "address" },
          { name: "balance", type: "uint256", internalType: "uint256" },
          { name: "joined_at", type: "uint256", internalType: "uint256" },
          { name: "collections", type: "address[]", internalType: "address[]" },
          { name: "itemIds", type: "bytes32[]", internalType: "bytes32[]" },
        ],
      },
      {
        name: "",
        type: "tuple[]",
        internalType: "struct OpticOdyssey.Collection[]",
        components: [
          { name: "name", type: "bytes32", internalType: "bytes32" },
          { name: "owner", type: "address", internalType: "address" },
          { name: "category", type: "bytes32", internalType: "bytes32" },
          { name: "coverPhotoUrl", type: "string", internalType: "string" },
          { name: "nftContract", type: "address", internalType: "address" },
          { name: "itemIds", type: "bytes32[]", internalType: "bytes32[]" },
          { name: "isPublic", type: "bool", internalType: "bool" },
        ],
      },
      {
        name: "",
        type: "tuple[]",
        internalType: "struct OpticOdyssey.Item[]",
        components: [
          { name: "owner", type: "address", internalType: "address" },
          { name: "itemAddress", type: "address", internalType: "address" },
          { name: "price", type: "uint256", internalType: "uint256" },
          { name: "id", type: "uint256", internalType: "uint256" },
          { name: "accessId", type: "bytes32", internalType: "bytes32" },
          { name: "collectionName", type: "bytes32", internalType: "bytes32" },
          { name: "description", type: "string", internalType: "string" },
          { name: "itemName", type: "bytes32", internalType: "bytes32" },
          { name: "category", type: "bytes32", internalType: "bytes32" },
          { name: "uri", type: "string", internalType: "string" },
          { name: "listedForSale", type: "bool", internalType: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "itemOffers",
    inputs: [
      { name: "", type: "bytes32", internalType: "bytes32" },
      { name: "", type: "address", internalType: "address" },
    ],
    outputs: [
      { name: "offer", type: "uint256", internalType: "uint256" },
      { name: "offerer", type: "address", internalType: "address" },
      { name: "accepted", type: "bool", internalType: "bool" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "listItem",
    inputs: [
      { name: "itemId", type: "bytes32", internalType: "bytes32" },
      { name: "price", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "publicCollectionCount",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tipUser",
    inputs: [{ name: "_user", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "unlistItem",
    inputs: [{ name: "itemId", type: "bytes32", internalType: "bytes32" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "users",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [
      { name: "username", type: "bytes32", internalType: "bytes32" },
      { name: "avatar", type: "string", internalType: "string" },
      { name: "useraddress", type: "address", internalType: "address" },
      { name: "balance", type: "uint256", internalType: "uint256" },
      { name: "joined_at", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "CollectionCreated",
    inputs: [
      {
        name: "name",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
      {
        name: "nftContract",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      { name: "isPublic", type: "bool", indexed: false, internalType: "bool" },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ItemAddedToCollection",
    inputs: [
      {
        name: "collectionaddress",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "itemId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ItemBought",
    inputs: [
      {
        name: "buyer",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "itemId",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
      {
        name: "seller",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "price",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "UserRegistered",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "username",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
    ],
    anonymous: false,
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
const address =
  "0xbb7358f68f32ecc25a1afc91869314e2a3443846295797aabfce0c58c2fcf0dc";
const checksummedAddress = toChecksumAddress(address);
console.log("checksum:" + checksummedAddress);

const nftContractAddress = checksummedAddress;

module.exports = {
  nftContractAddress,
  nftContractABI,
  collectionContractsABI,
};
