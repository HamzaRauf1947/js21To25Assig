//todod chapter 21
//? Question 1)
// let us1 = prompt("Enter first name");
// let us2 = prompt("Enter second name");

// let fullName = `${us1} ${us2}`
// console.log(`Welcome ${fullName}`);


//? Question 2)
// let phoneModel = prompt("Enter your favourite mobile model");
// console.log(`My favourite phone is ${phoneModel} Lenght of string is ${phoneModel.length}`);


//? Question 3)
// let userInput = prompt("Enter any name you want to store:");
// let userSearch = prompt("What do u want to search:");
// let ans = userInput.indexOf(userSearch);
// console.log(`Index of ${userSearch} is ${ans}`);



//? Question 4)
// let userInput = prompt("Enter any name you want to store:");
// let userSearch = prompt("What do u want to search:");
// let ans = userInput.lastIndexOf(userSearch);
// console.log(`Index of ${userSearch} is ${ans}`);

//? Question 5)
// let userInput = prompt("Enter any name you want to store:");
// let userSearch = +prompt("Write index number:");

// for (let i = 0; i < userInput.length; i++) {
//     if(i==userSearch){
//         console.log(`Character at index ${i} : ${userInput[i]} `);
//     }
// }

//*                                             OR                                          ///*
// let ans = userInput[userSearch];
// console.log(`Character at index ${userSearch} : ${ans} `);

//? Question 6)
// let us1 = prompt("Enter first name");
// let us2 = prompt("Enter second name");
// let ans = us1.concat(" ",us2)
// console.log(ans);



//? Question 7)
// let city = prompt("Enter City name");
// let cityToReplace = prompt("Enter the replace city name");
// console.log(`city ${city}`);
// let ans = city.replace(city,cityToReplace)
// console.log(`After replacement: ${ans}`);

//? Question 8)
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// let ans = message.replaceAll("and","&");
// console.log(ans);


//? Question 9)
// let str = "472";
// console.log(`value: ${str}\ntype: ${typeof str}`);
// let strToNum = Number(str);
// console.log(`value: ${str}\ntype: ${typeof strToNum}`);

//? Question 10)
// let us1 = prompt("Enter any name");
// console.log(`userInput : ${us1}`);
// let ans = us1.toUpperCase();
// console.log(`UpperCase : ${ans}`);

//? Question 11)
// let str = prompt("Enter any name:");
// let split = str.split(" ");
// var text = "";
// for (let i = 0; i < split.length; i++) {
//      text = text + split[i][0].toUpperCase() + split[i].slice(1).toLowerCase()+" ";    
// }
// console.log(text);

//? Question 12)
// let num = 35.36;
// let str = num.toString();
// let ansStr = str.replace(".","");
// let newAns = parseInt(ansStr);
// console.log( newAns);

//? Question 13)

// let userName = prompt("Enter your user name");
// let isName = false;
// for (let i = 0; i < userName.length; i++) {
//      let charcode = userName.charCodeAt(i)
//   if(charcode === 38 || charcode === 33 || charcode === 44 || charcode === 46 || charcode === 64){
//      alert(`Invalid User Name! You're using ${String.fromCharCode(charcode)}`);
//      isName = true;
//      break;
//   }
// }

// if(isName == false){
//      console.log(`Welcome ${userName}`);
// }

//? Question 14)
// let user = prompt("Welcome to picric bakery what do u want to order ");
// let userChange = user.toLowerCase();
// let A = ["cake","apple pie","cookie","chips","patties"];

// let isAvailable = false;
// for (let i = 0; i < A.length; i++) {
//      if(userChange == A[i]){
//           console.log(`${A[i]} is available at index ${i} in our bakery`);
//           isAvailable = true;
//           break;
//      }
// }
// if(isAvailable == false){
//      console.log(`${userChange} is not available`);
// }



//? Question 15)




// let user = prompt("Enter Password");
// let AZ_az_oto9 = [];
// let num = []
// for (let i = 65; i <= 90; i++) {
//     AZ_az_oto9.push(String.fromCharCode(i));
// }

// for (let i = 97; i <= 122; i++) {
//     AZ_az_oto9.push(String.fromCharCode(i));
// }

// for (let i = 48; i <= 57; i++) {
//     AZ_az_oto9.push(String.fromCharCode(i));
//     num.push(String.fromCharCode(i));
// }

// console.log(`Entered Password: ${user}`);

// //* check password lenght
// if(user.length<6){
//     console.log(`!Password should contain at least 6 size character`);
    
// }


// //* checking First char is number or not
// let isFirstNum =false; 
// for (let i = 0; i < num.length; i++) {
//   if (user[0]==num[i]) {
//     isFirstNum = true;
//     break;
//   }
  
// }

// if(isFirstNum){
//     console.log(`!First character can't be Number user alphabets`);
// }


// //*checking user is enter alphabets or number 
// let isCorrect = true; 
// let ccc ;
// for (let i = 0; i < user.length; i++) {
//     let found = false; 
//     for (let j = 0; j < AZ_az_oto9.length; j++) {
//         if(user[i] == AZ_az_oto9[j]){
//             found = true;
//             break;
//         }
//     }
//     if (found == false) { 
//         isCorrect = false;
//         ccc=user[i];
//         break;
//     }
// }

// if(isCorrect == false){
//     console.log(`!Password should contain alphabets or number not a ${ccc}`);
// }

// if(user.length<6 || isFirstNum == true || isCorrect ==false){
//     console.log(`Please enter a valid Passsword`);

// }else{
//     console.log(`Password is correct`);
// }


//? Question 16)
// let uni = "University of Karachi";
// let ansSplit = uni.split("");
// for (let i = 0; i < ansSplit.length; i++) {
//   for (let j = 0; j < ansSplit[i].length ; j++) {
//    document.write(ansSplit[i][j] +"<br>");
    
//   }
  
// }

//*                                                    OR                                                         //*

// var university = "University of Karachi";
// var universityArray = university.split("");

// for (var i = 0; i < universityArray.length; i++) {
//     document.write(universityArray[i] + "<br>");
// }


//? Question 17)
// let userinp = prompt("Enter name");
// console.log(`User Input : ${userinp}`);
// let length = userinp.length - 1;
// console.log(`Last Character : ${userinp[length]}`);


//? Question 18)

// let sent = "The quick brown fox jumps over the lazy dog";
// let sentAd = sent.toLowerCase();
// let sentArr = sentAd.split(" ");
// let search = prompt("Enter the value which u want to search: "); 
// let searchAd = search.toLowerCase();
// let count = 0;
// let isFound = false;
// for (let i = 0; i < sentArr.length; i++) {
//   if(searchAd == sentArr[i]){
//     count++;
//     isFound = true;
//   }
// }
// if(isFound == false){
//     console.log(`${search} is not found`);
// }else{
//     console.log(`Text: ${sent}\nThere are ${count} occurence of word '${searchAd}'`);
// }