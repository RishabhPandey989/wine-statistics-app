import { WineDataItem } from "../components/StatisticalMeasuresComponent";

export const calculateMean = (data: number[]): number => {
  return data.reduce((acc, value) => acc + value, 0) / data.length;
};

export const calculateMedian = (data: number[]): number => {
  const sortedData = data.slice().sort((a, b) => a - b);
  const mid = Math.floor(sortedData.length / 2);
  return sortedData.length % 2 === 0
    ? (sortedData[mid - 1] + sortedData[mid]) / 2
    : sortedData[mid];
};

export const calculateMode = (data: number[]): number => {
  const frequencyMap = new Map<number, number>();
  data.forEach((value) => {
    frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
  });

  let mode = data[0];
  let maxFrequency = 0;

  frequencyMap.forEach((frequency, value) => {
    if (frequency > maxFrequency) {
      mode = value;
      maxFrequency = frequency;
    }
  });

  return mode;
};

export const calculateGamma = (data: any) => {
  return data.map((item: { Ash: number; Hue: number; Magnesium: number }) => ({
    ...item,
    Gamma: (item.Ash * item.Hue) / item.Magnesium,
  }));
};
