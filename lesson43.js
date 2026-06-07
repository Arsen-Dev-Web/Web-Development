// String մեթոդներ

// charAt- Ընտրում է տառը տրված ինդեքսով (թվեր սկսվում են 0-ից)

// function myf() {
//   var str = "HELLO WORLD";
//   var res = str.charAt(8);
//   document.writeln(res);
// }
// charCodeAt- Տրվում է տառի  Unicode կոդը։

// function myf() {
//   var str = "HELLO WORLD";
//   var res = str.charCodeAt(0);
//   document.writeln(res); // Output: 72 (ASCII for 'H')
// }
// concat-Միացնում է երկու տող։

// function myf() {
//   var str1 = "HELLO ";
//   var str2 = "WORLD";
//   var res = str1.concat(str2);
//   document.writeln(res);
// }

// endsWith Ճշտում է, արդյոք տողը ավարտվում է նշված ենթատողով։
// function myf() {
//   var str = "Hello world, welcome to the universe";
//   var res = str.endsWith("universe");
//   document.writeln(res);
// }

// function myf() {
//   var str = "Hello 1111, welcome to the universe";
//   var res = str.includes("222");
//   document.writeln(res); // Output: true/false
// }
// indexOf-Վերադարձնում է առաջին հանդիպման ինդեքսը

// function myf() {
//   var str = "Hello 1111, welcome to the universe";
//   var res = str.indexOf("welcome");
//   document.writeln(res); // Output: 12 (or wherever it starts)
// }
// length-Տողը քանի տառ ունի, ցույց է տալիս։

// function myf() {
//   var str = "HELLO WORLD";
//   var res = str.length;
//   document.writeln(res);
// }
// repeat- Տողը կրկնվում է n անգամ։

// function myf() {
//   var str = "hello world <br>";
//   var n = str.repeat(4);
//   document.writeln(n);
// }
//    replace-Փոխում է առաջին հանդիպած «hello»-ն «Hi»-ով։

// var str = "hello world";
// document.writeln(str);

// function myf() {
//   var res = str.replace("hello", "Hi");
//   document.writeln(res);
// }
//   slice-Կտրում է տողը սկսած start-ից մինչև end
//  (մինչև, բայց առանց end-ի)։

var str = "hello world";
document.writeln(str);

function myf() {
  var res = str.slice(0, str.length - 3) + str.slice(str.length - 2);
  document.writeln(res);
}
//  startsWith- Ճշտում է, արդյոք տողը սկսվում է նշված ենթատողով։

//     function myf(){
//     var str = "How are you doing today?";
//     var n =str.startsWith("How");
//     document.writeln(n);
//  }
// toLowerCase() – Տողի բոլոր տառերը փոքրատառ դարձնել

// function myf() {
//     var str = "HELLO WORLD";
//     var res = str.toLowerCase();
//     document.writeln(res);
// }

// toUpperCase() – Տողի բոլոր տառերը մեծատառ դարձնել
// function myf() {
//     var str = "hello world";
//     var res = str.toUpperCase();
//     document.writeln(res);
// }
// trim() – Ջնջել ավելորդ բացատները սկզբից և վերջից
// function myf() {
//     var str = "    hello world    ";
//     var res = str.trim();
//     document.writeln("[" + res + "]");
// }
// trimStart() – Ջնջել բացատները միայն սկզբից
// function myf() {
//     var str = "    hello world";
//     var res = str.trimStart();
//     document.writeln("[" + res + "]");
// }

// trimEnd() – Ջնջել բացատները միայն վերջից
// function myf() {
//     var str = "hello world    ";
//     var res = str.trimEnd();
//     document.writeln("[" + res + "]");
// }
