import "./TabButtons.css";

function TabButtons(props) {
  return (
    <>
      <li>
        <button
          className={props.isSelected ? "active" : ""}
          onClick={props.onSelected}
        >
          {props.children}
        </button>
      </li>
    </>
  );
}

export default TabButtons;
