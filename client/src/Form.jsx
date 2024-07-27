import React from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
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

    const handleSpeak = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#CFFCF8",
                height: "100vh",
                margin: 0,
            }}
        >
            <Container
                maxWidth="xs"
                style={{
                    background: "white",
                    height: "24rem",
                    borderRadius: "20px",
                    padding: "20px"
                }}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl fullWidth>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <TextField
                                {...register("studentId")}
                                style={{ marginTop: "20px", marginRight: "10px" }}
                                id="studentId"
                                name="studentId"
                                label="Student Id"
                                variant="outlined"
                            />
                            <TextField
                                {...register("name")}
                                style={{ marginTop: "20px" }}
                                id="name"
                                name="name"
                                label="Name"
                                variant="outlined"
                            />
                        </div>
                        <TextField
                            {...register("report")}
                            style={{ marginTop: "20px" }}
                            id="report"
                            name="report"
                            label="Report"
                            variant="outlined"
                            multiline
                            rows={4}
                        />
                        <div
                            style={{
                                marginTop: "20px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                            }}
                        >
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

export default App;
