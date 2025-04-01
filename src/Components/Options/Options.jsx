import { useState } from "react";
import s from "./Options.module.css";

const Options = () => {
  const [optionData, setOptionData] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (feedbackType) => {
    setOptionData({
      ...optionData,
      [feedbackType]: optionData[feedbackType] + 1,
    });
  };
  return (
    <div>
      <ul className={s.list}>
        <li>good: {optionData.good}</li>
        <li>neutral: {optionData.neutral}</li>
        <li>bad: {optionData.bad}</li>
      </ul>
    </div>
  );
};

export default Options;
