   // setInterval JavaScript-ում նշանակում է ֆունկցիայի 
// կամ կոդի հատվածի կրկնվող կատարում որոշված ժամանակային ինտերվալով։
   
   // clearInterval(x);Այն կանգնեցնում է setInterval-ի
    // կրկնվող ֆունկցիան երբ արդեն պետք չի շարունակել։


  let count = 0;
  let interval;

  const counterDisplay = document.getElementById("counter");
  const startBtn = document.getElementById("startBtn");

   startBtn.onclick = function() {
     startBtn.disabled = true; // կանխում ենք կրկնակի սեղմում
     interval = setInterval(() => {
      count++;
      counterDisplay.textContent = count;
    }, 1000); // ամեն 1 վրկ
   }






//    let k = 10;
//         let d2 = document.getElementById("d2");
//         let btn = document.getElementById("btn");

//         btn.onclick = function myf() {
//             let x = setInterval(myf1, 100);

//             function myf1() {
//                 if (k === 100) {
//                     clearInterval(x);
//                 } else {
//                     k++;
//                     d2.style.width = k + '%';
//                     d2.innerHTML = k + '%';
//                 }
//             }
//         }




        // (bolor ayn tvery voronq parz en)

    var k = true
    for (var i = 2; i < 100; i ++){
    for (var j = 2; j < i; j++){
        if (i%j ==0){
            k = false
            break
        }
        else{
            k=true
        }
    }
    if (k == true) {
        demo.innerHTML += i +'<br>'
    }
}

    




