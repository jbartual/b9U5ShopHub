var ShopHub = artifacts.require("./ShopHub.sol");

contract('ShopHub', function(accounts) {
  var i; //stores the contract instance
  var s;

  var a0 = accounts[0];
  var a1 = accounts[1];
  var a2 = accounts[2];
  var a3 = accounts[3];

  beforeEach (() => {
    return ShopHub.new({from:a0}).then((instance) => {
      i = instance;
    })
  });


  it("By default a0 is owner. a1 will create a new Shop. a1 will be owner, admin and merchant of the new Shop", () => {
    console.log ("it: By default a0 is owner. a1 will create a new Shop. a1 will be owner, admin and merchant of the new Shop");
    return i.getOwner.call().then((r) => {
        assert.equal(r.toString(), a0, "    ERROR: By default a0 shall be the Shop Hub owner");
        console.log ("    Is a0 the Shop Hub owner? Yes");
        console.log ("    a1 will create a new Shop");
        return i.newShop({from:a1});
    }).then((r) => {
        s = r.logs[0].args.s;
        console.log ("    New Shop address " + s.toStrin());
    });
  });

});