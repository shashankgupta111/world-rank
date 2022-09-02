import classes from "../styles/footer.module.css";
import React from "react";

export default function Footer({ background }) {
  // console.log('global?.window?.localStorage.getItem("theme")', global?.window?.localStorage.getItem("theme"))
  return (
    <div className={classes.footer}>
      <style jsx>
        {`
          div {
            backgroundcolor: ${background};
          }
        `}
      </style>
      <div>Daffodil soft Ltd</div>
    </div>
  );
}
