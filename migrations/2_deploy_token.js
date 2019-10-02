const myToken = artifacts.require("./myToken.sol");

module.exports = function(deployer) {
	const _name = 'myToken';
	const _symbol = 'MTK';
	const _decimals = 18; 
  deployer.deploy(myToken, _name, _symbol, _decimals);
};
