// #1
// Compare TRIPLETS
// const aliceArr = [17, 28, 30];
// const bobArr = [99, 16, 8];

// let scoreAlice = 0,
//   scoreBob = 0;

// for (let i = 0; i < aliceArr.length; i++) {
//   if (aliceArr[i] > bobArr[i]) {
//     scoreAlice += 1;
//   }
//   if (aliceArr[i] < bobArr[i]) {
//     scoreBob += 1;
//   }
// }
// console.log(scoreAlice, scoreBob);

// #2
// MENCARI PERBANDINGAN ELEMENT POSITIF,NEGATIF,NOL PADA SEBUAH ARRAY LALU JUMLAHKAN ELEMENT POSITIF NEGATIF DAN NOL TERSEBUT
// function dataDeddy() {
//   const data = [-4, 3, -9, 0, 4, 1];
//   const bilPos = data.filter((angka) => angka > 0).length / data.length;
//   const bilNeg = data.filter((angka) => angka < 0).length / data.length;
//   const bilKos = data.filter((angka) => angka === 0).length / data.length;
//   return (
//     bilPos.toFixed(6) + "\n" + bilNeg.toFixed(6) + "\n" + bilKos.toFixed(6)
//   );
// }
// console.log(dataDeddy());

// #3
// menghitung diagonal deffrence
// const dataArr = [
//   [1, 3, 4],
//   [5, 6, 7],
//   [8, 2, 10],
// ];
// for (let i = 0; i < dataArr.length; i++) {
//   for (let j = 0; j < dataArr.length; j++) {
//     if (i + j === dataArr.length) {
//       console.log(dataArr[i][j]);
//     }
//   }
// }
// 0 0 = 0 2
// 0 1 = 1 2
// 0 2 = 2 2 => ok
// 1 0 = 1 2
// 1 1 = 2 2 => k
// 1 2 = 3 2
// 2 0 = 2 2 => ok
// 2 1 = 3 2
// 2 2 = 4 2

// #4
// STAIRCASE
// for (let index = 0; index < 6; index++) {
//   console.log(" ".repeat(6 - index) + "#".repeat(index));
// }

//  #5
// min max SUM(mencari nilai max dan min di dalam sebuah arr dan jumlahkan sisa nya)
// const arr = [1, 2, 3, 4, 5];
// const mathMax = arr.reduce((a, b) => a + b) - Math.max(...arr);
// const mathMin = arr.reduce((a, b) => a + b) - Math.min(...arr);
// console.log(mathMax, mathMin);

// #6
// CANDLES HACKERRANK
// const candles = [4, 4, 2, 1];
// let max = candles.reduce((a, b) => Math.max(a, b));
// let numberRes = 0;
// for (let index = 0; index < candles.length; index++) {
//   if (candles[index] == max) {
//     numberRes += 1;
//   }
// }

// console.log(numberRes);

// #7
// FIZZY BUZZY dan cek angka genap dan ganjil
// for (let i = 1; i <= 15; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
