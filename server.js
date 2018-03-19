const xp = require("express");
const port = 8000;

const app = xp();


app.use(xp.static(__dirname + '/angularApp/dist'));

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
});

app.listen(port, () => {console.log(`Server on port #${port}`)} );