import React from "react";
import { calculateClassWiseStats } from "../utils/utils";
import { data } from "../data/data";

interface DataRow {
  [key: string]: number | string;
}

const FlavanoidsTable: React.FC = () => {
  const flavanoidsStats = calculateClassWiseStats(data, "Flavanoids");
  const tableData: DataRow = {};
  const class1Data: DataRow = {};
  const class2Data: DataRow = {};
  const class3Data: DataRow = {};

  flavanoidsStats.forEach((row) => {
    tableData[row["Measure"]] = row["Measure"];
    class1Data[row["Measure"]] = row["Class 1"];
    class2Data[row["Measure"]] = row["Class 2"];
    class3Data[row["Measure"]] = row["Class 3"];
  });
  console.log(tableData, flavanoidsStats);

  return (
    <table>
      <thead>
        <tr>
          <th>Measure</th>
          <th>Class 1</th>
          <th>Class 2</th>
          <th>Class 3</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(tableData).map((measure, i) => (
          <tr key={i}>
            <td>{measure}</td>
            <td>{class1Data[measure]}</td>
            <td>{class2Data[measure]}</td>
            <td>{class3Data[measure]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FlavanoidsTable;
