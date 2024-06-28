// question no 10 //
// SADIA KANWAL , 28/JUNE/2024 //
// store a person name in a variable and print message to them //
let personName:string ="ERIC"
console.log(`"HELLO ${personName}, WOULD YOU LIKE TO LEARN SOME TYPESCRIPT TODAY?"`);
 
//store author name in a variable and then print its favourite quote //
let famousAuthor:string= "ALBERT EINTIEN";
console.log(`"${famousAuthor} ONCE SAID THAT, LIFE IS LIKE RIDING A BICYCLE TO KEEP A BALANCE YOU MUST KEEP MOVING"`);

// question no 11 //
// store names in an array //
let names:string[]=["ayesha","eman","armish","zimal"];
// printing the name in a list by using for each method //
names.forEach(friends => {
    console.log(friends);
    
});
// question no 12 //
// print names of friends in a list along with message to them // 
names.forEach(friendsname => {
    console.log(`"Hello ${friendsname}! how was your day today?"`);
    
});