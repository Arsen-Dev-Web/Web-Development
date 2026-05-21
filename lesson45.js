// forEach Zangvaci metodner

// forEach()-ը չի կանգ առնում (break անել չի կարող)
//  չի վերադարձնում նոր զանգված

// forEach value index (0-45;1-4);

// let txt = '';
// let numbers = [45, 4, 9, 16, 25];

// numbers.forEach(myf);

// function myf(value, index) {
//     txt += index + '-' + value + '<br>';
// }

// document.getElementById("demo").innerHTML = txt;
// demo.innerHTML = txt;


// filter(45,25) Ֆիլտրել այն թվերը, որոնք > 18

// let numbers = [45,4,9,16,25];

// let over18 =numbers.filter(myf);

// demo.innerHTML = over18;

// function myf(value){
//     return value > 18
// }



// every(false) ստուգում է, արդյոք բոլոր թվերը > 5

// let numbers = [45,4,9,16,25];

// let x =numbers.every(myf);
// demo.innerHTML = x;
// function myf(value){
//      return value > 5
//}

// some(true) ստուգում է, արդյոք կա առնվազն մեկ թիվ > 29

    // let numbers = [45,4,9,16,25];

    // let someOver18 =numbers.some(myf);
    // demo.innerHTML =someOver18;
    // function myf(value,index,array){
    //      return value > 29;
    // }


// find գտնում է առաջին թիվը, որը < 18 
// հետո կանգնեցնում ընթացքը


    // let numbers = [25,4,16,9,25];

    // let first =numbers.find(myf);
    // demo.innerHTML = first;
    // function myf(value,index,array){
    //      return value < 18;
    // }


// findIndex-գտնում է առաջին թիվը, որը < 18,
 // և վերադարձնում դրա ինդեքսը

    // let numbers = [45,4,9,16,25];

    // let first =numbers.findIndex(myf);
    // demo.innerHTML = first;
    // function myf(value,index,array){
    //      return value < 18;
    // }


// map()-մեթոդը միշտ վերադարձնում է նոր զանգված

// let numbers = [1, 2, 3, 4, 5];

// function n(value) {
//     return value * 2;
// }
// let k = numbers.map(n);
// document.getElementById("demo").innerHTML = k.join(", ");





// խնդիր 1։ Զանգվածի միջից, հանել միայն 20-ic մեծ թվերը.


// let arr = [10, 50, 3, 80 , 45 , 47 ];

// let x = arr.filter(n => n > 20);

// console.log(x); 

// խնդիր 2։ Զանգվածի միջից, Հանել միայն զույգ թվերը





// let arr = [1, 2, 3, 4, 5, 6, 8, 234, 468 ];


// let x = arr.filter(num => num % 2 === 0);

// console.log(x); 


// խնդիր 3 Գումարել  զանգվածի ներսի արժեքները
 

// let numbers = [5, 10, 15, 567, 384, 458];
  


// let sum = 0;
// numbers.forEach(num => sum += num);
// =>-ն JavaScript-ում կոչվում է arrow function (սլաքային ֆունկցիա)։

// console.log(sum); 
 
// var k = true
//     for (var i = 2; i < 100; i ++){
//     for (var j = 2; j < i; j++){
//         if (i%j ===0){
//             k = false
//             break
//         }
//         else{
//             k=true
//         }
//     }
//     if (k == true) {
//         demo.innerHTML += i +'<br>'
//     }
// }

// let num = 2;

// while (num <= 100) {
//   let k = true;
//   let i = 2;
//   while (i <= Math.sqrt(num)) {
//     if (num % i === 0) {
//       k = false;
//       break;
//     }
//     i++;
//   }
//   if (k) console.log(num);
//   num++;
// }


    