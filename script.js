// declare and initialize:
//name
let name = "Danielle Lucaj";
//age
let age = 28;
//birthday
let birthday = "July 30";
//detroit gc(boolean)
let detroitGC = true;
//life events array, 4 items
let lifeEvents = ["became an auntie in 2010", "moved to Detroit", "quarantined", "attended U of M"];


//write if/else stateent that runs one of two log methods: 
//if detroitGC is true console.log :My name is name and I am a student at Grand Circus in Detroit, Michigan.
//I am currently age years old and my birthday is on birthday.
//    else
//My name is name and I am a student at Grand Circus in Grand Rapids,
//Michigan. I am currently age years old and my birthday is on birthday.

if (detroitGC === true){
    console.log(`My name is ${name} and I am a sudent at Grand Circus in Detroit. 
    I am currently ${age} years old and my birthday is on ${birthday}.`)
} else {
console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids,
Michigan. I am currently ${age} years old and my birthday is on ${birthday}.
}`)
};

//write a loop that starts at 0 and iterates by increments of 1 
//while i is less than the length of life events array.
//each iteration of the loop should log a new scentence from the lifeEvents array.
//You should only have one console.log method.

for (i = 0; i < lifeEvents.length; i++){
console.log(`I ${lifeEvents[i]}`)
};

// ● Declare and initialize a variable named counter to the value of 0.
// ● Write a while loop that loops while true.
// ○ Declare a variable named randomNumber that is initialized to a random integer(Math.random)
// between 1 and 10. Google search how to do this.

let counter = 0;

while(true){

let randomNumber = Math.floor(Math.random()*10+1);

if(randomNumber !== 5){
    counter++;
    console.log(`${randomNumber} !== 5!`)
} else {
   (counter++) 
    console.log(`5===5. It took ${counter} iterations to randomly get the number 5.`);
   
    break;
} 
}
       
// ○ Write an if/else statement that has two conditions
// ■ If randomNumber is not equal to 5
// ● Increment counter
// ● Use a console.log method to say: “randomNumber !== 5”
// ■ Else
// ● Increment counter
// ● Use a console.log method to say: “5 === 5. It took counter
// iterations to randomly generate the number 5.”
// ● Break




