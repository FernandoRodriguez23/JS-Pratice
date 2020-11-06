//=================================================================================================//

//Proper syntax                                         //Ternary Operator

//if(check == true){
    //console.log(`Its True`);                           // let death = false;
                                                        //death = (health > 0) ? false : true;
//}
//else {
    //console.log(`Its False`);
//}


//==========================================================================================================//

//Quiz Pratice

//let question1 = prompt(`What is the color of the sky?`)
//let question2 = prompt(`What are we doing?`)
//let question3 = prompt(`Where do we live?`)
//let question4 = prompt(`What country do we live in?`)
//let question5 = prompt(`What year is it?`)


//if(question1 == `blue`) {
  //  console.log(`+ 1`);
//}
//else {
  //  console.log(`+ 0`);
//}
//if(question2 == `code`) {
  //  console.log(`+ 1`);
//}
//else {
  //  console.log(`+ 0`)
//}
//if(question3 == `Az`) {
  //  console.log(`+ 1`);
//}
//else {
  //  console.log(`+ 0`);
//}
//if(question4 == `USA`) {
  //  console.log(`+ 1`);
//}
//else {
  //  console.log(`+ 0`);
//}
//if(question5 == `2020`) {
  //  console.log(`+ 1`);
//}
//else {
  //  console.log(`+ 0`); 
//}

//=============================================================================================================================//
//let result = (a + b < 4) ? `Below` : `Over`;
// variable ^  conditional^   true and fale ^
//=========================================================================================================================//


// Switch Condition

//let grade = "A";
//switch(grade){
  //  case "A":
       // console.log(`You got an A`);
    //    break;
    //case "B":
    //    console.log(`You got a B`);
    //    break;
    //case "C":
     //   console.log(`You got a C`);
       // break;
    //case "D":
      //  console.log(`You got a D`);
        //break;
    //default:
      //  console.log(`You Failed`);
//}

//===================================================================================================================//

//Switch Case Pratice

//let message = "";

//switch(massage){
  //  case `Employee`:
    //    message = `Hello`;
  //      break;
  //  case `Director`:
    //    message = `Greetings`;
  //      break;
  //  case ``:
    //    message = `No Login`;
   //     break;
   // default:
     //   message = ``;
//}

//======================================================================================================================//

//   "Or" Operator - is ||

//Military Time used In code 

//let weekdays = true;
//let time = 12;

//if(time < 9 || time > 17 || weekdays == false){
      //  console.log(`The store is close`);
//}
//========================================================================================================================//

// "And" Operator Example

// let tvOn = true;
// let radioOn = true;
// let computerOn = false;

// if (tvOn && radioOn && computerOn) {
// alert(`You are wasting power`);
//}

//=========================================================================================================================//

// The "And" Opoerator Pratice

//let pen = false;
//let mouse = true;
//let Keyboard = false;
//let paper = true;

//if((pen && paper) || (mouse && keyboard)){
  //alert(`You can take notes.`);
//}


//=========================================================================================================================//

// Example of a "Not" Operator, used by !

//let mapMissing = false;
//let noDirections = true;
//let gas = 10;

//if(gas != 0 && (!mapMissing || !noDirections)){
  //alert(`The road trip is on!`);
//}

//========================================================================================================================//

// This is a Nullish value, allows you to a value of nothing

//let value = undefined;
//console.log(value ?? `This is not defined`);

//How it used to be

//if(value !== null && value !== undefined){
  //return value;
//}else{
  //return "This is undefined";
//}

//============================================================================================================================//

//Chaning the Operators

//let a = null;
//let b = undefined;
//let c = "";
//let d = "This is last";

//console.log(a ?? b ?? c ?? d); //"" will show if you use || "This is last" will show

//=============================================================================================================================//

//"For" loop

//for(staring_Value; end_Condition; increment){
  //Code that will be looped
//}

//=============================================================================================================================//

// Correct way to run a loop

//for(let i = 0; i < 3; i++){
	//console.log(`This has happened` $(1 + i) `times`);
//}

//===============================================================================================================================//

// Loop Pratice

//Easy to understand
//for(let i = 5; i <= 13; i +=2 ){
  //console.log(i);
//}

//Math Way

//for(let i = 0; i < 5; i++){
  //console.log(2 * i +5);
//}

//=================================================================================================================================//

// All types of loops

//for(let i = 5; i <= 11; i += 1){
  //console.log(i);
//}

//for(let i = 0; i < 9; i++){
  //console.log(`This is noice`);
//}

//for(let i = 11; i >= 1; i -=2){
  //console.log(i)
//}

//================================================================================================================================//

//This will output 5 random number horeizontal as whole intergers with a common after every number exapet the last one

//let string = ``;
//for(let i = 0; i < 5; i++){
  //string += Math.ceil(Math.random()*100);

  //if(i < 4){
    //string += ","
  //}
  //console.log(String(Math.floor(Math.random(i)*100)));
  // My way, almost correct
//}
//If this was inside the brackets it would go 1 then 1, 2 then 1, 2, 3, and so on
//console.log(string);

//================================================================================================================================//

//This will print out every odd number

//for(let i = 0; i <= 100; i++){
  //if(i % 2 == 1){
    //console.log(`i`)
  //}
//}


//This is the correct way

//for(let i = 0; i <= 100; i +=2){
  //console.log(i);
//}

//==============================================================================================================================//

//Basic While loop

//let i = 0;

//while (i < 3){ //shows 0, then 1, then 2
  //console.log(i);
  //i++;
//}

//=============================================================================================================================//

//Do While Loop

//let i = 0;

//do {
  //console.log(i);
  //i++;
//}while (i < 3);

//===========================================================================================================================//

//Breaking the Loop

//let sum = 0;
//let amount = 0;
//let average = 0;
//let grade = ``;

//while(true){  // Adding + infront of Prompt makes it a number instead of a string
  //let value = +prompt("Enter a Score", "Leave blank to stop");
  //if(!value) break;

  //sum += value;
  //amount++;
//}

//average = sum / amount;

//switch(true){
  //case (average >= 90):
    //grade = "A";
    //break;
  //case (average >= 80):
    //grade = "B";
    //break;
  //case (average >= 70):
    //grade = "C";
    //break;
  //case (average >= 60):
    //grade = "D";
    //break;
  //default:
    //grade = "F";
//}
//console.log(`Sum: ${sum}`);
//console.log(`Amount: ${amount}`);
//console.log(`Average: ${average}`);
//console.log(`Grade: ${grade}`);

//=====================================================================================================================//

//Print out every odd number

//This "main:" is lableing a loop

//main:
//for(let i =0; i < 50; i++){
  //if(i % 2 == 1){
    //continue main;
  //}
  //console.log(i);
//}

//===================================================================================================================//

//Loop Pratice to make 6 random numbers that dont repeat

//let num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0, num6 = 0;

//num1 = Math.floor(Math.random() * 10 + 1);
//num2 = Math.ceil(Math.random() * 10);

//while(num1 == num2) {
  //num2 = Math.ceil() * 10;
//}
//while(num1 || num2 == num3){
  //num3 = Math.ceil() * 10;
//}
//while(num1 || num2 || num3 == num4){
  //num4 = Math.ceil() * 10;
//}
//while(num1 || num2 || num3 || num4 == num5){
  //num5 = Math.ceil() * 10;
//}
//while(num1 || num2 || num3 || num4 || num5 == num6){
  //num6 = Math.ceil() * 10;
//}
//console.log(num1 && num2 && num3 && num4 && num5 && num6);

//console.log(`${num1}, ${num2}, ${num3}, ${num4}, ${num5}, ${num6},`);
//====================================================================================================================//

// Creating Arrays

//let array = new Array();
//Leftover from java 

//let array = []; // Use This one

//================================================================================================================//

// Pratice arrayss

//let box1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27,29, 31];
//let box2 = [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27,30, 31];
//let box3 = [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29,30, 31];
//let box4 = [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29,30, 31];
//let box5 = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,30, 31];

//let tempValue = false;
//let string = "";

//for(let i = 0; i < box1.length; i++){
  //if(box1[i] == 19){
    //tempValue = true;
    //string += i + " ";
  //}
//}
//console.log(string);
//if(tempValue){
  //console.log(1);
//}else{
  //console.log(0);
//}
//tempValue = false;

//for(let i = 0; i < box2.length; i++){
  //if(box2[i] == 19){
    //tempValue = true;
    //string += i + " ";
  //}
//}
//console.log(string);
//if(tempValue){
  //console.log(1);
//}else{
  //console.log(0);
//}
//tempValue = false;
//for(let i = 0; i < box3.length; i++){
  //if(box3[i] == 19){
    //tempValue = true;
    //string += i + " ";
  //}
//}
//console.log(string);
//if(tempValue){
  //console.log(1);
//}else{
  //console.log(0);
//}
//tempValue = false;
//for(let i = 0; i < box4.length; i++){
  //if(box4[i] == 19){
    //tempValue = true;
    //string += i + " ";
  //}
//}
//console.log(string);
//if(tempValue){
  //console.log(1);
//}else{
  //console.log(0);
//}
//tempValue = false;
//for(let i = 0; i < box5.length; i++){
  //if(box5[i] == 19){
    //tempValue = true;
    //string += i + " ";
  //}
//}
//console.log(string);
//if(tempValue){
  //console.log(1);
//}else{
  //console.log(0);
//}
//tempValue = false;

//================================================================================================================//

//Looping through Arrays

//for(let i = 0; i < array.length; i++){}
//This is standard way of doing it

//for(let item of array){}
//Modern way of handaling 

//for(let i = 0; i < array.length; i++){
  //array[i] *= 3;
//}
//This will go through each value 3 times(I think)


//================================================================================================================//

//Pratice for arrays

let music = ["jazz", "blues"];
music.push = "R&B";
console.log(music);

if(music.length = 3){
  music.push = "Classic";
}
music.unshift = "rap";
console.log(music);
music.unshift = "acapella";
console.log(music);

//===================================================================================================================//