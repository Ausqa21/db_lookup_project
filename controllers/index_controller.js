const rest = require("../utils/Rest")

module.exports = {
    index: function(req, res, next) {
        return res.json({"msg": "Hello, welcome to my API"});
    },

    about: function(req, res, next) {
        return res.json(rest.success("You get some data"));
    }
}