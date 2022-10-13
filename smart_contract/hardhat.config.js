require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Lns_dcyXJCfUb4RbV7bWV33846dBiCY2',
      accounts: ['6f766fa1656282eaf1502074cf92323af0bf62bb3d71d2d3b4ca027ae0e6c926']
    }
  }
};
