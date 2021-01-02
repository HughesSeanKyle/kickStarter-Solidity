pragma solidity ^0.4.17;

// 2nd contract - Create and deploy instances of Campaign
// "Campaign contract Factory"

contract CampaignFactory {
    // List of all deployed Campaigns
    address[] public deployedCampaigns;

    // Function that allows user to
    // create new instance of Campaign
    function createCampaign(uint256 minimum) public {
        // Create new instance of Campaign &
        // Store in type address variable           // 8
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    // note view is read only
    function getDeployedCampaigns() public view returns (address[]) {
        // return array
        return deployedCampaigns;
    }
}

// -------------------------------------------------------------

contract Campaign {
    struct Request {
        string description;
        uint256 value;
        address recipient;
        bool complete;
        uint256 approvalCount;
        mapping(address => bool) approvals;
    }

    // state variables

    Request[] public requests;
    address public manager;
    uint256 public minimumContribution;
    mapping(address => bool) public approvers;
    uint256 public approversCount;

    // Modifier to allow access to just manager of contract
    modifier restricted() {
        require(msg.sender == manager);
        _; // <== again think of this as a place where you can paste the function you wish to modify
    }

    // Constructor function**
    // Covert to new later with Constructor key word // 8.1
    function Campaign(uint256 minimum, address creator) public {
        manager = creator; // 1
        minimumContribution = minimum;
    }

    // Called whenever person wants to send money to contract
    // Sending/Receiving money === payable ***
    function contribute() public payable {
        require(msg.value > minimumContribution);

        approvers[msg.sender] = true; // 3
        approversCount++;
    }

    // Create new struct of type request &
    // add it to the request array
    function createRequest(
        string description,
        uint256 value,
        address recipient
    ) public restricted {
        // require(approvers[msg.sender]); // 4
        // create new request
        Request memory newRequest =
            Request({ // memory & Storage - two different methods
                description: description, // 2
                value: value,
                recipient: recipient,
                complete: false,
                approvalCount: 0
            }); //5
        // Add request to request array
        requests.push(newRequest);
    }

    // Request approval based on index selection in array
    // Check that person has alrady donated to contract             *a
    // Check that person has not already approved this.request.     *b
    function approveRequests(uint256 index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]); // *a
        require(!request.approvals[msg.sender]); // 6

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    // Only want manager to call this // 7
    function finalizeRequest(uint256 index) public restricted {
        Request storage request = requests[index];

        require(request.approvalCount > (approversCount / 2));
        // same as saying if false (below)
        require(!request.complete);

        // Take money and send to recipient
        // every address has a method called transfer
        request.recipient.transfer(request.value);

        request.complete = true;
    }
}

/*

// Note if arrays are used as a store of value 
// learn how to convert them to structs and mappings
// Doing this will reduce the gas fees

//1 - Who is attempting to create the contract
        - Note, now that the Campaign Factory is in charge of deploying instances of the contract the manager in the Campaign Constructor will now be the address of the Campaign Factory contract
        
        *Work Around
        in V130 - Time 5:22



//2 - field from struct set as this.function.Args
    Left hand side of the equals value is about storing value and RHS is about createing that request by making use of the struct. Think of a struct almost like a schema in mongo.mogoose. On LHS 'newRequest' is the variable name. 
        Must use every different prop(from struct model) in newRequest. If all not provided an error will be thrown. The way the struct is defined above is called a key value pair approach. At 3:12 Stephen explains other approach to not use all fields in struct. Recommendation not to use alt syntax. 
        
            can be written as:
            Request(description, value, recipient, false)
            This way could save on some gas fees ****
            
V114 && 115 - Storage is ABOUT preserving data
    -  memory is about very temporary data
        Function args is a good example of memory vars
            as function is done executing the args data is lost. 
            
            memory refers to a copy of a data structure. Where as Storage will effect the original data structure. - Storage will not attempt to make a copy of the array (or data structure)
            
// 3 This adds a new key with the contributers address and gives a value of true. NOTE - Address does not get stored inside the mapping. Only the value of true actually does. 

// 4 - Will lookup approvers mapping, Will try to access key of address inside of it.

// 5 - Wehn we initialize props of a struct we only have to initialize the value types. That is why the rro disappeared when we added the approvalCount - The mapping 'approvals' in the struct is not a value type but it is a reference type. 

// NaN - Note that the request data structure is an array and not a mapping. This is done because we will only be using a lookup functionality of the array. We do not need to look through ALL items in the array in order to make a choice. 

// 6 - require statements will allow truthy values and they reject or exit when they receive falsy values. So the not (!) sign is added in front of it. Will say:"If this person has already voted on this contract and their address exists inside this mapping that will return true and we want to then flip that to a false. So if it is falsey, we will immediately kick the user out of this function call."

// 7 

// Only want manager to call this // 7
    function finalizeRequest(uint index) public restricted {
        
        // same as saying if false (below)
        require(!requests[index].complete);
        
        requests[index].complete = true;
    }
    
    The above code is before refactor - not yet using storage
    
V129 time 2:19
Whenever one contract deploys another the cost of deployment is ob the user who sends the transaction (Web3/metamask) 

// 8
address newCampaign = new Campaign(minimum, msg.sender); 
Allows us to send the Campaign creators address to the Campaign function. If this is not done each Campaign will have the Campaign Factory address. 

    // 8.1
    function Campaign(uint minimum, address creator) public
    creator refers to the msg.sender mentioned above

*/
