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
    // .then((tutorial) => {
    //     if (tutorial) {
    //       res.json(tutorial);
    //     } else {
    //       res.status(404).send("Tutorial not found.");
    //     }
    //   })
    //   .catch((err) => {
    //     res.status(500).send(err.message);
    //   });
})

app.listen(Port, () => {
    console.log(`Server running on port ${Port}.`);
});