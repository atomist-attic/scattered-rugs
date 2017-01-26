"use strict";
var RugOperation_1 = require("@atomist/rug/operations/RugOperation");
var params = [
    {
        name: "description",
        displayName: "Description",
        description: "Text to be added to the README.md",
        validInput: "Any valid text",
        minLength: 1,
        pattern: "@any",
    }
];
exports.editor = {
    tags: ["simple"],
    name: "SimpleSampleEditor",
    description: "A simple sample TypeScript editor",
    parameters: params,
    edit: function (project, p) {
        project.addFile("README.md", p.description);
        return new RugOperation_1.Result(RugOperation_1.Status.Success, "README.md added to project");
    }
};
