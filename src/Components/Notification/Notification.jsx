import s from "./Notification.module.css";
const Notification = ({ message }) => {
  return <p className={s.messageNotification}>{message}</p>;
};
export default Notification;
