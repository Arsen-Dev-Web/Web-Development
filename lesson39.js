// Loops/Ցիկլներ

// Ցիկլները հնարավորություն են տալիս ավտոմատացնել կրկնվող գործողությունները:
// Դրանք հատկապես օգտակար են, երբ պետք է իրականացնել միևնույն գործողությունները
//  մի շարք տվյալների կամ էլեմենտների համար։
// Ցիկլները ունեն տարբեր տեսքներ, որոնց միջոցով կարող եք ստուգել պայմաններ, կրկնել գործողություններ և նման բաներ։

// for loop
// for ցիկլը օգտագործվում է, երբ դուք գիտեք, թե քանի անգամ պետք է կատարել գործողությունը (նախապես իմանալով վերահսկվող հաշվիչի քանակը):
// for (initialization; condition; increment) {
//     // Կոդը, որը պետք է կրկնվի
// }
// initialization — այս մասում նշվում է սկսնակ արժեքը (դիտարկում է փոփոխականների սկզբնական արժեքները);
// condition — պայման, որը պետք է լինի ճշմարիտ (true) յուրաքանչյուր ից-անց (iteration);
// increment — արժեքի փոփոխություն յուրաքանչյուր ից-անցի ավարտից հետո:

// for (let i = 1; i < 100; i=i+2) {
//     console.log(i);
//  document.writeln(i)
// }

// 2. while loop

// while-ը օգտագործվում է այն ժամանակ, երբ դուք չգիտեք, թե քանի անգամ պետք
//  է կատարեք գործողությունը, բայց ունեք պայման, որի հիման վրա շարունակվում է շրջանառությունը։
// while (condition) {
//     // Կոդը, որը պետք է կրկնվի
// }

// condition — պայման, որը պետք է լինի ճշմարիտ (true), որ շրջանը շարունակվի։

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// let name = "";

// while (name === "") {
//   name = prompt("Գրիր քո անունը․");
// }

// alert("Բարև, " + name + "!");

// let password = "";

// while (password !== "1234") {
//   password = prompt("Գրիր գաղտնաբառը․");
// }

// alert("Մուտքը հաջողվեց!");

// 3. do...while loop

// Այս շրջանն ավելի նման է while-ին,
// սակայն սկզբում կկատարվի գործողությունը, նույնիսկ եթե պայմանը սխալ է։

// do {
//     // Կոդը, որը պետք է կրկնվի
// } while (condition);
// condition — այդ դեպքում պայմանը ստուգվում է գործողության կատարման ավարտից հետո։

// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// Օրինակ 1․ Գումարել թվերը 1-ից մինչև 10

// let i = 1;
// let sum = 0;

// do {
//   sum += i;
//   i++;
// } while (i <= 10);

// document.writeln("Գումարը = ", sum);

// 4. for...of loop

// Այս շրջանը օգտակար է՝ երբ ցանկանում եք անցնել մի
//  շարք տվյալների (arrays, strings և այլ iterable օբյեկտներ)
// բոլոր անդամները։

// for (let element of iterable) {
//     // Կոդը, որը պետք է կատարվի յուրաքանչյուր էլեմենտի համար
// }

// element — յուրաքանչյուր արժեքը՝ համարժեք տվյալների տարրերին։
// iterable — տվյալները, որոնք կարող են շրջանառվել (օրինակ՝ array կամ string)։

// let numbers = [1, 2, 3, 4, 5];
// for (let num of numbers) {
//   console.log(num);
// }

// 5. for...in loop

// Այս շրջանը օգտագործվում է օբյեկտի հատկություններն
//  անցնելու համար (properties of an object):

// for (let key in object) {
//     // Կոդը, որը պետք է կատարվի յուրաքանչյուր property-ի
//  համար
// }

// key — ցուցիչը կամ ստեղը (key), որը ներկայացնում է
//  օբյեկտի հատկությունը։
// object — օբյեկտը, որի վրա ցանկանում եք շրջել։

// let person = {
//     name: "Alice",
//     age: 25,
//     city: "Yerevan"
// };

// for (let key in person) {
//     console.log(key + ": " + person[key]);
// }

// Այսինքն՝ key-ը վերցնում է հերթով բոլոր հատկությունների
// անունները՝
// name, age, city։

// for...in ցիկլը աշխատում է օբյեկտների վրա։

// Օրինակ 2․ Միայն key-երը տպել
// let car = {
//   brand: "BMW",
//   model: "X5",
//   year: 2022
// };

// for (let key in car) {
//   console.log(key);
// }

// Օրինակ 3․ Object-ի արժեքների գումար

// let x = {
//   Anna: 90,
//   Mark: 85,
//   Lilit: 100
// };

// let total = 0;

// for (let key in x) {
//   total += x[key];
// }

// console.log("Ընդհանուր միավոր =", total);

// 6. break և continue
// break օգտագործվում է ցիկլից դուրս գալու համար:
// continue օգտագործվում է այն դեպքում, երբ ցանկանում եք միանգամից անցնլ ցիկլի հաջորդ քայլին։

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i);
// }

// let i = 0;

// while (i < 15) {
//   i++;

//   if (i === 2) continue;
//   if (i === 14) break;

//   console.log(i);
// }
// 3 -in

// for (let i = 1; i <= 100; i++) {
//     if (i === 25 || i === 55) {
//       continue;
//     }
//     document.write(i + " ");
//   }
// խնդիր 7

// cikli ognutyamb tpi 50 hat div,// ամեն 5-րդ div-ը կարմիր, մնացածը՝ կապույտ

// for (let i = 1; i <= 50; i++) {
//     let div = document.createElement("div");
//     div.style.width = '50px';
//     div.style.height = '50px';
//     div.style.border = '1px solid';
//     div.style.color = 'white';
//     div.style.display = 'inline-block';
//     div.style.textAlign = 'center';
//     div.style.lineHeight = '50px';
//     div.style.margin = '3px';
//     div.innerText = i;

//     if (i % 5 === 0) {
//         div.style.background = 'red';
//     } else {
//         div.style.background = 'blue';
//     }

//     bo.appendChild(div);
// }
