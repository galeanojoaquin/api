const path = require("path");

class HandlerbarOptionsServices {
      handlebarOptions = {
        viewEngine: {
            extName: ".handlebars",
            partialsDir: path.resolve("./src/assets/html"),
            defaultLayout: false,
        },
        viewPath: path.resolve("./src/assets/html"),
        extName: ".handlebars",
    };
}


// const handlebarOptions = new HandlerbarOptionsServices();
// console.log(handlebarOptions.handlebarOptions);

module.exports = HandlerbarOptionsServices;