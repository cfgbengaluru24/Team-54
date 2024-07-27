import react from "react";
import "./App.css";
import axios from "axios";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function Form() {
	/*const [data, setData] = react.useState(null);

	react.useEffect(() => {
		axios.get("/api").then((res) => setData(res.data.message));
	}, []);
*/

	const { register, handleSubmit } = useForm();

	const onsub = (data) => {
		axios.post("http://localhost:3001/edu/data", data)
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
		// <Router>
		// 	<Routes>
		// 		<Route exact path="/" element={<Main/>}/>
		// 		<Route exact path="/about" element={<Login/>}/>
		// 	</Routes>
		// </Router>
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
				}}
			>
				<form
					onSubmit={handleSubmit((data) => {
						onsub(data);
					})}
				>
					<FormControl>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-evenly",
							}}
						>
							<TextField  onClick={() => handleSpeak('Child id')}
								{...register("child-id")}
								style={{ marginTop: "20px", marginRight: "10px" }}
								id="child-id"
								name="child-id"
								label="Child Id"
								variant="outlined"
							/>
							<TextField
							 	onClick={() => handleSpeak('School')}
								{...register("school")}
								style={{ marginTop: "20px" }}
								id="school"
								name="school"
								label="School Name"
								variant="outlined"
							/>
						</div>
						<TextField
							onClick={() => handleSpeak('Marks')}
							{...register("marks")}
							style={{ marginTop: "20px" }}
							id="marks"
							name="marks"
							label="Marks"
							variant="outlined"
						/>
						<TextField
							onClick={() => handleSpeak('Blood Group')}
							{...register("bg")}
							style={{ marginTop: "20px" }}
							name="bg"
							label="Blood Group"
							variant="outlined"
						/>
						<div
							style={{
								marginTop: "50px",
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

export default Form;
