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

// # 8 (PART I  (pile of socks)) PENCARIAN ELEMENT ARR YG SAMA
// const arr = [1, 1, 3, 3, 5, 5, 7, 8];
// let countObj = {};
// // disini countObj dapat memberitahu secara otomatis (jumlah/count) int dalam element int[ARR]

// for (const num of arr) {
//   countObj[num] = countObj[num] ? countObj[num] + 1 : 1;
// }

// console.log(countObj[8]);

// #8 (PART II)MENGHITUNG JUMLAH int YANG SAMA dalam ELEMENT array
// const occurrences = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce(function (acc, curr) {
//   return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
// }, {});
// for (const data in occurrences) {
//   console.log(occurrences[data]);
// }

// #8 (part III) menghitung nilai yang sama dalam sebuah el arr
// const pairsKaosKaki = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// const n = 9;
// const sort = pairsKaosKaki.sort((a, b) => a - b);
// let pairs = 0;

// for (let i = 0; i < n - 1; i++) {
//   if (sort[i] === sort[i - 1]) {
//     pairs++;
//     i += 1;
//   }
// }
// console.log(pairs);

// #9 function countingValleys(steps, path) {
//   let valleys = 0;
//   let altitude = 0;
//   for (let i = 0; i < steps; i++) {
//     // if path is 'D' we decrement the altitide
//     if (path[i] == "D") {
//       altitude--;
//     } else {
//       // this means a down and up movement suggesting a valley passed
//       if (altitude == -1) {
//         valleys++;
//       }
//       // else we increment the altititude
//       altitude++;
//     }
//   }
//   return valleys;
// }
// console.log(countingValleys(8, "UDDDUDUU"));

// #10(PART I) JUMPING TO THE CLOUDS
// const clouds = [0, 0, 1, 0, 0, 1, 0];
// const jumpingClouds = () => {
//   let stepsArray = [];
//   let i = 0;
//   while (i < c.length - 1) {
//     if (i + 2 < c.length && c[i + 2] === 0) {
//       stepsArray.push(c[i + 2]);
//       i += 2;
//     } else {
//       stepsArray.push(c[i + 1]);
//       i += 1;
//     }
//   }
//   return stepsArray.length;
// };
// #10 PART 2
// for (let i = 0; i < clouds.length; i++) {
//   if (clouds[i + 2] === 0) {
//     jump++;
//     i += 2;
//   } else if (clouds[i + 1] === 0) {
//     jump++;
//     i++;
//   } else {
//     i++;
//   }
// }
// console.log(jump);
// #11 COMPONENT shouldComponentUpdate
// class OnlyEvens extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('Should I update?');
//     // Change code below this line
//     return true;
//     // Change code above this line
//   }
//   componentDidUpdate() {
//     console.log('Component re-rendered.');
//   }
//   render() {
//     return <h1>{this.props.value}</h1>;
//   }
// }

// class Controller extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 0
//     };
//     this.addValue = this.addValue.bind(this);
//   }
//   addValue() {
//     this.setState(state => ({
//       value: state.value + 1
//     }));
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.addValue}>Add</button>
//         <OnlyEvens value={this.state.value} />
//       </div>
//     );
//   }
// }

// LIFECYCLE COMPONENT CLASS
// componentWillMount() componentDidMount() shouldComponentUpdate() componentDidUpdate() componentWillUnmount()
// abaabaabaa

// #12 PART(1) REPEATED STRING but FAILED
// function repeatedString() {
//   let s = "aba";
//   let n = 10;
//   const strLen = s.length;
//   let counter = 0;
//   //   STEP 1
//   const multiplier = Math.floor(n / strLen);
//   for (let i = 0; i < strLen; i++) {
//     if (s[i] === "a") {
//       counter++;
//     }
//   }
//   counter *= multiplier;
//   //   step 2
//   const residualStrLen = n - strLen * multiplier;
//   for (let i = 0; i < residualStrLen; i++) {
//     if (s[i] === "a") {
//       counter++;
//     }
//   }
//   console.log(counter);
// }
// repeatedString();
// #12 PART II REPEATED STIRING
// const aba = "aba";
// const n = 10;
// let akurasi = aba.split("a").length - 1;
// let max = Math.floor(n / aba.length);
// let totalAkurasi = akurasi * max;
// totalAkurasi += aba.slice(0, n % aba.length).split("a").length - 1;
