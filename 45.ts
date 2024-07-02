#! /usr\bin\env node

/* 45 ASSIGNMENT QUESTIONS

Ques #1 :- Setting up the environment */ 

// Ques #2
let personName : string = "Amna Jehanzeb"

console.log(`Hello ${personName}, Would you like to learn some python today?`)

//  Ques #3
console.log('lower case:', personName.toLowerCase());
console.log('upper case:', personName.toUpperCase());
console.log('title case:', personName.split(" ").map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).join(" "));

// Ques #4
console.log(`The American instructor, "Benjamin Franklin" wrote in his essay,
            "Remember that time is money." `);

// Ques #5
let famousPerson : string = "Benjamin Franklin"
let message : string = "Remember that time is money"

console.log(famousPerson, " wrote in his essay, " ,message);

// Ques #6

// \n adds extra line
// \t adds 4 spaces
let person1 : string = '\n\tQuaid-e-Azam\t\n'

console.log(person1)

let person2 = person1.trim();

console.log(person2)

// Ques #7 & 8
console.log(4 + 4);
console.log(12 - 4);
console.log(2 * 4);
console.log(16 / 2);

// Ques #9
let favNo : number = 5

console.log(`${favNo} is my Favourite number.`);

// Ques #10 :- Adding comments(added in ques #6)

// Ques #11
let friendNames : string[] = ["Laiba","Maha","Shanza","Zahra"]

for (let i = 0 ; i < friendNames.length; i++)
console.log(friendNames[i])

// Ques #12
let message1 : string = "Hello!"

for (let i = 0 ; i < friendNames.length; i++){
console.log(message1,friendNames[i])
};

// Ques #13
let transport : string[] = ["car","bike","jet"]
let message2  : string = "I would like to own a"

for (let i = 0; i < transport.length; i++){
    console.log(message2,transport[i])
};

// Ques #14
let guestList : string[] = ["Elsa","Ozge","Leyla"]

 for(let i = 0 ; i < guestList.length; i++){
     console.log(`Dear ${guestList[i]},\n I invite you to dinner party of collegues held at my place.\n`)
 };

// Ques #15
let absentGuest : string = "Elsa"
let newGuest :string = "Mildred"
guestList[0] = newGuest

for(let i = 0; i < guestList.length; i++){
    console.log("\tDear "+ guestList[i] +"\nI invite you to dinner party of collegues held at my place.\n")
}
console.log(absentGuest,"will not be joining us for dinner.");

// Ques #16
console.log("Good News!!! We found a bigger dinner table so we're now inviting three more guests");

guestList.unshift("Hazel");
guestList.splice(2,0,"Esmarelda");
guestList.push("Ethel");

for(let i = 0; i < guestList.length; i++){
    console.log("Dear "+ guestList[i] +"\nI invite you to dinner party of collegues held at my place.\n")
};

// Ques #17
console.log("Sorry! we're not able to arrange the bigger dinner table on time.\n")

while(guestList.length > 2) {

    let removeGuest = guestList.pop()
    console.log(removeGuest, "\nSorry for the inconvenience, we're lacking space at dinner so you're not invited\n")
};

for(let i = 0; i < guestList.length; i++) {

    console.log("Dear Ms.", guestList[i],"\nYou're still invited to the dinner tonight.")
};

guestList.splice(0,2);
console.log(guestList);

// Ques #18
let countries : string[] = ["Karachi","Hyderabad","Peshawar","Lahore"]

console.log("Original Order:", countries);

console.log("Alphabetical order:", [...countries].sort());
console.log("Checking original order:", countries);

console.log("Reverse Alphabetical order:", [...countries].sort().reverse());
console.log("Checking original order:", countries);

console.log("Reverse order:", countries.reverse());
console.log("Original order:", countries.reverse());

console.log("Using sort:", countries.sort());
console.log("Using reverse:", countries.sort().reverse());

// Ques #19
console.log("The number of guests invited to dinner =", guestList.length)

// Ques #20
let novelsArray : string[] = ["Peer-e-kamil","Jannat k pattay","Mala","Amar bail","Haalim","Mushaf"]

novelsArray.forEach(novelsArray => {console.log(novelsArray)});

// Ques #21
interface personalData{
    name: string
    age: number
    education: string
}

let personalData = {
    name: "Amna",
    age: 18,
    education: "FSC-I"
};

console.log(personalData)

// Ques #22
console.log(novelsArray[8]);

console.log(novelsArray[3]);

// Ques #23
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

console.log("Is car !== 'subaru'? I predict false.")

console.log(car !== 'subaru')

console.log("Is car == 'suzuki'? I predict false.")

console.log(car == 'suzuki')

console.log("Is car !== 'suzuki'? I predict True.")

console.log(car !== 'suzuki')

console.log("Is car == 'corolla'? I predict false.")

console.log(car == 'corolla')

console.log("Is car !== 'corolla'? I predict True.")

console.log(car !== 'corolla')

console.log("Is car == 'passo'? I predict false.")

console.log(car == 'passo')

console.log("Is car !== 'passo'? I predict True.")

console.log(car !== 'passo')

console.log("Is car == 'honda'? I predict false.")

console.log(car == 'honda')

console.log("Is car !== 'honda'? I predict True.")

console.log(car !== 'honda')

// Ques #24
console.log("Equality test:", ("Chocolate" as string) === "Chocolate");

console.log("Inequality test:", ("Chocolate" as string) !== "chocolate");

console.log("Lowercase:", "VANILLA".toLowerCase() === "vanilla");

console.log("Numerical equality test:", 98 === 98);

console.log("Numerical inequality test:", (98 as number) !== 95 );

console.log("Greater than test:", 10000 > 1);

console.log("Less than test:", 10000 < 1000000); 

console.log("Greater than and equals to test:", 45 >= 45);

console.log("Less than and equals to:", 57 <= 67);

let test : boolean = true

console.log("And operator test:", test == true && true);

console.log("OR operator test:", test== true || false);

console.log("Item is in array:", novelsArray.includes("Jannat k pattay"));

console.log("Item is not in array:", !novelsArray.includes("Aab-e-hayat"));

// Ques #25
let alien_colour : string = "green" || "yellow" || "red";

if (alien_colour === "green" || "red" || "yellow"){
    console.log("Yay! you just earned 5 points.");
    
};

alien_colour = "blue"
if (alien_colour === "green" || "yellow" || "red"){
    console.log("You failed.");
    
};

// Ques #26
let alien_colour2 : string = "green"

if (alien_colour2 === "green"){
    console.log("Yay! you just earned 5 points.");
    
} else {
    console.log("You just earned 10 points");
    
};

alien_colour2 = "blue"

if (alien_colour2 === "green"){
    console.log("Yay! you just earned 5 points.");
    
} else {
    console.log("You just earned 10 points");
    
};

// Ques #27
let alien_colour3 : string = "green"

if(alien_colour3 === "green"){
    console.log("You earned 5 points.");
    
}
else if (alien_colour3 === "yellow"){
    console.log("You earned 10 points.");
    
}
else if (alien_colour3 === "red"){
    console.log("You earned 15 points.");
    
}
else{
    console.log("Other colour");
    
}
                                                                                                                                                                    
alien_colour3 = "yellow"

if(alien_colour3 === "green"){
    console.log("You earned 5 points.");
    
}
else if (alien_colour3 === "yellow"){
    console.log("You earned 10 points.");
    
}
else if (alien_colour3 === "red"){
    console.log("You earned 15 points.");
    
}
else{
    console.log("Other colour");
    
}

alien_colour3 = "red"

if(alien_colour3 === "green"){
    console.log("You earned 5 points.");
    
}
else if (alien_colour3 === "yellow"){
    console.log("You earned 10 points.");
    
}
else if (alien_colour3 === "red"){
    console.log("You earned 15 points.");
    
}
else{
    console.log("Other colour");
    
}
alien_colour3 = "blue"

if(alien_colour3 === "green"){
    console.log("You earned 5 points.");
    
}
else if (alien_colour3 === "yellow"){
    console.log("You earned 10 points.");
    
}
else if (alien_colour3 === "red"){
    console.log("You earned 15 points.");
    
}
else{
    console.log("Other colour");
    
};

// Ques #28
let personAge : number = 18

if (personAge < 2) {
    console.log("You're a baby.");
    
} else if(personAge >= 2 && personAge < 4) {
    console.log("You're a toddler.");
    
} else if (personAge >= 4 && personAge < 13){
    console.log("You're a kid");
    
} else if (personAge >= 13 && personAge < 20){
    console.log("You're a teenager.");
    
} else if (personAge >= 20 && personAge < 65){
    console.log("You're an adult");
    
}else if (personAge >= 65 && personAge < 65){
    console.log("You're an elder");
    
};

// Ques #29
let Favfruit : string[] = ["Mango","Banana","Strawberry"]

if (Favfruit.includes("Mango")){
    console.log("You really like mangoes.");
    
};
if (Favfruit.includes("Banana")){
    console.log("You really like Bananas.");
    
};
if (Favfruit.includes("Strawberry")){
    console.log("You really like Strawberries.");
    
};
if (!Favfruit.includes("Leechi")){
    console.log("You don't like leechi");
    
};
if(!Favfruit.includes("Apple")){
    console.log("You don't like apples.");
    
};

// Ques #30
let userName : string[] = ["Admin", "Afia", "Shafia", "Hania", "Maleeha"]
userName.forEach(user => {
    if(user == "Admin"){
        console.log("Hello ", user, " would you like to see a status report?");        
    }
    else {
        console.log("Hello ", user, "thank you for logging in again.");
    }
});

// Ques #31
if(userName.length == 0){
    console.log("We need to find some users.")    
}
else {
    userName = [];
    console.log("All users has been removed ", userName.length)    
};

// Ques #32
let currentUsers : string[] = ['Cackle', 'John', 'Hardbroom', 'Moad', 'Enid']
let newUsers : string[] = ['Cackle', 'Agatha', 'Bat', 'Hubble', 'Enid']

for (let new_users of newUsers){
    const lc_new_users = new_users.toLowerCase();

    if(currentUsers.map(users => users.toLowerCase()).includes(lc_new_users)){
        console.log(`${new_users} already exist.`);        
    }
    else {
        console.log(`${new_users} is available.`);
    }
};

// Ques #33
let number : number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

for(let i = 0; i < number.length; i++){
    const numbers = number[i];
    let ordinalEnding : string;

    if(numbers == 1){
        ordinalEnding = "st"
    } 
    else if(numbers == 2){
        ordinalEnding = "nd"
    }
    else if (numbers == 3){
        ordinalEnding = "rd"
    }
    else{
        ordinalEnding = "th"
    }

    console.log(numbers + ordinalEnding);
};

// Ques #34
let pizzas : string[] = ['Pepproni', 'Italian', 'BBQ Chicken']

for (let pizza of pizzas) {
    console.log(`I like ${pizza} Pizza`);
}
console.log("I really love Pizza.");

// Ques #35
let animal : string[] = [ 'Horse', 'Cat', 'Rabbit' ]

for( let i = 0; i < animal.length; i++ ){
    console.log(`A ${animal[i]} would make a great pet!`);
}
console.log('Any of these animal would make a great pet.');

// Ques #36 & 37
function shirt(size: string = "Large", printMessage: string = "I ❤  TypeScript"){
    console.log(`You selected ${size} size shirt with ${printMessage} prints on shirt.`);
}

shirt();
shirt( "Medium" );
shirt( "Small", "I Love JavaScript" )

// Ques #38 & 39
function describeCity(city: string, country: string = "Pakistan") : string{
    console.log(`${city} is in ${country}`);
    return`${city}, ${country}`;
}
console.log(describeCity('Karachi', 'Pakistan'));
console.log(describeCity('Tokyo', 'Japan'));
console.log(describeCity('Berlin', 'Germany'));

describeCity("Karachi");
describeCity("Peshawar");
describeCity("Istanbul", "Turkey");

// Ques #40
function makeAlbum( artistName : string, albumTitle : string, tracks? : number){
    let album: {
        artist : string,
        title : string,
        tracks ?: number
    } = {
        artist : artistName,
        title : albumTitle,
    };

    if(tracks !== undefined){
        album.tracks = tracks;
    }

    return album;
}
let album1 = makeAlbum('Amna','Album 1');
let album2 = makeAlbum('Afia','Album 2');
let album3 = makeAlbum('Sheru','Album 3');

console.log(album1);
console.log(album2);
console.log(album3);

// Ques #41 & 42
function showMagicians ( magicians : string[]){
    magicians.forEach(name => console.log(name))
}
function greatMagicians (magicians : string[]){
    return magicians.map(name => `The Great ${name}`)
}

let magiciansNames = ["Harry", "Dumbledoor", "Ron"];
let makingGreat = greatMagicians(magiciansNames);

console.log('Original Array:\n');
showMagicians(magiciansNames);
showMagicians(makingGreat);

// Ques #43
let copyMagician = magiciansNames.slice();
let copyGreat = greatMagicians(copyMagician);

console.log('\nCoppied Array:\n');
showMagicians(copyGreat);

// Ques #44
function makeSandwich (...items : string[] ){
    console.log('\nMaking a sandwich with the following ingredients:');

    items.forEach(singleItem => console.log('=>', singleItem))

    console.log("\n Make & Enjoy your sandwich :)");
}

makeSandwich("3 bread slice", "Chicken", "Mayo", "Egg Omelete", "lettuce", "Tomato", "Cucumber");
makeSandwich("bread", "butter");

// Ques #45
function createCar (carManufracturer : string, carModel : string, year: number, ...options : string[]) {
    let car = {
        manufracturer : carManufracturer,
        model : carModel
    }

    options.forEach( option => {
        let [ key, value ] = option.split(':')
    });

    return car;
};

let myCar = createCar('Honda','Civic',2023,'Black','Hybrid','Manual')
console.log(myCar);

