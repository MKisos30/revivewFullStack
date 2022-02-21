import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";

const Item = () => {
  let params = useParams();
  console.log(params);

  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      await fetch(
        `https://api.nasa.gov/insight_weather/?api_key=W55GuHiUNV1HCTszzbNVGftKPbpha45nckE2FmMo&feedtype=json&ver=1.0`
      )
        .then((res) => res.json())
        .then((json) => {
          setData(json);
        })
        .catch((e) => console.log(e));
    }
    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>Atmospheric temperature sensor</h1>
          <ul>
            {data.validity_checks[params.id].AT.sol_hours_with_data.map(
              (li) => {
                return <li key={li}>{li}</li>;
              }
            )}
          </ul>

          <h1>Horizontal wind speed sensor</h1>
          <ul>
            {data.validity_checks[params.id].HWS.sol_hours_with_data.map(
              (li) => {
                return <li key={li}>{li}</li>;
              }
            )}
          </ul>

          <h1>Atmospheric pressure sensor</h1>
          <ul>
            {data.validity_checks[params.id].PRE.sol_hours_with_data.map(
              (li) => {
                return <li key={li}>{li}</li>;
              }
            )}
          </ul>
          <h1>Wind direction sensor</h1>
          <ul>
            {data.validity_checks[params.id].WD.sol_hours_with_data.map(
              (li) => {
                return <li key={li}>{li}</li>;
              }
            )}
          </ul>
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
};

export default Item;
