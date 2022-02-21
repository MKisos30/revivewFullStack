import { useEffect, useState } from "react";
import "./App.css";
import CardUI from "./components/CardUI";

function App() {
  const [data, setData] = useState();

  //GET DATA
  useEffect(() => {
    async function fetchData() {
      await fetch(
        `https://api.nasa.gov/insight_weather/?api_key=W55GuHiUNV1HCTszzbNVGftKPbpha45nckE2FmMo&feedtype=json&ver=2.5`
      )
        .then((res) => res.json())
        .then((json) => {
          setData(json);
        })
        .catch((e) => console.log(e));
    }
    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      {data ? (
        <div>
          <CardUI title={data.validity_checks.sols_checked[0]} />
          <CardUI title={data.validity_checks.sols_checked[1]} />
          <CardUI title={data.validity_checks.sols_checked[2]} />
          <CardUI title={data.validity_checks.sols_checked[3]} />
        </div>
      ) : (
        <div className="spinner">
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
