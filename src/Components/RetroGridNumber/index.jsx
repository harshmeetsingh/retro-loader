import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";

import "./index.css";
import { pixelMatrix } from "../../Constants/pixelMatrix";

function RetroGridNumber({ showNumber }) {
  const renderGrid = (arr) => {
    let result = [];
    arr.forEach((it) => {
      it.forEach((subit) => {
        let temp = (
          <div className={`${subit === 1 ? "retro-pixel-fill" : ""}`}></div>
        );
        result.push(temp);
      });
    });
    return result;
  };

  const numArr = useMemo(() => {
    return showNumber.toString().split("");
  }, [showNumber]);

  return (
    <div className="retro-loading-container">
      {numArr.map((num) => (
        <div className="retro-grid">{renderGrid(pixelMatrix[num])}</div>
      ))}
      <div className="retro-grid">{renderGrid(pixelMatrix["%"])}</div>
    </div>
  );
}

RetroGridNumber.propTypes = {};

export default RetroGridNumber;
