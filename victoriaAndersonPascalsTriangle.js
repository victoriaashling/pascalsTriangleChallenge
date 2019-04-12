pascalsTriangle = numberOfRows => {
  const row1 = [1];
  const row2 = [1, 1];
  let laterRows = [];

  if (numberOfRows > 2) {
    for (let i = 2; i < numberOfRows; i++) {
      let previousRow;

      if (laterRows.length === 0) {
        previousRow = row2;
      }
      else {
        previousRow = laterRows[laterRows.length - 1];
      }

      let thisRow = previousRow.reduce((acc, val, index) => {
        if (index < previousRow.length - 1) {
          acc.push(val + previousRow[index+1]);
        }
        return acc;
      }, []);

      laterRows.push([1, ...thisRow, 1]);
    }
  }

  if (numberOfRows === 1) {
    return console.log([row1]);
  }
  return console.log([row1, row2, ...laterRows]);
}

let chosenNum = parseInt(process.argv[2]);
pascalsTriangle(chosenNum);