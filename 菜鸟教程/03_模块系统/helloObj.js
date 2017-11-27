function OBJ() {
    var name

    this.setName = function (myname) {
        name = myname;
        console.log("My name is:", name);

    };
}

module.exports = OBJ;