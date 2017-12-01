exports.getAll = function(req, res) {

    var data = [ {
        title: "Harry Potter",
        author: "J.K. Rowling",
        genre: "available",
        description: "The boy who lived.",
        year:"1996"
    }];

    res.status(200).json(data);
}
