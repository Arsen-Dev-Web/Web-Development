// Zangvacner
// Zangvaci metodner

// 1. concat() - iarar e miacnum zangvacnery;
// 2. join() - zangvaci storaketnery poxum e ir nersum
// grvac sinvolov;
// 3. sort() - sortavorum e zangvaci nersi elementnery
// 4. reverse() - zangvacy veradardznum e hakarak uxxutyamb
// 5. slice() - veradardznum e mijakayq, copy-i e anum;
// 6. splice() - veradardznum e mijakayq(ktrum, hanum e),
// karox enq nayev voreve nor arjeq avelacnel;
// 7. pop() - ktrum e zangvaci verjin elementy;
// 8. push() - avelacnum e zangvaci verjic;
// 9. shift() - ktrum e zangvaci 1in elementy;
// 10. unshift() - avelacnum e zangvaci dimacic;
// 11. indexOf() - cuyc e talis nshvac arjeqi indexy
// 12. fill() - zangvaci bolor arjeqnery poxum e ir nersum
//  grvac arjeqov;
// 13. length() - veradardznum e elementnri yndhanur qanaky;

// concat()

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let c = arr1.concat(arr2);
// console.log(c);

// function myf() {
//   var fruits = ["banana", "orange", "apple"];
//   demo.innerHTML = fruits.join("-");
// }

// var fruits = ["banan", "kivi", "apple"];
// var k = fruits.keys();
// for (var x of k) {
//   // վերցնում է արժեքները (ոչ թե index-ները)
//   // և հերթով պահում է x փոփոխականի մեջ։
//   demo.innerHTML += x + "<br>";
// }

// var fruits = ["banan", "kivi", "apple"];
// {
//   demo.innerHTML = fruits.reverse();
// }

// function myf() {
//   var fruits = ["banana", "orange", "apple"];
//   demo.innerHTML = Array.isArray(fruits);
// }

// var fruits = ["banana", "orange", "apple"];
// demo.innerHTML = fruits;
// function myf() {
//   fruits.pop();
//   demo.innerHTML = fruits;
// }

// var fruits = ["banana", "orange", "apple"];
// demo.innerHTML = fruits;
// function myf() {
//   fruits.push("qivi");
//   demo.innerHTML = fruits;
// }

// var fruits = ["banana", "orange", "apple"];
// demo.innerHTML = fruits;

// function myf() {
//   fruits.shift();
//   demo.innerHTML = fruits;
// }

// var fruits = ["banana", "orange", "apple"];
// demo.innerHTML = fruits;

// function myf() {
//   fruits.unshift("lemon", "pinaple");
//   demo.innerHTML = fruits;
// }

// function myf() {
//   var fruits = ["banana", "apple", "lemon", "orange", "mango"];
//   var citrus = fruits.slice(2, 4);
//   demo.innerHTML = citrus;
// }

// var fruits = ["banana", "orange", "apple"];
// demo.innerHTML = fruits;

// function myf() {
//   fruits.sort();
//   demo.innerHTML = fruits;
// }

// let arr = [2, 5, 3, 1, 7, 4, 9];
// demo.innerHTML = arr;
// function myf() {
//   arr.sort();
//   demo.innerHTML = arr;
// }

// let arr = [2, 5, 3, 1, 7, 4, 9];
// let k = arr[0];
// for (var i = 0; i < arr.length; i++) {
//   arr.sort();
//   demo.innerHTML += arr[i] + "<br>";
// }

// var fruits = ["banana", "orange", "apple", "pinaple", "mango"];
// demo.innerHTML = fruits;

// function myf() {
//   fruits.splice(2, 3, "qivi", "lemon");
//   demo.innerHTML = fruits;
// }

// function myf() {
//   var fruits = ["banana", "orange", "apple"];
//   demo.innerHTML = fruits.indexOf("orange");
// }

// // Xndir 1 - Zangvaci nersum avelacnel '|' nshany;

// let arr = ['barev',6,77,'hello',1,0,8,'lusin'];

// // let arr = ['barev', 6, 77, 'hello', 1, 0, 8, 'lusin'];
// // arr.unshift('|');
// // console.log(arr);

// // let arr = ['barev', 6, 77, 'hello', 1, 0, 8, 'lusin'];
// // arr.push('|');
// // console.log(arr);

// // Xndir 2 - Sortavorel zangvaci nersi arjeqnery;

// let arr = [500,6,77,1,0,8,81,12,13,44,63];

// let k =arr[0]
// for (let i = 0; i < arr.length; i++) {
//  if(arr[i].length - k.length){
//      k=arr[i]
//      arr.sort()
//      demo.innerHTML += k + '<br>'

//  }
// }

// let arr = [500, 6, 77, 1, 0, 8, 81, 12, 13, 44, 63];
// arr.sort((a, b) => a - b);
// console.log(arr);

// // Xndir 3 - Unenum enq 2 zangvac, meky mnum e datark, myusi
// // nersum linum en drakan ev bacasakan tver, petq e 2rd zangvaci nersi
// //  miayn drakan tvery avelacnel datark zangvaci mej;

// let a = [];
// let b = [3.5, -2, 12.0, 7.25, -10];

// for (let i = 0; i < b.length; i++) {
//   if (b[i] > 0) {
//     a.push(b[i]);
//   }
// }
// console.log(a);

// // Xndir 4 ( Gtnel amenaerkar bar@)

// let arr = ['hello', 'hi', 'buybuyasdas', 'barev', 'ok'];

// let k = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//   if (k.length < arr[i].length) {
//     k = arr[i];
//     demo.innerHTML += k + '<br>';
//   }
// }

// // Xndir 5 gtnel tvery

//         let arr = [3, 4, 0, 'hello', true, 55, 3, 'bye'];

//     for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == 'number') {
//       demo.innerHTML +=arr[i]  + '<br>'
//     }
// }

//  let x = [ 44, 8, 57, 929];
// let y = x[0]
//  demo.innerHTML += y + '<br>';

//  let x = [ 44, 8, 57, 929];
//  let y = x[2]
//  demo.innerHTML += y + '<br>';

//  let x = [ 44, 8, 57, 929];
//  x[2] = 9;
//  demo.innerHTML += x + '<br>';

//  let x = [ 44, 8, 57, 929];
//  let y = x.length;
//  demo.innerHTML += y + '<br>';

// // ( Gtnel amenaerkar bar@)
// let arr = ['hello', 'hi', 'buybuyasdas', 'barev', 'ok'];
// let k = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (k.length < arr[i].length) {
//     k = arr[i];
//     demo.innerHTML += k + '<br>';
//   }
// }

//     let arr = [3, 4, 0, 'hello', true, 55, 3, 'bye'];

//     for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == 'number') {
//       demo.innerHTML +=arr[i]  + '<br>'
//     }
// }
