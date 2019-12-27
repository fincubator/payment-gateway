import Web3 from 'web3';

export const development = {
  port: process.env.PORT || 8080,
  //Test key for example, dont use in production
  ethereumColdKey: process.env.ETHEREUM_COLD_KEY ||
                   'xpub6FnCn6nSzZAw5Tw7cgR9bi15UV96gLZhjDstkXXxvCLsUXBGXPdSnLF'
                   + 'bdpq8p9HmGsApME5hQTZ3emM2rnY5agb9rXpVGyy3bdW6EEgAtqt',
  //Test key for example, dont use in production
  ethereumSignKey: process.env.ETHEREUM_SIGN_KEY ||
                   '0x4d16897645794143776a79a61b4200b15c2201e561227be9db62ae121'
                   + '87b01b7',
  web3Provider: process.env.WEB3_PROVIDER || Web3.givenProvider ||
                'wss://main-rpc.linkpool.io/ws',
  web3BatchSize: process.env.WEB3_BATCH_SIZE || 1000,
  ethereumBlockCheckTime: process.env.ETHEREUM_BLOCK_CHECK_TIME || 30000,
  ethereumBlockTryCheckNumber: process.env.ETHEREUM_BLOCK_TRY_CHECK_NUMBER ||
                               20,
  ethereumRequiredConfirmations: process.env.ETHEREUM_REQUIRED_CONFIRMATIONS ||
                                 24,
  ethereumUSDTAddress: process.env.ETHEREUM_USDT_ADDRESS ||
                       '0xdac17f958d2ee523a2206206994597c13d831ec7',
  //Test key for example, dont use in production
  bitsharesSignKey: process.env.BITSHARES_SIGN_KEY ||
                    '5JZRPnBd6rNPggC2cZqhmpeH2M4Wt3XstvD5papGkeepBALjs3f',
  //Test key for example, dont use in production
  bitsharesMemoKey: process.env.BITSHARES_MEMO_KEY ||
                    '5JYPznz24WJsrJFPGukLckLo3NQGAmPZBpvSDrXv4ZrJf7F5bJi',
  bitsharesProvider: process.env.BITSHARES_PROVIDER ||
                     'wss://eu.nodes.bitshares.ws',
  bitsharesConnectionTimeout: process.env.BITSHARES_CONNECTION_TIMEOUT || 60000,
  bithsaresBlockCheckTime: process.env.BITSHARES_BLOCK_CHECK_TIME || 4000,
  bithsaresBlockTryCheckNumber: process.env.BITSHARES_BLOCK_TRY_CHECK_NUMBER ||
                                20,
  bitsharesAssetFee: process.env.BITSHARES_ASSET_FEE || 'BTS'
};
