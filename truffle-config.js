require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net pulse hunt gloom sugar season'; 
let testAccounts = [
"0x2f4137eeb3ffb989bbfd1193647da71803cf6b43e7e16bd21bbfd71857623e0a",
"0x2bc479c924caf43807bbce121a612cd2958088457d0ecfba56f1972fc843f649",
"0x025582965077d984f5397b833f0fa2543784a7c7ab87a0680775803e63d47ab1",
"0xa6a233c906074a3138ce6d898accd21f82bb9fdb678b6f0d53e457caeba8d381",
"0xcf4576698c3b8b527f17fedda6363cf173d7e1af310d440bb26301cb1a414d9b",
"0xda0448c5ddef72f4ba38cb695126d6f5e899a1437af2fb0c5669d11ea15e190a",
"0x16d1cf6b33ee5f5f08c4d3b3a656af3ff713e9e4129164229706cf4e2639cf3d",
"0x07abf62ddd324e807c9ab59b7937aee341219b349d6c8ff97a4db053b01ef687",
"0xb3aaaeb453f3d169c359dbab1c3f3eb11a41d9614a6c4e1ae33e85aaa1c1bdc5",
"0x9faae422c93f9c0d3e5477baf961fb0da95ce783a605bb3c6892236524ec8df0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
