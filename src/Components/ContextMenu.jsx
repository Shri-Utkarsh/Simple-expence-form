import React from "react";

const ContextMenu = ({ menuPosition, setMenuPosition, setExpenses ,rowID }) => {
  if (!menuPosition.left) return;
  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
          console.log("e");
          setMenuPosition({})
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
            setExpenses((prevState) => prevState.filter((expense) => expense.id !== rowID))
          setMenuPosition({})
        }}
      >
        Delete
      </div>
    </div>
  );
};

export default ContextMenu;
