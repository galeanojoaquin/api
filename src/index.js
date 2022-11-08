const app = require("./app");

const main = ()  => {
    app.listen(app.get("port"));
    console.log(`Server running on port ${app.get("port")} 🚀​`);
}

main();