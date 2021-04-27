const UniswapV2ERC20 = artifacts.require("UniswapV2ERC20");
const UniswapV2Factory = artifacts.require("UniswapV2Factory");
const UniswapV2Pair = artifacts.require("UniswapV2Pair");

module.exports = function (deployer, network, accounts) {
    return deployer.deploy(UniswapV2ERC20).then(function () {
        console.log(`   UniswapV2ERC20 address: ${UniswapV2ERC20.address}`);
        return deployer.deploy(UniswapV2Factory, accounts[0]).then(function () {
            console.log(`   UniswapV2Factory address: ${UniswapV2Factory.address}`);
            return deployer.deploy(UniswapV2Pair).then(function() {
                console.log(`   UniswapV2Pair address: ${UniswapV2Pair.address}`);
            });
        });
    }); // End deployment
}