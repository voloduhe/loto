const generateUniqueNumber = (
  arr: number[][],
  i: number,
  rangeStart: number,
  rangeEnd: number
): number => {
  let num: number;
  do {
    num = Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
  } while (arr.slice(0, i).some((subArr) => subArr.includes(num)));
  return num;
};

const sort2DArrayByColumns = (arr: number[][]): number[][] => {
  const result: number[][] = Array.from({ length: arr.length }, () => []);
  for (let j = 0; j < arr[0].length; j++) {
    const column = arr.map((row) => row[j]).sort((a, b) => a - b);
    column.forEach((value, i) => (result[i][j] = value));
  }
  return result;
};

export const generate2DArray = (): number[][] => {
  const arr: number[][] = Array.from({ length: 3 }, () => []);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 9; j++) {
      const rangeStart = j === 0 ? 1 : j * 10;
      const rangeEnd = j === 0 ? 9 : j === 8 ? 90 : rangeStart + 9;
      arr[i][j] = generateUniqueNumber(arr, i, rangeStart, rangeEnd);
    }
  }
  return sort2DArrayByColumns(arr);
};

export const replaceRandomElements = (arr: number[]): number[] => {
  const indices = new Set<number>();
  while (indices.size < 4) {
    indices.add(Math.floor(Math.random() * 9));
  }
  return arr.map((value, index) => (indices.has(index) ? 0 : value));
};

const createTicket = (): number[] => {
  const generatedArr = generate2DArray();
  return [
    ...replaceRandomElements(generatedArr[0]),
    ...replaceRandomElements(generatedArr[1]),
    ...replaceRandomElements(generatedArr[2]),
  ];
};

export { createTicket };
