require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hero flame shadow shock note predict company grace help flat genre'; 
let testAccounts = [
"0x078e402d8dbfe5e4dc9ec5bb170a539e3a5d19456120f4a6805216450a4664ae",
"0x1678108b0025f7879249d4686b0aa8f061a9e4d5cf3ee90e4c0d4bb6ba3fd272",
"0xd78087cab1bc15631453a13e7edcc366c242f10acf21b053b387331ba068d281",
"0xfa4a7f5e28b20c3ce101a6e47e415c0775f1627b5096beb9e438639bfd4111ac",
"0x0401eb2e7d6334c372b181ce7b88e481200a721f6d358df72a886682996df791",
"0x816812571c74be287239a9b366f11496ef7a21bf1f8eecf00343becbd13ac3b4",
"0xd31b446875c13d9e7d72aa457d7b287e517432a7514b09fae11c1ebcad0e1156",
"0x1b440e762fe79f868e8a544caf30baf4f066916254f337c47a76329d3798505c",
"0x4432170139a5ebe02ecce46ca2f4988c4dacdad45687c17ce9cda8c220b11e0a",
"0xce4131eaefa3c5a9c63a9eef908757971e2d71112a702f5c88bd01188bf11306"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
            version: '^0.8.0'
        }
    }
};

