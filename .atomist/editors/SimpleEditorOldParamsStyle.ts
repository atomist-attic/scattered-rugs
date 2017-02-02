import { ProjectEditor } from "@atomist/rug/operations/ProjectEditor"
import { Status, Result, Parameter } from "@atomist/rug/operations/RugOperation"
import { Project, Pair, File } from '@atomist/rug/model/Core'

let params: Parameter[] = [
    {
        name: "content",
        displayName: "Content",
        description: "Text to be added to the README.md",
        validInput: "Any valid text",
        minLength: 1,
        maxLength: 100,
        pattern: "@any",
    }
]

export let editor: ProjectEditor = {
    tags: ["simple"],
    name: "SimpleEditorOldParamsStyle",
    description: "A simple sample Rug TypeScript editor",
    parameters: params,
    edit(project: Project, {content} : {content: string}) {

        project.addFile("README.md", content);

        return new Result(Status.Success, "README.md added to project")
    }
}
