import React, { useState } from "react";
import CountryTableCard from "./countryTableCard";
import classes from "../styles/Home.module.css";

export default function CountryTable({ countrydata }) {
  const [filterData, setFilterData] = useState(countrydata);
  const filterCountry = (e) => {
    const newData = countrydata.filter((item) =>
      item.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterData([...newData]);
  };
  return (
    <div>
      <div className={classes.searchBox}>
        <input className={classes.search} onChange={filterCountry}></input>
      </div>
      <div className={classes.card}>
        <p> #</p>
        <p>Country</p>
        <p>Population</p>
        <p>Area</p>
        <p>Gini</p>
      </div>
      {filterData.map((country, index) => {
        return (
          <div key={index}>
            <CountryTableCard country={country} index={index} />
          </div>
        );
      })}
    </div>
  );
}
