import React from "react";
import Table from "./components/Table";
import "./App.css";
import { calculateClassWiseStats } from "./utils/utils";
import { data } from "./data/data";
import FlavanoidsTable from "./components/FlavanoidsTable";

interface DataRow {
  [key: string]: number | string;
}

const App: React.FC = () => (
  <div>
    <h2>Gamma Stats Table</h2>
    <Table data={calculateClassWiseStats(data, "Gamma")} />

    <h2>Flavanoids Stats Table</h2>
    <FlavanoidsTable />
  </div>
);

export default App;
