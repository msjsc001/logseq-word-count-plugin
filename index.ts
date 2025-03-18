import { ISettingSchema } from '@logseq/libs/dist/LSPlugin.user'
import '@logseq/libs'

const main = async () => {
  console.log('plugin loaded')
  
  logseq.useSettingsSchema([
    {
      key: "showWordCount",
      type: "boolean",
      default: true,
      description: "Show word count in editor",
    },
  ] as ISettingSchema[])

  logseq.Editor.registerSlashCommand(
    'Word Count',
    async () => {
      const block = await logseq.Editor.getCurrentBlock()
      if (block) {
        const content = block.content
        const wordCount = content.trim().split(/\s+/).length
        const charCount = content.replace(/\s/g, '').length
        logseq.UI.showMsg(`Words: ${wordCount}, Characters: ${charCount}`)
      }
    }
  )
}

logseq.ready(main).catch(console.error)
