let jwt = require("jsonwebtoken");

exports.create = function(req, res) {

    var login = req.body || { userId: "", password: "" };

    if(login.password == "password") {
        var payload = {
            name: login.userId,
            access: "book_manage"
        }

        var token = jwt.sign(payload, "secret", {
            expiresIn: 1440
        });

        res.set("Authorization", token);
        res.status(204).send();
    } else {
        res.status(401).send();
    }
}
