// Ցիկլ

//  1-in tpel 50 hat div, aynpes anel,vor 25-rd@ lini karmir

for (let i = 1; i <= 50; i++) {
  if (i === 25) {
    document.write(
      '<div style="width:100px; height:100px; background-color:red; color:white; display:inline-block; margin:5px; text-align:center; line-height:50px; font-weight:bold; border-radius:5px;">' +
        i +
        "</div>",
    );
  } else {
    document.write(
      '<div style="width:100px; height:100px; background-color:lightgray; display:inline-block; margin:5px; text-align:center; line-height:50px; font-weight:bold; border-radius:5px;">' +
        i +
        "</div>",
    );
  }
}

//   2-rd xndir   Տպել աղյուսակ և ստանալ շախմատի տեսք

document.write("<table>");
for (let i = 0; i < 8; i++) {
  document.write("<tr>");
  for (let j = 0; j < 8; j++) {
    let n;
    if ((i + j) % 2 == 0) {
      n = "white";
    } else {
      n = "black";
    }

    document.write(
      '<td style="background:' +
        n +
        '; width:50px; height:50px; border:1px solid gray;"></td>',
    );
  }
  document.write("</tr>");
}
document.write("</table>");

// 3-rd xndir
// for (var i = 10; i > 0; i--) {
//   var p = document.createElement('p');

//   for (var j = 10; j < i; j--) {
//   }
//   for (var k = 0; k < i; k++) {
//     p.innerHTML += '*';
//   }
//   bod.appendChild(p);
// }

//   4-rd xndir Տպել աղյուսակ և ստանալ անկյունագծի տեսք

document.write('<table style="width:600px; height: 600px; border:1px solid">');
for (let i = 0; i < 10; i++) {
  document.write("<tr> </tr>");
  for (let j = 0; j < 10; j++) {
    if (i == j) {
      document.write('<td style = "border: 1px solid"> </td>');
    } else {
      document.write('<td style = "background: black"> </td>');
    }
  }
}

// 5-rd xndir tpel parz tvery

// var k = true;
// for (var i = 2; i < 100; i++) {
//   for (var j = 2; j < i; j++) {
//     if (i % j === 0) {
//       k = false;
//       break;
//     } else {
//       k = true;
//     }
//   }
//   if (k == true) {
//     demo.innerHTML += i + "<br>";
//     document.writeln(i);
//   }
// }

// 1*2  2
// 2*3  6
// 3*4  12
// 4*5  20
// 5*6  30

// 6-rd xndir

// for (let i = 1; i <= 50; i++) {
//   let n = i * (i + 1);
//   document.writeln(n);
// }
