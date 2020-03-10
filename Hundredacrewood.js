var tigger = { 
    character: "Tigger",
    greet: function(){
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
    }
};


var pooh = { character: "Winnie the Pooh" };
var eeyore = { character: "Eeyore"};
var heffalumps = { character: "heffalumps"};
var kanga = { character: "kanga"};
var christopherrobin = { character: "christopher robin"};
var owl = { character: "owl"};
var piglet = { character: "piglet"};
var rabbit = { character: "rabbit"};
var gopher = { character: "gopher"};
var bees = { character: "bees"};


var player = {
    location: tigger
}

function move (direction){
    if(direction == "north"){
        if(player.location.north == null){
            console.log("That leads to no where!");
        } else{
            player.location = player.location.north;
            console.log( "Going North " + player.location.character);
        }
    }
    else if(direction == "south"){
        if(player.location.south == null){
            console.log("That leads to no where!");
        } else{
            player.location = player.location.south;
            console.log( "Going south " + player.location.character);
        }
    }
    else if(direction == "east"){
        if(player.location.east == null){
            console.log("That leads to no where!");
        } else{
            player.location = player.location.east;
            console.log( "Going east " + player.location.character);
        }
    }
    else if(direction == "west"){
        if(player.location.west == null){
            console.log("That leads to no where!");
        } else{
            player.location = player.location.west;
            console.log( "Going west " + player.location.character);
        }
    }
    else {
        console.log( " invalid input!!");
    }
}

tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object
pooh.north = christopherrobin;
pooh.west = piglet;
pooh.east = bees;
pooh.south = tigger;
eeyore.east = heffalumps;
eeyore.south = kanga;
heffalumps.west = eeyore;
kanga.north = eeyore;
kanga.south = christopherrobin;
christopherrobin.north = kanga;
christopherrobin.west = owl;
christopherrobin.east = rabbit;
christopherrobin.south = pooh;
owl.east = christopherrobin;
owl.south = piglet;
rabbit.west = christopherrobin;
rabbit.south = bees;
rabbit.east = gopher;
gopher.west = rabbit;
bees.north = rabbit;
bees.west = pooh;
