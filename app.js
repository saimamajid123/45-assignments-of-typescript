"use strict";
// //hello world
// // let nam="Hello World";
// // console.log(nam);
// // 2//
// // let personName: string = "Eric";
// //console.log( `Hello ${personName},Would like to learn some python today?`);
// import { table } from "console";
// import { reverse } from "dns";
// import { title } from "process";
// // //3
// // let personName: string = "Mehak Alamgir";
// // //in lowercase
// //console.log("lowercase:", personName.toLowerCase());
// // //in uppercase
// //console.log("uppercase:", personName.toUpperCase());
// // //title case
//  //console.log("titlecase:", personName.replace(/\b\W/g,c=> c.toUpperCase()));
// // 4
// //  let quote: string = "A person who never made a mistake never tried anythig new.";
// //  let author: string= "Albert Einstein";
//  //console.log(`${author} once said, "${quote}"`);
// // 5
// // let famous_person:string = "Albert Einstein";
// // let quote = "A Person Who never made a mistake never tried anything new.";
// // let message: string = `${famous_person} one said,"${quote}"`;
// // console.log(message);
// // 5
// //6
// // let personName: string = "\t\n John Doe \n\t";
// //  console.log("original:", personName);
// //  console.log("stripped:", personName.trim());
// //  //7//8
// //  console.log(5+3);
// //  console.log(10-2);
// //  console.log(4+2);
// //  console.log(16/2);
//  //9
//  let favoritNumber: number = 4;
//  console.log(`My favourite number is {favoriteNumber}.`);
//  //10
//  //author: [Saima Majid]
//  //date: [ Monday , feburary 15 , 2024]
//  //task a: number = 4;
//  //reveling my favourite number in a message formate.
// //  console.log(`my favourite number is {favoriteNumber}.`);
// //  //11
// //  let names : string [] = ["Ali","Haseeb","Wajahat","Muzamil"];
// //  console.log(names[0]);
// //  console.log(names[1]);
// //  console.log(names[2]);
// //  console.log(names[3]);
//  //12
//  let names : string = [] = "[Ali","Haseeb","Wajahat","Muzamil"] ;
//  let message : string = "Do you like to play football?"
//  console.log(names[0] + " "+ message )
//  console.log(names[1] + " "+ message )
//  console.log(names[2] + " "+ message )
//  console.log(names[3] + " "+ message )
// //13
// let tranpotation : string [] = ["Honda Motocyle","Audi", "Honda City"];
// tranpotation.map((items) => console.log(`I would like to own a ${items}`));
// //14
// let guestArr : string [] = ["Ali","Haseeb","Wajahat"];
// guestArr.map((items) => (console.log(`Dear ${items} , You are invited to the dinner`)));
// //15
// let guestArr : string[] = ["Mehak", "Haseeb", "Ali", "Hamza"];
// let canNotAttend : string = "Mehak"
// console.log (canNotAttend + " " "can not attend the dinner.")
// let newGuest : string = "Alishba"
// guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
// // console.log(guestArr)
// guestArr.map((items) =>
// console.log(`Dear ${items},You are invited to the dinner`)
// )
// //16
// let guestArr : string[] = ["Alishba","Haseeb","Ali","Hamza"];
// let canNotAttend : string ="Ali"
// let newGuest : string = "Wajahat"
// guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr)
// guestArr.map((items) =>
// console.log(`Dear ${items}, I found a bigger dinner table so I am invited more peoples.`)
// );
// //17
// // inital list of guests
// let guests: string[] = ["Ali","Bilal"];
// // informing that only tow people can be invited
// //console.log("Due to limited space,only tow people can invited for dinner.");
// // // Removing guests until only tow name remain
// // while (guests.length > 2) {
//  //   const removedGuest = guests.pop(); 
//  //   console.log('Sorry, ${removedGuest}, You're no longer invited to dinner.);
// // }
// // // printing invitations to the remaining two guests
//  guests.forEach((guest) => {
//     console.log(`Dear ${guest}, You 're still invited to dinner.`);
// });
// // // Removing the last tow name from the list
//  guests.pop();
//  guests.pop();
// // // printing the final list to confirm it's empty
//  console.log("Final guest list:", guests);
//  //18
//  // store the locations in an array
//  let PlacesToVisit: string[] = ["Tokyo","Pakistan","America","China","Japan"];
//   // print  the array in its original order
//   console.log("Original order",PlacesToVisit);
//   // print that the array in alphabetical order without modifying the actual list
//   console.log("Alphabetical order:", [...PlacesToVisit].sort());
//   // show the array is still in its original order
//   console.log("Original order after sorting:", PlacesToVisit);
//   // print the array is reverse alphabetical order without changing the order of the original list
//   console.log("Reverse alphabetical order:", [...PlacesToVisit].sort().reverse());
//   // Show that the array is still in its original order
//   console.log("Original order after reverse sorting:", PlacesToVisit);
//   // // Reverse the order of the list
//    PlacesToVisit.reverse();
//   console.log("Reversed order:", PlacesToVisit); 
//   // // reverse the order of the list again to get back to tha original order 
//    PlacesToVisit.reverse();
//    console.log("Back to original order:", PlacesToVisit);
//   // //sort the array in alphabetical order 
//    PlacesToVisit.sort();
//     console.log("Sorted in alphabetical order:", PlacesToVisit);
//   // // Sort the array in reverse alphabetical order 
//    PlacesToVisit.sort((a, b) => b.localeCompare(a));
//    console.log("Sorted in reverse alphabetical order:" , PlacesToVisit);
//    //19
//    let invitations : string [] = ["Ali", "Bila"] 
//    let count_invitations : number = invitations.length
//    console.log(`${count_invitations} people will come to the dinner`)
//    //20
//    //think of something you could store in a array. For example,you coul make a list 
//    //of mountains, rivers, clties, languages, or anything else you'd like.
//    //write a program that creates a list containing these items.
//    let country: string [] = ["pakistan","india","Newyork","japan","china"]
//    console. log("List of country:");
//    console.log(country);
//    //21
//    let person: {name: string, fname: string , age: number} = {name:"Mehak", fname: "female" , age: 27}
//    console.log(person)
//    //22
//    const days : string [] = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
//    //console.log(days{7})
//    console.log(days[7])
//    //23
//    let car = "subaru"
//    console.log("is car == 'subaru' ? predict  true")
//    console.log(car == 'subaru')
//    console.log("is car != 'honda city'? predict true")
//    console.log(car != 'honda city')
//    console.log("is car == 'subaru'? predict false")
//    console.log(car == 'subaru')
//    console.log("is car == 'SUBARU'? predict false")
//    console.log(car == 'SUBARU')
//    console.log("is car.length == 6? predict true")
//    console.log(car.length == 6)
//    console.log("is car.length != 10? predict true")
//    console.log(car.length != 10)   
//    console.log("is 10 > 45 ? predict false")
//    console.log(10 > 45)
//    console.log("is 3 <= 2 ? predict false")
//    console.log(3 <= 2)
//    console.log("is 72 >= 83 ? predict false")
//    console.log(72 >= 83)
//    console.log("is car == 'subaru' && car.length == 6? predict true")
//    console.log(car == 'subaru' && car.length == 6)
//    //24
//    let name_1 : string = "saima"
//    let name_2 : string = "saima majid"
//    let name_3 : string = "miss saima majid"
//    if (name_1 == name_3){
//        console.log("name are egual")
//    } else {
//        console.log("name are not equal")
//    }
//    if (name_1 != name_2){
//       console.log("name are not equal")
//    }
//    if (name_1 != name_3){
//     console.log("name are not equal")
//    }
//    let age_1 : number = 18
//    let gee_2 : number = 22
//    if (age_1 == 18) {
//       console.log("eligible for vote")
//    }
//    if (age_1 != 22) {
//     console.log("eligible for vote in older category")
//    }
//    if (age_1 <= age_2){  //less
//        console.log("younger")
//    }
//    if (age_2 <= age_1){   //greater
//     console.log("older")
//    }
//    if (age_1 == 18 && age_2 == 22) {
//        console.log(" person is eligible for vote")
//    }
//    if (age_1 == 18 || age_2 != 22) {
//     console.log(" person is eligible not for vote")
//    }
//    let country : string [] = ["pakistan","india","japan","china"]
//    if (country.includes("pakistan")){
//        console.log("pakistan is in country list")
//    }
//    if (!country.includes("america")){
//       console.log("america is not include in an array")
//    }
//    //25
//   // let alien_color = "green"
//   // if (alien_color == "green")
//  //  console.log( "you earn 5 points")
//    let alien_color : string = "red"
//    if (alien_color == "green")
//    console.log("no output")
//    //26
//      let alien_color = "green"
//      if (alien_color == "green") {
//  //  console.log( "player just earned 5 points for shooting the alien")
//      }else{
//         console.log("player just earned 10 points")
//      }
//      let alien_color = "red"
//      if (alien_color == "green") {
//  //  console.log( "player just earned 5 points for shooting the alien")
//      }else{
//         console.log("player just earned 10 points")
//      }
//      //27
//      let alien_color: string = "red"
//      if (alien_color == "green") {
//         console.log("5 points")
//      } else if (alien_color == "yellow") {
//         console.log("10 points")
//      } else {
//         console.log("15 points")
//      }
//      //28
//      let age : number = 100
//      if (age < 2) {
//       console.log("you are a baby")
//      } else if (age < 4) {
//       console.log("you are a toddler")
//        } else if (age < 13) {
//       console.log("you are a kid")
//      } else if (age < 20) {
//       console.log("you are a teenager")
//      } else if (age < 65) {
//       console.log("you are a adult")
//      } else {
//       console.log("you are older")
//      }
//      //29
//      let favourite_fruits : string [] = ["kivi","orange","apples","berry","peach"]
//      if  (favourite_fruits.includes("kivi")) {
//       console.log("kivi")
//      }
//      if (favourite_fruits.includes("apple")) {
//       console.log("apple")
//      }
//      if (favourite_fruits.includes("orange")) {
//       console.log("orange")
//      }
//      if (favourite_fruits.includes("berry")) {
//       console.log("you really like bananas")
//      }
//      if (favourite_fruits.includes("peach")) {
//       console.log("you really like bananas")
//      }  
//      //30
//      let users : string [] = ["eric","haseeb", "ali", "fatima","admin"]
//      for(let user of users){
//       if (user === "admin") {
//          console.log("Hello admin, would you like to see a status report?")
//       } else  {
//          console.log(` Hello ${user}, thank you for logging in again`)
//       }
//      }
//      //31
//      let user : string [] = ["eric","haseeb", "ali", "fatima","admin"]
//      if (users.length === 0) {
//       console.log("we need to find some users!")
//      } else {
//       for (let user of users) {
//          if ( user === "admin") {
//             console.log("Hello admin, would you liketo see a status report?")
//          } else {
//              console.log(`Hello ${user}, thank you for logging in again`)
//          } 
//       }
//      }
//      user = []
//      if (users.length === 0) {
//       const.log("we need to find some users!")
//      }
//      //32
//      let current_users : string [] = ["Admin", "Eric" , "Ali", "Hamza", "Fatima"]
//      let new_users : string [] = ["Admin" , "Fatima", "Aliza" ,"Haseeb", "Noor"]
//      let current_users_lower : string [] =current_users.map(user => user.toLowerCase())
//      for (let new_users of new_users) {
//       if (current_users_lower.includes (new_user.toLowerCase())) {
//          console.log(`sorry ${new_users}, that name is taken`)
//       } else {
//          console.log(`yes ${new_user}, is still in avaliable list`)
//       }
//      }
//      //33
//      let numbers : number [] =[1,2,,3,4,5,6,7,8,9]
//      for (let number of Numbers) {
//       if (number === 1) {
//          console.log (`${number}st`) //1s
//       } else if  (number === 2) {
//          console.log(`${number}nd`) //2nd
//       } else if  (number === 3) {
//          console.log(`${number}rd}`) //3rd
//       } else {
//          console.log(`${Number}th`) //4th , 5th , 6th , 7th , 8th ,9th
//       }
//      }
//      //34
//      iet favourite_pizza : string [] = ["pepperoni" , "chicken" , "veg"]
//      for (let pizza of favourite_pizza) {
//       console.log(pizza)
//      }
//      console.log("\n")
//      for (let pizza of favourite_pizza){
//       console.log(` I really like ${pizza} pizza`)
//      }
//      console.log ("nI really love pizza")
//       //35
//       let animals : string [] = ["cat","lion","dog"]
//       for (let animals of animals) {
//          console.log(animal)
//       }
//         console.log("\n")  
//         for (let animal of animals){
//          console.log( ` A ${animal} has a l tail`)
//         }
//         console.log("\n all of these are great pets! but i love cats more")
//         //36
//         function makeShirt( size: string, text: string): void {
//          console.log(`you order a ${size} shirt that says ${text}`)
//         }
//         makeShirt('large','"i love typescript"')
//         makeShirt('medium','"i need a big shirt"')
//         //37
//         function makeShirt(size: string = 'large', text: string = ' I love typescript'): void {
//          console.log(`you have order a ${size}, shirt that says ${text}`)
//         }
//        // makeShirt();
//        // makeShirt('medium')
//       // different message
//       makeShirt('small', 'I need a big shirt to wear')
//       //38
//       function describe_city(city: string, country: string = 'pakistan'): void {
//          console.log(`${city} is in ${country}`)
//       }
//       describe_city('karachi') //defauit sentence
//       debugger('france', 'europe')
//       describe_city('lahore', 'punjab')
//       //39
//       function cityCountry(city: string, country: string): string {
//          return `${city}, ${country}`
//       }
//       let c1 = cityCountry('lahore' , 'pakistan')
//       let c2 = cityCountry('tokyo' ,'japan')
//       let c3 = cityCountry('paris', 'france')
//       console.log(c1)
//       console.log(c2)
//       console.log(c3)
//       //40
//       function makeAlbum (artist: string, title: string): { artist string; title: string} {
//          const dictionaries = {
//             artist: addAbortListener.charAt(0).toUpperCase() + artist.slice(1),
//             title: title.charAt(0).toUpperCase() + title.slice(1)
//          };
//          return dictionaries;
//       }
//       let album = makeAlbum("ali" ,"light")
//       console.log(album)
//       album = makeAlbum("bilal" ,"red wave")
//       console.log(album)
//       album = makeAlbum("hamza" ,"seenbreez")
//       console.log(album)
//       //41
//       function  show_magicians(magicians: string[]): void {
//          for (const magician of magicians) {
//             console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
//          } 
//       } 
//       const magician: string[] = ["ali","hamza","bilal"];
//       show_magicians(magician)
//       //42
//       function make_great(mogicians: string[]): void {
//          for (let i = < mogicians.length; i++) {
//             mogicians[i] = mogicians[i]  + ' the geat'
//          }
//       }
//       const magician2: string[] = ["usman","haseeb","wajahat"];
//       make_great(magician2)
//       show_magicians(magician2)
//       //43
//       function make_great2(mogicians: string[]): string[] {
//          const make_great2: string[] = [];
//          for (let i = 0; i < show_magicians.length; i++) {
//             greatMagicians.push(mogicians[i] + ' the great');
//          }
//          return greatMagicians;
//       }
//       const magicians3: string[] = ["usman","haseeb","wajahat"];
//       const greatMagicians2: string[] = make_great2(magicians3);
//       show_magicians(magicians3);
//       show_magicians(greatMagicians2);
//       //44
//       function sandwich(...items: string[]): void {
//          console.log("sandwich order")
//          for (let i = 0; i < items.length; i++) {
//             console.log(` - ${items[i]}`)
//          }
//       }
//       console.log("enjoy your sandwich saima majid")
//       sandwich('capsicum' , 'tomato' , 'chicken')
//       sandwich('beef' , 'cheese')
//       sandwich('garlic chicken' , 'mayo sauce')   
//       //45
//       //task 1
//       // installation completed
//       type car = {
//          manufacture: string
//          [key: string]: any;
//       }
//       function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
//          return{
//             manufacture,
//             model,
//             ...optional
//          }
//       }
//       const mycar: car = createCar("toyota" , "corolla" , { color: "sillver" , year: "2024"} )
//       console.log(mycar)
//       //task 1
//       // insstallation completed
