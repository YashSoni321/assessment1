import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./TransitionsModal.css";

const style = {
  position: "absolute",
  top: "48%",
  height: " 388px",
  right: "0%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  // p: 4,
};

export default function TransitionsModal({ open, setOpen }) {
  // const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [language, setLanguage] = React.useState("english");

  React.useEffect(() => {
    console.log("language", language);
  }, [language]);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="outerContainer">
              <div>
                <div className="buttons">
                  <input
                    label="English"
                    type="radio"
                    name="language"
                    value="english"
                    onClick={(e) => setLanguage(e.target.value)}
                    // onChange={(e) => console.log(e.target.value)}
                    // checked
                    defaultChecked
                  />
                  <input
                    label="Dubai"
                    // onChange={(e) => console.log(e.target)}
                    onChange={(e) => setLanguage(e.target.value)}
                    type="radio"
                    name="language"
                    value="dubai"
                  />
                </div>
              </div>
              {language === "english" ? (
                <div className="innerContainer">
                  <div>Dubai Chambers</div>
                  <div>Dubai Chamber Virtual Assistant</div>
                  <div>Logo</div>
                  <div>
                    <button className="button">Get Started</button>
                  </div>
                </div>
              ) : (
                <div className="innerContainer">
                  <div>Dubai Chambers</div>
                  <div>المساعد الافتراضي لغرفة دبي</div>
                  <div>Logo</div>
                  <div>
                    <button className="button">البدء</button>
                  </div>
                </div>
              )}
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
