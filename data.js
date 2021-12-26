const data = [6, 0, 8, 2, 3, 0, 4, 0, 1];

let dataaArr = [];
data.map((i) => {
  if (i > 0) {
    dataaArr.push(i);
  }
});
data.filter((i) => {
  if (i < 1) {
    dataaArr.push(i);
  }
});
console.log(dataaArr);

const dataArr = [6, 0, 8, 2, 3, 0, 4, 0, 1];

const mathSortLogic = data.sort((a, b) => b - a);
