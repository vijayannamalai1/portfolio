import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import {
  TextField,
  Modal,
  Fade,
  InputAdornment,
  Button,
  IconButton,
} from "@mui/material";
import { AccountCircle, Email, Phone, Close } from '@mui/icons-material';
import "./Modal.css";
import { db, timestamp } from "../../firebase";

const modalStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const paperStyle = {
  position: "relative", 
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 3px 5px 2px rgba(0, 0, 0, 0.3)",
  padding: "16px 32px 24px",
  outline: "none",
};

export default function TransitionsModal({ open, setOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => {
    // Reset form fields and error message when closing the modal
    setName("");
    setEmail("");
    setPhone("");
    setError("");
    setOpen(false);
  };

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

        // Clear fields and close the modal after submission
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
          <div className="modal__paper" style={paperStyle}>
            <IconButton
              className="modal__closeButton"
              onClick={handleClose}
            >
              <Close />
            </IconButton>

            <h2 id="transition-modal-title" className="modal__title">
              Join with Me
            </h2>
            <TextField
              id="standard-basic"
              label="Name"
              className="custom-textfield"
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
