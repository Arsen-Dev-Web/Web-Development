   // Matetatikakn funkcianer-irenc ognutyamb katarum enq
    // matematikakan gorcoxutyunner


// document.getElementById("demo").innerHTML = Math.round(5.3)
demo.innerHTML = Math.round(5.3)
demo.innerHTML = Math.round(5.6)
demo.innerHTML = Math.floor(4.9) 
demo.innerHTML = Math.ceil(5.3)
demo.innerHTML = Math.sqrt(25)
demo.innerHTML = Math.abs(-9)
demo.innerHTML = Math.pow(5,3)
demo.innerHTML = Math.min(8, 9, 16, 6)
demo.innerHTML = Math.max(8, 3, 2, 6)
demo.innerHTML = Math.random()

for (let i = 0; i < 10; i++) {
    document.writeln(i + '<br>')
}




// 1-rd xndir 1ic 100-i mijakayqum tpi 1-qar-i, 2- qar-i, 3- qar-i

// 



for (let i = 1; i <=100; i ++) {
    if(i % Math.sqrt(i) === 0){
    // demo.innerHTML +=i + '<br>';
    document.writeln(i + '<br>')
     
 }
}
 
for (let i = 1; i <=100; i ++) {
    let x = Math.sqrt(i);
    if(Number.isInteger(x)){
    demo.innerHTML +=i + '<br>';     
 }
}



   // 2-rd xndir
      for (var i = 0; i < 10; i++) {
        var p = document.createElement('p');
            var r = Math.floor(Math.random() * 255)
            var g = Math.floor(Math.random() * 255)
            var b = Math.floor(Math.random() * 255)
        for (var j = 0; j < i; j++) {
            p.innerHTML += '*';
            p.style.textAlign = 'center'
            p.style.color = 'rgb('+r+' '+g+' '+b+')'
        }
        bo.appendChild(p);
      }

  // 4-rd xndir
    
      for (var i = 1; i <10; i++) {
        var p =document.createElement('p')
        var r = Math.floor(Math.random() * 255)
        var g = Math.floor(Math.random() * 255)
        var b = Math.floor(Math.random() * 255)
        for(var j =0; j<i ; j++){
            p.innerHTML +='*'
            p.style.textAlign = 'center'
            p.style.color = 'rgb('+r+' '+g+' '+b+')'
        }
       bo.appendChild(p)
    }


     for (let i = 1; i < 100; i++) {
      if (i % 4 === 0 && i % 8 !== 0) {
        demo.innerHTML += i + '<br>';
      }
    } 


    //  var k = true
    // for (var i = 2; i < 100; i ++){
    // for (var j = 2; j < i; j++){
    //     if (i%j ===0){
    //         k = false
    //         break
    //     }
    //     else{
    //         k=true
    //     }
    // }
    // if (k == true) {
    //     demo.innerHTML += i +'<br>'
    //     // document.writeln(i)
    // }
