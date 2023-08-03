import React from "react";

interface DataRow {
  [key: string]: number | string;
}

interface TableProps {
  data: DataRow[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const tableData: DataRow = {};
  const class1Data: DataRow = {};
  const class2Data: DataRow = {};
  const class3Data: DataRow = {};

  data.forEach((row) => {
    tableData[row["Measure"]] = row["Measure"];
    class1Data[row["Measure"]] = row["Class 1"];
    class2Data[row["Measure"]] = row["Class 2"];
    class3Data[row["Measure"]] = row["Class 3"];
  });
  console.log(tableData, data);

  return (
    <table>
      <thead>
        <tr>
          <th>Measure</th>
          {Object.keys(data[0]).map(
            (key) => key !== "Measure" && <th key={key}>{key}</th>
          )}
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

export default Table;
