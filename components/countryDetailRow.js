import React from "react";
import styles from "../styles/countryDetailsCard.module.css";

export default function CountryDetailRow({ name, value="NA" }) {
  return (
    <div className={styles.detailsRow}>
      <div>{name}</div>
      <div>{value}</div>
    </div>
  );
}
