const {buildListL1, buildListL2} = require('./buildList');
const layer = process.argv[2];
switch (layer) {
    case "L1":
        console.log(JSON.stringify(buildListL1(), null, 2));
        break;
    case "L2":
        console.log(JSON.stringify(buildListL2(), null, 2));
        break;
    default:
        console.log("Please specify layer to output")
}
