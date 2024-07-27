import React from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import "./App.css";

function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios.post("http://localhost:3000/edu/data", data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#CFFCF8",
      height: "100vh",
      margin: 0,
    }}>
      <Container maxWidth="xs" style={{
        background: "white",
        height: "24rem",
        borderRadius: "20px",
      }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <div style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}>
              <TextField
                onClick={() => handleSpeak('Child Id')}
                {...register("childId", { required: true })}
                style={{ marginTop: "20px", marginRight: "10px" }}
                id="child-id"
                label="Child Id"
                variant="outlined"
              />
              <TextField
                onClick={() => handleSpeak('Subject')}
                {...register("subject", { required: true })}
                style={{ marginTop: "20px" }}
                id="subject"
                label="Subject"
                variant="outlined"
              />
            </div>
            <TextField
              onClick={() => handleSpeak('Marks')}
              {...register("marks", { required: true })}
              style={{ marginTop: "20px" }}
              id="marks"
              label="Marks"
              variant="outlined"
            />
            <TextField
              onClick={() => handleSpeak('Comments')}
              {...register("comments")}
              style={{ marginTop: "20px" }}
              id="comments"
              label="Comments"
              variant="outlined"
            />
            <div style={{
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}>
              <Button
                type="submit"
                variant="contained"
                style={{ marginTop: "10px", width: "40%" }}
              >
                Submit
              </Button>
            </div>
          </FormControl>
        </form>
      </Container>
    </div>
  );
}

export default Form;
