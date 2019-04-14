const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mc = require("./controllers/messages_controller");

app.use(bodyParser.json()); // badyParser give access to req.body in endpoints
app.use(express.static(__dirname + "/../public/build")); //

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
