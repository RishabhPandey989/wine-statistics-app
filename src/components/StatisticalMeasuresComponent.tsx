import React from "react";
import {
  calculateMean,
  calculateMedian,
  calculateMode,
} from "../utils/statistics";

export interface WineDataItem {
  Alcohol: string;
  Flavanoids: number;
  Ash: number;
  Hue: number;
  Magnesium: number;
  Gamma: number;
}
type WineDataItemProperty = keyof WineDataItem;

interface Props {
  data: any;
  propertyName: WineDataItemProperty;
}

const StatisticalMeasuresComponent: React.FC<Props> = ({
  data,
  propertyName,
}) => {
  const classWiseData: Record<string, number[]> = {};

  data.forEach((item: { [x: string]: any; Alcohol: any }) => {
    const alcoholClass = String(item.Alcohol);
    const propertyValue = item[propertyName];
    if (typeof propertyValue === "number") {
      if (!classWiseData[alcoholClass]) {
        classWiseData[alcoholClass] = [];
      }
      classWiseData[alcoholClass].push(propertyValue);
    }
  });

  const classWiseMeans: Record<string, number> = {};
  const classWiseMedians: Record<string, number> = {};
  const classWiseModes: Record<string, number> = {};

  for (const [alcoholClass, classData] of Object.entries(classWiseData)) {
    classWiseMeans[alcoholClass] = calculateMean(classData);
    classWiseMedians[alcoholClass] = calculateMedian(classData);
    classWiseModes[alcoholClass] = calculateMode(classData);
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Measure</th>
          {Object.keys(classWiseData).map((alcoholClass) => (
            <th key={alcoholClass}>Class {alcoholClass}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{propertyName}</td>
          {Object.keys(classWiseData).map((alcoholClass) => (
            <td key={alcoholClass}>
              {classWiseData[alcoholClass][0].toFixed(3)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Mean</td>
          {Object.keys(classWiseMeans).map((alcoholClass) => (
            <td key={alcoholClass}>
              {classWiseMeans[alcoholClass].toFixed(3)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Median</td>
          {Object.keys(classWiseMedians).map((alcoholClass) => (
            <td key={alcoholClass}>
              {classWiseMedians[alcoholClass].toFixed(3)}
            </td>
          ))}
        </tr>
        <tr>
          <td>Mode</td>
          {Object.keys(classWiseModes).map((alcoholClass) => (
            <td key={alcoholClass}>
              {classWiseModes[alcoholClass].toFixed(3)}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default StatisticalMeasuresComponent;
