export const data = [
  { Alcohol: 1, Ash: 1, Hue: 2, Magnesium: 3, Flavanoids: 0.5 },
  { Alcohol: 1, Ash: 2, Hue: 3, Magnesium: 4, Flavanoids: 0.7 },
  { Alcohol: 2, Ash: 3, Hue: 4, Magnesium: 5, Flavanoids: 0.8 },
  { Alcohol: 2, Ash: 4, Hue: 5, Magnesium: 6, Flavanoids: 1.0 },
  { Alcohol: 2, Ash: 5, Hue: 6, Magnesium: 7, Flavanoids: 1.1 },
  { Alcohol: 3, Ash: 6, Hue: 7, Magnesium: 8, Flavanoids: 1.3 },
  { Alcohol: 3, Ash: 7, Hue: 8, Magnesium: 9, Flavanoids: 1.5 },
  { Alcohol: 3, Ash: 8, Hue: 9, Magnesium: 10, Flavanoids: 1.7 },
  { Alcohol: 3, Ash: 9, Hue: 10, Magnesium: 11, Flavanoids: 1.9 },
];

export const calculateGamma = (data: any[]): void => {
  data.forEach((row) => {
    const ash = row.Ash;
    const hue = row.Hue;
    const magnesium = row.Magnesium;
    row.Gamma = (ash * hue) / magnesium;
  });
};

calculateGamma(data);
