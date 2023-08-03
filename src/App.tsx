import React from "react";
import wineData from "./data/wineData.json";
import "./App.css";
import StatisticalMeasuresComponent from "./components/StatisticalMeasuresComponent";
import { calculateGamma } from "./utils/statistics";

const App: React.FC = () => {
  const gammaData = calculateGamma(wineData);

  return (
    <div>
      <h1>Statistical Measures of Flavonoid</h1>
      <StatisticalMeasuresComponent data={wineData} propertyName="Flavanoids" />
      <h1>Statistical Measures of Gamma</h1>
      <StatisticalMeasuresComponent data={gammaData} propertyName="Gamma" />
    </div>
  );
};

export default App;
