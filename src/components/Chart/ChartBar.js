import "./ChartBar.css";

const ChartBar = (props) => {
  let barFilHeight = "0%";

  if (props.maxValue > 0) {
    barFilHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFilHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;

//What is going there?
//barFilHeight= the variable by which we can set the value dynamically for chartbarfill div
//chart bar fill div is the div which is shown the % of the month's expense
//{{}} this is the syntax to setting the style value dynamically first{} for dynamical value in
//component secnd nested{} because if want to change style dynamically for any component
//we pass an object so nested{} for object.
