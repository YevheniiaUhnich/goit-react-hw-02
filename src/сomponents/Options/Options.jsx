import s from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={s.button}>
      <button onClick={() => updateFeedback("good")} className={s.btn}>
        Good
      </button>
      <button onClick={() => updateFeedback("neutral")} className={s.btn}>
        Neutral
      </button>
      <button onClick={() => updateFeedback("bad")} className={s.btn}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={() => resetFeedback("reset")} className={s.btn}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
