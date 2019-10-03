const BigNumber = web3.BigNumber;

const myToken = artifacts.require('myToken');

require('chai')
	.use(require('chai-bignumber')(BigNumber))
	.should();

contract ('myToken', accounts =>{

	const _name = 'myToken';
	const _symbol = 'MTK';
	const _decimals = 18;

	beforeEach(async function (){
		this.token = await myToken.new(_name, _symbol, _decimals);
	});

	describe('token attributes', function(){
		it('has the correct name', async function(){
			const name = await this.token.name();
			name.should.equal(_name);

		});

		it('has the correct symbol', async function(){
			const symbol = await this.token.symbol();
			symbol.should.equal(_symbol);

		});

		it('has the correct decimals', async function(){
			const decimals = (await this.token.decimals()).toNumber().should.be.equal(_decimals);			
		});
	});
});