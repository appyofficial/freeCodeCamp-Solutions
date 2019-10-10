/*
Access the myStorageobject and assign the contents of the glove boxproperty to the gloveBoxContentsvariable. Use bracket notation for properties with a space in their name.
*/

// Setup
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];