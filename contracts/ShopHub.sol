pragma solidity ^0.4.4;

import "./Shop.sol";

contract ShopHub is Stoppable {
    address[2][] public shopsAndOwners;

        event LogShopHubNew (address _sender);
    // Constructor
    function ShopHub ()
        public
    {
        LogShopHubNew (msg.sender);
    }

        event LogShopHubNewShop (address _sender, address _newShop);
    // The Hub creates a new Shop. The sender will be the owner of the shop
    function newShop ()
        onlyIfRunning
        public
        returns (address _newShop)
    {
        Shop s = new Shop();
        shopsAndOwners.push([s, msg.sender]);

        LogShopHubNewShop (msg.sender, s);
        return s;
    }
    
    function getShopInfo (uint _position)
        onlyOwner
        constant
        public
        returns (address[2] _shopAndOwner)
    {
        return shopsAndOwners[_position];
    }
}