import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const [state, setState] = useState({
    name: "Sudarshana",
    class: "7c",
  });
  const update = () => {
    setTimeout(() => {
      setState({
        name: "Sudhi",
        class: "8c",
      });
    }, 1000);
  };
  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
