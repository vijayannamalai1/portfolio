import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import {
  TextField,
  Modal,
  Fade,
  InputAdornment,
  Button,
} from "@mui/material";
import "./Modal.css";
import { AccountCircle, Email, Phone } from '@mui/icons-material';
import { db, timestamp } from "../../firebase";

// const useStyles = makeStyles((theme) => ({ 
//   modal: {  
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   paper: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundImage:
//       "linear-gradient(to right top, #d8ff1e, #e8e800, #f4d200, #fbbb00, #fea400, #fe9e10, #fe971b, #fe9123, #fd9934, #fda143, #fca951, #fbb05f)",
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//     width: 500,
//     height: 300,
//     outline: "none",
//   },
// }));

const modalStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const paperStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage:
    "linear-gradient(to right top, #d8ff1e, #e8e800, #f4d200, #fbbb00, #fea400, #fe9e10, #fe971b, #fe9123, #fd9934, #fda143, #fca951, #fbb05f)",
  boxShadow: "0px 3px 5px 2px rgba(0, 0, 0, 0.3)",
  padding: "16px 32px 24px",
  width: 500,
  height: 350,
  outline: "none",
  backgroundColor:'viloet'
};


export default function TransitionsModal({ open, setOpen }) {


  const handleClose = () => {
    setOpen(false);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleClick = async () => {
    if (name && email && phone) {
      setError("");
      try {
        await addDoc(collection(db, "contact"), {
          name: name,
          email: email,
          phone: phone,
          timestamp: timestamp,
        });

        setName("");
        setPhone("");
        setEmail("");
        setOpen(false);
      } catch (error) {
        console.error("Error adding document: ", error);
        setError("Failed to submit, please try again.");
      }
    } else {
      setError("Please fill all the details");
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        style={modalStyle}
        open={open}
        onClose={handleClose}
        closeAfterTransition
      
      >
        <Fade in={open}>
          <div style={paperStyle}>
            <h2 id="transition-modal-title" className="modal__title">
              Join with Me
            </h2>
            <TextField
              id="standard-basic"
              label="Name" className="custom-textfield"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <br />
            <TextField
              id="standard-basic1"
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <TextField
              id="standard-basic2"
              label="Mobile No"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone />
                  </InputAdornment>
                ),
              }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            {error && <p className="modal__error">{error}</p>}
            <Button
              variant="outlined"
              className="modal__button"
              onClick={handleClick}
            >
              Join
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
