//access data
const data = require("./1.friends.json");
console.log(data);

console.log("Friend name is: " + data.friends[0].name);


//modify data
data.friends[0].name = "HM Habibur Rahman";
console.log("Modify name is: " + data.friends[0].name);

//delete data
delete data.friends[1].name
console.log(data);