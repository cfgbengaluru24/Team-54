const express = require("express");
// const cors = require("cors");

const Port = process.env.port || 3000;

const Update=(id,data)=>{
    console.log(id)
    console.log(data)
}

const getData=(id)=>{
    console.log(id);
}

const Post=(form)=>{
    console.log(form.name);
}

app = express();
app.use(express.json());

app.put("/edu/data/:id", (req, res) => {
    const id=req.params.id;
	const data = req.body;
	Update(id,data)
		// .then(() => {
		// 	res.status(201).send("User Created");
		// })
		// .catch((err) => {
		// 	res.status(500).send(err.message);
		// });
});

app.get("/edu/data/:id",(req,res)=>{
    const id=req.params.id;
    getData(id)
    // .then(() => {
    //     res.status(201).send("Student got")
    //   })
    //   .catch((err) => {
    //     res.status(500).send(err.message);
    //   });
})

app.post("/edu/data/:id", (req, res) =>{
    const form=req.body
    Post(form)
    res.status(201).send("Student got")
})

app.listen(Port, () => {
    console.log(`Server running on port ${Port}.`);
});