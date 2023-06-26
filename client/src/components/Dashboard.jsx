//import { TrackingContext } from "../context/trackingContext";
import "./dashboard.css";
export function Dashboard() {
  //const { clickEvent } = useContext(TrackingContext);
  //   function calculateCTRA() {
  //     let value;
  //     value = Math.round((10 / 100) * 100);
  //     return value;
  //   }
  return (
    <div className="dashboard-wrapper">
      <h1 className="title">Dashboard</h1>
      <div className="variations-wrapper">
        <div className="variation-conatiner">
          <h3>Variation A</h3>
          <div className="variation">
            <h4 className="views">Views : 100</h4>
            <h4 className="clicks">Clicks : 10</h4>
          </div>
        </div>
        <div className="variation-conatiner">
          <h3>Variation B</h3>
          <div className="variation">
            <h4 className="views">Views : 4</h4>
            <h4 className="clicks">Clicks : 0</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
