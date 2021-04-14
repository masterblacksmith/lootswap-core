require('dotenv').config()

const PrivateKeyProvider = require('./private-provider')

//local
const local_private_key = process.env.LOCAL_PRIVATE_KEY;
const local_url = process.env.LOCAL_0_URL;

//Testnet
const testnet_private_key = process.env.TESTNET_PRIVATE_KEY;
const testnet_url = process.env.TESTNET_0_URL;

const networkId = {
  Mainnet: 1666600000,
  Testnet: 1666700000
}

module.exports = {
  networks: {
    localnet: {
      provider: () => {
        return new PrivateKeyProvider(local_private_key, local_url, networkId.Testnet)
      },
      network_id: networkId.Testnet
    },

    testnet: {
      provider: () => {
        return new PrivateKeyProvider(testnet_private_key, testnet_url, networkId.Testnet)
      },
      network_id: networkId.Testnet
    },

    // mainnet: {
    //   provider: () => {
    //     return new PrivateKeyProvider(process.env.MAINNET_PRIVATE_KEY, 'https://api.s0.t.hmny.io', networkId.Mainnet)
    //   },
    //   network_id: networkId.Mainnet
    // }
  },

  compilers: {
    solc: {
      version: '0.6.12'
    },
  }
}