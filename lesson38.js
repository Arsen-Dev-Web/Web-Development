// Ցիկլեր- գործողություն ,որ պետք է կատարվի նշված միջակայքում,

// i ++ -inqrement,տվյալ թիվը մեկով ավելացնում է
// i -- -disqrement,տվյալ թիվը մեկով պակասեցնում է

// խնդիր 1

//  ցիկլի օգնությամբ տպել 1-ից 100 թվերը

for (let i = 1; i <= 100; i++) {
  document.writeln(i);
}

// խնդիր 2

//  ցիկլի օգնությամբ տպել 100-ից 1 թվերը

for (let i = 100; i > 1; i--) {
  document.writeln(i);
}

//  խնդիր 3

// ցիկլի օգնությամբ տպել 1-ից 100 kent թվերը

for (let i = 1; i < 100; i = i + 2) {
  document.writeln(i);
}

//    խնդիր 4

// ցիկլի օգնությամբ տպել 1-ից 100 zuyg թվերը

for (let i = 0; i < 100; i = i + 2) {
  document.writeln(i);
}

// խնդիր 5

// ցիկլի օգնությամբ տպել 1-ից 100 թվերը,
// որ բաժանվի 2-ի,որ չբաժանվի 5-ի,

for (let i = 1; i < 100; i++) {
  if (i % 2 === 0 && i % 5 !== 0) {
    document.writeln(i);
  }
}

//  1-in tpel 50 hat div, aynpes anel,vor 25-rd@ lini karmir

// for (let i = 1; i <= 50; i++) {
//   if (i === 25) {
//     document.write(
//       '<div style="width:100px; height:100px; background-color:red; color:white; display:flex; margin:5px; text-align:center; line-height:50px; font-weight:bold; border-radius:5px;">' +
//         i +
//         "</div>",
//     );
//   } else {
//     document.write(
//       '<div style="width:100px; height:100px; background-color:blue; display:flex; margin:5px; text-align:center; line-height:50px; font-weight:bold; border-radius:5px;">' +
//         i +
//         "</div>",
//     );
//   }

//  2-in tpel 50 hat div, aynpes anel,vor 5-rd@ lini karmir
// }
// for (let i = 1; i <= 50; i++) {
//   if (i % 5) {
//     document.write(
//       '<div style="width:100px; height:100px; background-color:blue; color:white; display:inline-block; margin:5px; text-align:center; line-height:50px; font-weight:bold; border-radius:5px;">' +
//         i +
//         "</div>",
//     );
//   } else {
//     document.write(
//       '<div style="width:100px; height:100px; background-color:red; display:inline-block; margin:5px; text-align:center; line-height:50px; font-weight:bold; border-radius:5px;">' +
//         i +
//         "</div>",
//     );
//   }
// }

let k = 1;
for (var i = 1; i <= 5; i++) {
  k = k * i;
  document.writeln(k);
}
// 1 * 2 = 2
// 2 * 3 = 6
// 6 * 4 = 24
// 24 * 5 = 120
