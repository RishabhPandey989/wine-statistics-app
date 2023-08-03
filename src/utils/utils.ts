export const mean = (arr: number[]): number =>
  arr.reduce((a, b) => a + b, 0) / arr.length;

export const median = (arr: number[]): number => {
  const sorted = [...arr].sort();
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  } else {
    return sorted[middle];
  }
};

export const mode = (arr: number[]): number[] => {
  const counts = new Map<number, number>();
  arr.forEach((x) => counts.set(x, (counts.get(x) || 0) + 1));
  let maxCount = 0;
  let modes: number[] = [];
  for (const [x, count] of counts.entries()) {
    if (count > maxCount) {
      maxCount = count;
      modes = [x];
    } else if (count === maxCount) {
      modes.push(x);
    }
  }
  return modes.length === 1 ? modes : modes.sort((a, b) => a - b);
};

export interface DataRow {
  [key: string]: number | string;
}

export interface GammaStats {
  [key: string]: number[];
}

export const calculateClassWiseStats = (
  data: any[],
  propertyName: string
): DataRow[] => {
  const grouped: GammaStats = {};
  data.forEach((row) => {
    const alcoholClass = row.Alcohol;
    const propertyValue = row[propertyName];
    if (!grouped[alcoholClass]) {
      grouped[alcoholClass] = [];
    }
    grouped[alcoholClass].push(propertyValue);
  });

  const measures = ["Mean", "Median", "Mode"];
  const stats = measures.map((measure) => {
    const row: DataRow = { Measure: `${propertyName} ${measure}` };
    Object.keys(grouped).forEach((alcoholClass) => {
      const values = grouped[alcoholClass];
      let result: string | number = "";
      if (measure === "Mean") {
        result = mean(values).toFixed(3); // Round to 3 decimal places
      } else if (measure === "Median") {
        result = median(values).toFixed(3); // Round to 3 decimal places
      } else if (measure === "Mode") {
        const modes = mode(values);
        result = modes.map((modeValue) => modeValue.toFixed(3)).toString(); // Round each mode value to 3 decimal places
      }
      row[`Class ${alcoholClass}`] = result;
    });
    return row;
  });

  return stats;
};
