import { ProjectEditor } from "@atomist/rug/operations/ProjectEditor"
import { Status, Result, Parameter } from "@atomist/rug/operations/RugOperation"
import { Project, Pair, File } from '@atomist/rug/model/Core'
import { PathExpression, PathExpressionEngine, TreeNode, Match } from '@atomist/rug/tree/PathExpression'


let params: Parameter[] = [
    {
        name: "description",
        displayName: "Description",
        description: "Text to be added to the README.md",
        validInput: "Any valid text",
        minLength: 1,
        pattern: "@any",
    }
]

interface Parameters {
    description: string
}

export let editor: ProjectEditor = {
    tags: ["simple"],
    name: "SimpleSampleEditor",
    description: "A simple sample TypeScript editor",
    parameters: params,
    edit(project: Project, p: Parameters): Result {

        project.addFile("README.md", p.description);

        return new Result(Status.Success, "README.md added to project")
    }
}
