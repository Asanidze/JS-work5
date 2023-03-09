"use strict";

// 1.

// let array = [12, 25, 3, 6, 8, 14, 7, 23];

// let newArray = array.map(function(item){
//     return item /= 3;
// })

// console.log(newArray);


// 2.

// let languages = ['html', 'css', 'javascript', 'python', 'php'];

// let newLanguages = languages.filter(function(item){
//     return item.length > 3;
// })

// console.log(newLanguages);




// 3.

// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

// let newWords = words.filter(function(item){
//     return item.includes("m") || item.includes("M");
// })

// console.log(newWords);



// 4.

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// let newArray = arr1.concat(arr2).concat(arr3);
// console.log(newArray);


// 5.

// let arr = [-1, -2, -3, 4];

// let newArr = arr.some(item => item > 0);

// console.log(newArr);


// 6.

// let array =[23,45,32,5,87,7,3,98];

// let newArray = array.sort(function(x,y){
//     return y - x; 
// })

// console.log(newArray[newArray.length - 1]);



// 7.

// let newDiv = document.createElement("div");
// newDiv.setAttribute("class","wraper");

// let newImg = document.createElement("img");
// newImg.setAttribute("src","https://media.istockphoto.com/id/825383494/photo/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-problems-concept.jpg?s=612x612&w=0&k=20&c=wtqvbQ6OIHitRVDPTtoT_1HKUAOgyqa7YzzTMXqGRaQ=");
// newImg.setAttribute("alt","image");


// let newH2 = document.createElement("h2");
// newH2.classList.add("title");
// newH2.textContent = "image title";
// newH2.style.color = "red";
// newH2.style.fontSize = "30px";

// newDiv.appendChild(newImg);
// newDiv.appendChild(newH2);

// document.getElementById("id-div").appendChild(newDiv);



// 8.

// ---------------------------------------------

// let newPtext = document.createElement("p");
// newPtext.classList.add("text");
// newPtext.innerText = "hello";

// let boxes = document.querySelectorAll(".hello-text");


// for (let i = 0; i < boxes.length;i++){
//     boxes[i].appendChild(newPtext);
// }

// ---------------------------------------------


// 9.

// let array=[2,15,10,24];

// array.splice(2,1);

// console.log(array);