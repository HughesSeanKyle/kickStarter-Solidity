const path = require('path');
const solc = require('solc');
const fs = require('fs-extra'); // 1

// Delete entire build folder if it already exists
const buildPath = path.resolve(__dirname, 'build'); // 2
fs.removeSync(buildPath); // 3 

// Read 'Campaign.sol' from the 'contracts' folder // 4
// 4.1 - Get path to Campaign contract file directory
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
// 4.2 Read in source code of Campaign.sol file
const source = fs.readFileSync(campaignPath, 'utf8');

// Compile both contracts with solidity compiler // 5
// 5.1
const output = solc.compile(source, 1).contracts;

// Write output to the 'build' directory // 6
fs.ensureDirSync(buildPath);

// 7
// Loop over output object, 
// take each contract that exists inside, 
// write it to a different file inside of build dir (in json format).
console.log(output);
for (let contract in output) { // 7.1
    fs.outputJSONSync( // 7.2
        path.resolve(buildPath, `${contract.replace(':', '')}.json`), //7.3
        output[contract]
    );
} 







/*
This compile file will be different to the previous projects compiling. This compile will only need to be done once and the file will not need to be recompiled everytime project is started up V134

// 1
Community made module
Very similar to the FS module but has a couple of extra functions tied to it.

// 2
__dirname === ethereum folder - means get current working directory. 
buildPath makes a reference to the build folder
To run the build script we pass in 'build' as a second argument to the resolve function. 

// 3
With reference t build path we can call a function on fs module to remove the entire build directory and everything inside of it. 
removeSync looks at build folder and removes everyting inside of it. 

// 4
// 4.2 - File will be read using utf8 encoding

// 5
Both contracts meaning the campaign factory and the actual campaign
This output variable will contain 2 objects - The two mentioned above. 
This will eventually be looped over and the contents will be written to two separate files. 
// 5.1
The 1 in second arg of compile means only one contract/file needs compiling
The contracts keyword refers to the data (that we care about) we will be requiring

// 6
ensureDirSync - Checks to see if Dir exists. If it does not exist this function will create it. Entire line of code will create the build folder. 

// 7
// 7.1 - Refers to the keys inside the output object in this case 'Campaign' & 'Campaign Factory'
// 7.2
outputJSONSync - Write out json file to some specified folder. In this case taking the contract => compiling it to json format => puth in build folder.  
// 7.3
The replace line is just removing the colon in the KEY name abd replacing it with an empty string. 
// 7.4
Second Argument to outputJsonSync "output[contract]" - The actual contents that we want to write to this json file. This will 'pull off' just the contract information from the output object (**NB Note that contract in this loop refers to the KEYS inside the oject.)
*/