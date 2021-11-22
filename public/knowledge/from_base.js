
const GSheetReader = require('g-sheet-api');
const options = {
  sheetId: '2PACX-1vQE7EWDfDhZjus2Ap5IYuUl-FQsFoYLF6tEAOq1LserNJMRP0US1x6oJLZUWLBUxzW4tPkJdtrUlD0g',
  sheetNumber: 1,
  returnAllResults: true,
}
GSheetReader(options, results => {

  const table = document.createElement('table');
  const header = table.createTHead();
  const headerRow = header.insertRow(0);
  const tbody = table.createTBody();

  // First, create a header row
  Object.getOwnPropertyNames(results[0]).forEach(colName => {
    const cell = headerRow.insertCell(-1);
    cell.innerHTML = colName;
  });

  // Next, fill the rest of the rows with the lovely data
  results.forEach(result => {
    const row = tbody.insertRow(-1);

    Object.keys(result).forEach(key => {
      const cell = row.insertCell(-1);
      cell.innerHTML = result[key];
    })
  });

  const main = document.querySelector('#output');
  main.innerHTML = "";
  main.append(table);
});