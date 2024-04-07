export default function Button({ children, classes, onClick, type }) {
  return (
    <button className={`${classes}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
