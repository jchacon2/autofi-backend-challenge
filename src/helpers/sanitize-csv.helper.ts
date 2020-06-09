/**
 * @name sanitizeCsv
 * @param row 
 * @param columns 
 * @description 
 * @returns
 */

export function sanitizeCsv1(row, columns) {
  for(const key in row) {
    if (!columns.includes(key)) {
      delete row[key];
    }
  }

  columns.forEach((column) => {
    if (!Object.prototype.hasOwnProperty.call(row, column)) {
      row[column] = 'data not provided';
    }
  });
  return row;
}