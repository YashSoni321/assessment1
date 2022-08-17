import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ModalPopup from "./components/modal/TransitionsModal";
import { Button } from "@mui/material";

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div>
        <div className="bgBlack">
          <button
            onClick={() => setOpen((prevVa) => !prevVa)}
            className="floatingBtn button"
          >
            Chat Us
          </button>
        </div>
        <ModalPopup open={open} setOpen={setOpen} />
      </div>
    </>
  );
}

export default App;
