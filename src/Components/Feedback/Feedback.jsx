import s from "./Feedback.module.css";

const Feedback = () => {
  return (
    <div className={s.feedbackBox}>
      <h1 className={s.title}>Sip Happens Café</h1>
      <p className={s.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <div className={s.button}>
        <button className={s.btn}>Good</button>
        <button className={s.btn}>Neutral</button>
        <button className={s.btn}>Bad</button>
      </div>
    </div>
  );
};

export default Feedback;
