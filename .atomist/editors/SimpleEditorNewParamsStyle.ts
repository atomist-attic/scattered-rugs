import {Project} from '@atomist/rug/model/Core'
import {ProjectEditor} from '@atomist/rug/operations/ProjectEditor'
import {parameter} from '@atomist/rug/operations/RugOperation'
import {File} from '@atomist/rug/model/Core'

class SimpleEditor implements ProjectEditor {
    name: string = "SimpleEditorNewParamsStyle"
    description: string = "A nice little editor"
    tags: string[] = ["java", "maven"]

    @parameter({description: "Content", displayName: "content", pattern: "@any", maxLength: 100, displayable: false})
    content: string = "Anders is ?"

    @parameter({description: "some num", displayName: "num", pattern: "^\\\\d+$$", maxLength: 100})
    num: number = 10

    edit(project: Project) {
      project.addFile("README.md", this.content)
    }
  }
export let myeditor = new SimpleEditor()
