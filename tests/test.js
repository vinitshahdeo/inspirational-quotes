const data = require('./../data/data.json');
const assert = require('assert');

describe("data.json", () => {
    it("should not contain any duplicate quotes", () => {

        let initialNumberOfQuotes = data.length;
        for (let i = 0; i < data.length; i++) {
            data[i]["text"] = data[i]["text"].replace(/['".,/#!$%^&*;:{}=\-_`~() @]/g, "").toLowerCase();
            data[i]["from"] = data[i]["from"].replace(/['".,/#!$%^&*;:{}=\-_`~() @]/g, "").toLowerCase();
        }
        let ArrayOfStringObject = [];
        for (let i = 0; i < data.length; i++) {
            ArrayOfStringObject.push(JSON.stringify(data[i]))
        }
        let setOfAllObjects = new Set(ArrayOfStringObject);
        assert.equal(initialNumberOfQuotes, setOfAllObjects.size);
    })
})