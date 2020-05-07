const express = require('express')

 const {MongoClient} = require('mongodb');
 const client = MongoClient.connect("mongodb://localhost:27017/employeedb", 
{ useUnifiedTopology: true }, (error, client)=>{
    if(!error){
      console.log("DB Connected");
       db = client.db('employeedb')
       todo = db.collection('todo')
    } else{
      console.log("DB not connected")
    }
});

const app = express()

app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const employees =[
  {
      empolyeeID: "ESC001",
      name: "Goku Maxwell",
      position: "CEO"

  },
  {
    empolyeeID: "ESC002",
    name: "Fred Awotwe",
    position: "IT Manager"

},
{
    empolyeeID: "ESC003",
    name: "Yaw Adomako",
    position: "Chief Security"

}
]

app.get('/', function (req, res) {
  res.render('home',{employees });
});

app.listen(3000)
