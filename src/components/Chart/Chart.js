import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint=>dataPoint.value); //convert object in value.
    const totalMaximum = Math.max(...dataPointValues);
    //Expenseschart mae se data aaya map k through nya array banaya or object ko value me
    //manupulate kr dia.
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
        //   sara karcha es max value me aagya
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
