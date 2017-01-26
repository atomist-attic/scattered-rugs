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
    name: "SimpleSampleEditorTS",
    description: "A simple sample Rug TypeScript editor",
    parameters: params,
    edit: function (project, _a) {
        var description = _a.description;
        project.addFile("README.md", description);
        return new RugOperation_1.Result(RugOperation_1.Status.Success, "README.md added to project");
    }
};
