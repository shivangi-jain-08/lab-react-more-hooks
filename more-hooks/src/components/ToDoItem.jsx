import React from "react";

const TodoItem = ({ item: { data, isHidden }, index, dispatch }) => {
  return (
    <div
      style={{
        backgroundColor: "#51074a",
        width: "60vw",
        height: "110px",
        padding: "15px",
        color: "#ffc1e3",
        margin: "10px auto",
      }}
    >
      <h3>{isHidden ? "This Content Is Hidden" : data}</h3>
      <button
        style={{
          backgroundColor: "#d69cbc",
          color: "#white",
        }}
        onClick={() => {
          dispatch({ type: "CHANGE_ISHIDDEN", payload: index });
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export default TodoItem;
