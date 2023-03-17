//1
rr1 = [3,7,34,90,12]
arr2 = [true, "green", "where",12,56]
console.log(rr1.slice(-1));
console.log(arr2.slice(-1));
//2.Write a JS program that will join the following a
//rray elements into a string
myPets = ["Cow", "Python", "Snake", "Dog"];
console.log(myPets.toString());
//3Write a JS script to sort the following array items
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
console.log(arr3.sort());
//4.Write a program to remove duplicates from the following array.
//Console the array without duplicates, and console another array that only contains the duplicates
var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
var finalList=[];
arr.forEach(letter=> {
    if(!finalList.includes(letter)){
        finalList.push(letter)
    }
    
})
console.log(finalList);

//5.f the word is present, console it else console "the search word was not found"

let arr5 = ["the", "way", "x", 4, 23];
if(arr5.includes(4)){
    console.log(4);
}else{
    console.log("the search word was not found");
}

//6.let word = "lufituaeb";

let word = "lufituaeb"
let words=word.split("");
words.sort();
console.log(words.join(""));



