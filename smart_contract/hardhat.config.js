require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/bvhPUaz-O7qANZ5nUPg4ynS6bEAYS3VS',
      accounts: ['75787e1e07ad91bf245bff6e60a5316786bac33f82a2c2ce3ba5e676bb923633']
    }
  }
}

