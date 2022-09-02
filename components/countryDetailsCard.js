import React from "react";
import styles from "../styles/countryDetailsCard.module.css";
import CountryDetailRow from "./countryDetailRow";

export default function CountryDetailsCard({ data }) {
  const languages =
    data.languages && Object.values(data.languages).map((name) => name);
  const currencies =
    data.currencies && Object.values(data.currencies).map(({ name }) => name);
  const borders =
    data.borders && Object.values(data.borders).map((name) => name);
  const arr = [
    data.capital,
    languages?.join(", "),
    currencies?.join(", "),
    data.area,
    borders?.join(", "),
  ];
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <div>
            <img
              src={data.flags.svg}
              alt={data.name}
              height={300}
              width={300}
            ></img>
          </div>
        </div>
        <div className={styles.containerDetailTable}>
          <h1 className={styles.countryName}>{data.name.common}</h1>
          <h4 className={styles.detailsHeading}>Details</h4>
          {["Capital", "Languages", "Currencies", "Area", "Borders"].map(
            (name, index) => {
              return (
                <CountryDetailRow key={index} name={name} value={arr[index]} />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
