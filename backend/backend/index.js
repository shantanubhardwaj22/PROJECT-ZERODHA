const express = require("express");
const users = require("./MOCK_DATA.json");
const { urlencoded } = require("body-parser");
const fs= require('fs');
const app = express();
const port = 8055;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
 
app.route("/api/user/:id")
 .get((req, res) => {
    const id = Number(req.params.id); 
    const user= users.find((user)=> user.id===id);
    return res.json(user);
})
.patch((req,res)=>{
    return res.json({status:" pending"});
})
.delete((req,res)=>{
    return res.json({status:" pending"});
})

app.post("/api/user",(req,res)=>{
    const body= req.body;
    users.push({...body, id: users.length+1});
    console.log("BODY =>",req.body);
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err,data)=>{
        return res.json({status:" pending"});
    }) 
  
});
 
app.get("/api/user", (req, res) => {
   res.json(users);
});

app.get("/user", (req, res) => {
  const html = `
    <ul>
      ${users.map(user => `<li>${user.name}</li>`).join("")}
    </ul>
  `;
  res.send(html);
});
 

app.listen(port, () => {
  console.log(`App is listening on port ${port}...`);
});
