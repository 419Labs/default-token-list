const { version } = require("../package.json");
const mainnetL1 = require("./tokens/L1/mainnet.json");
const ropstenL1 = require("./tokens/L1/ropsten.json");
const rinkebyL1 = require("./tokens/L1/rinkeby.json");
const goerliL1 = require("./tokens/L1/goerli.json");
const goerliL2 = require("./tokens/L2/starknet/goerli.json");
const kovanL1 = require("./tokens/L1/kovan.json");
const polygonL1 = require("./tokens/L1/polygon.json");
const mumbaiL1 = require("./tokens/L1/mumbai.json");

function buildList(layer, tokens) {
  const parsed = version.split(".");
  return {
    name: "419Labs List for " + layer,
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir",
    keywords: ["419Labs", "default", layer],
    tokens: tokens
        // sort them by symbol for easy readability
        .sort((t1, t2) => {
          if (t1.chainId === t2.chainId) {
            return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
          }
          return t1.chainId < t2.chainId ? -1 : 1;
        }),
  };
}

function buildListL1() {
    return buildList("L1", [...mainnetL1, ...ropstenL1, ...goerliL1, ...kovanL1, ...rinkebyL1, ...polygonL1, ...mumbaiL1]);
}

function buildListL2() {
  return buildList("L2", [...goerliL2]);
}


module.exports = {
  buildListL1,
  buildListL2
}
