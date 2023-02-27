//                                                                          Section-1(Play with Variables)
console.log(1+2);
console.log("apple"+"orange");
console.log(1+2+"apple");
console.log("apple"+1+2);
console.log(1+true);
console.log(0==false);
console.log(1==true);
console.log(2=="2");

//                                                                          Section-2 (Play with Arrays)
Players=["Warner","Khawaja","Marnus","Smith","Head","Alex","Lyon","Cummins","Murphy","Zampa","Starc"]

//1.List 11 players
console.log(Players);

//2.Remove an player
for(var index=0;index<Players.length;index++){
    if(Players[index]==="Marnus"){
        var spliced=Players.splice(index,1);
        console.log("Removed player: "+spliced);
        console.log("Remaining elements "+Players);
    }
}

//3.Number of players
console.log(Players.length);

//4.Add another player 
Players.push("maxwell");
console.log(Players);

// 5.sort the Players 
Players.sort()
console.log("Sorted players:"+Players);

//6.Display all the Players name and assign a random jersey number. For example. MS Dhoni-7
for(let index in Players ){
    var random_number = Math.floor(Math.random() * 20);
    console.log(Players[index]+"-"+random_number);
}

//7.The cricket board wants to print the names of all players in uppercase and store it in a different location for printing jerseys. Do not modify the existing players list.
const jersey=Players.map(Players => Players.toUpperCase())
console.log(jersey)

//                                                                      Section-3(Play with functions)
//1. Create a function to display numbers from 1 to 100.
function Numbers(min,max){
    for(var index=min;index<=max;index++){
        console.log(index)
    }  
}
Numbers(1,100);

//2.Create a function to display today's date in DD/MM/YYYY format
function DateofBirth(date){
    console.log(date);

}
DateofBirth(new Date());

//3.Create a function which accepts a Celsius value as parameter and returns the Fahrenheit value.
function CelToFah(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}
CelToFah(20);

//4. Create a function which accepts an array of numbers as parameter and return the average of those numbers.
function AvgNum(array){
    var sum = 0,length=0;
    array.forEach(x => {
        sum += x;
        length++;
    });
    console.log("The average is : "+(sum /length));
}
AvgNum([10,20,30,40,50]);

//5.Create a function to reverse a given string.
function reverseString(str) {
    var splitString = "hello".split("");
    var reverseArray = splitString.reverse();  
    var joinArray = reverseArray.join("");   
    console.log(joinArray);
}
reverseString("hello");






