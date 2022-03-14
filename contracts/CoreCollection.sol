//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {ICoreCollection} from "../interfaces/ICoreCollection.sol";

contract CoreCollection is ICoreCollection, ERC721URIStorage {
    //counter to assign itemId
    uint256 private itemCounter;

    //counter to assign collectionId
    uint256 private collectionCounter;

    //Collection Structure
    struct Collection {
        uint256 collectionId;
        string name;
        address creator;
        uint256[] itemIds;
    }

    //NFT Structure
    struct NFT {
        uint256 itemId;
        string nft_name;
        address creator;
        string externalLink;
    }

    //mapping from itemId to NFT Structure
    mapping(uint256 => NFT) public NFTs;

    //mapping from collectionId to Collection Structure
    mapping(uint256 => Collection) public collections;

    //mapping from collectionId to its creator
    mapping(uint256 => address) public collectionIdToUser;

    //mapping from user/creator to collections created by them
    mapping(address => uint256[]) public userToCollectionIds;

    constructor() ERC721("Oasis", "OC") {}

    /**
     * @dev Emitted when new token with id '_newItemId' and URI '_tokenURI is created
     * @param _newItemId {uint} itemId for token
     * @param _tokenURI {string} IPFS URI
     */
    event tokenCreated(uint256 _newItemId, string _tokenURI);

    /**
     * @dev Emitted when new collection with '_name' is created
     * @param _name {string} name for the collection
     */
    event collectionCreated(string _name, uint256 _collectionId);

    /**
     * @dev Emitted when NFT with '_NFTName' and '_itemId' is created successfully
     */
    event NFTCreated(uint256 _itemId, string _NFTName);

    /**
     * @dev function to mint NFT Token
     * @param _tokenURI {string} IPFS URI
     */
    function createToken(string memory _tokenURI)
        external
        override
        returns (uint256 newItemId)
    {
        itemCounter++;
        newItemId = itemCounter;
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, _tokenURI);
        // setApprovalForAll(msg.sender, true);
        emit tokenCreated(newItemId, _tokenURI);
    }

    /**
     * @dev function to create a new collection
     * @param _name {string} name of the collection
     */
    function createCollection(string memory _name) external override {
        collectionCounter++;
        uint256 newCollectionId = collectionCounter;

        collections[newCollectionId] = Collection({
            collectionId: newCollectionId,
            name: _name,
            creator: msg.sender,
            itemIds: new uint256[](0)
        });

        collectionIdToUser[newCollectionId] = msg.sender;
        userToCollectionIds[msg.sender].push(newCollectionId);
        emit collectionCreated(_name, newCollectionId);
    }

    /**
     * @dev Function to create NFT and add it to the collection
     * @param _NFTName {string} name for the NFT
     * @param _collectionId {uint256} id of the user's collections
     * @param _externalLink {string} link to view NFT image
     * @param _tokenURI {string} tokenURI of the NFT token
     */
    function createNFT(
        string memory _NFTName,
        uint256 _collectionId,
        string memory _externalLink,
        string memory _tokenURI
    ) external override {
        uint256 _itemId = this.createToken(_tokenURI);

        NFTs[_itemId] = NFT({
            itemId: _itemId,
            nft_name: _NFTName,
            creator: msg.sender,
            externalLink: _externalLink
        });

        collections[userToCollectionIds[msg.sender][_collectionId]]
            .itemIds
            .push(_itemId);
        emit NFTCreated(_itemId, _NFTName);
    }

    // a test function
    // function test() external returns (Collection memory) {
    //     return collections[1];
    // }
}
