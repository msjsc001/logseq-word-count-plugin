  * Preparing search index...
  * The search index is not available

[@logseq/libs]()

  * [@logseq/libs](../modules.html)
  * [IEditorProxy](IEditorProxy.html)



# Interface IEditorProxy

Editor related APIs

#### Hierarchy

  * Record<string, any>
    * IEditorProxy



  * Defined in [src/LSPlugin.ts:528](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L528)



#####  Index

### Properties

[appendBlockInPage](IEditorProxy.html#appendBlockInPage) [checkEditing](IEditorProxy.html#checkEditing) [createPage](IEditorProxy.html#createPage) [deletePage](IEditorProxy.html#deletePage) [editBlock](IEditorProxy.html#editBlock) [exitEditingMode](IEditorProxy.html#exitEditingMode) [getAllPages](IEditorProxy.html#getAllPages) [getBlock](IEditorProxy.html#getBlock) [getBlockProperties](IEditorProxy.html#getBlockProperties) [getBlockProperty](IEditorProxy.html#getBlockProperty) [getCurrentBlock](IEditorProxy.html#getCurrentBlock) [getCurrentPage](IEditorProxy.html#getCurrentPage) [getCurrentPageBlocksTree](IEditorProxy.html#getCurrentPageBlocksTree) [getEditingBlockContent](IEditorProxy.html#getEditingBlockContent) [getEditingCursorPosition](IEditorProxy.html#getEditingCursorPosition) [getNextSiblingBlock](IEditorProxy.html#getNextSiblingBlock) [getPage](IEditorProxy.html#getPage) [getPageBlocksTree](IEditorProxy.html#getPageBlocksTree) [getPageLinkedReferences](IEditorProxy.html#getPageLinkedReferences) [getPagesFromNamespace](IEditorProxy.html#getPagesFromNamespace) [getPagesTreeFromNamespace](IEditorProxy.html#getPagesTreeFromNamespace) [getPreviousSiblingBlock](IEditorProxy.html#getPreviousSiblingBlock) [getSelectedBlocks](IEditorProxy.html#getSelectedBlocks) [insertAtEditingCursor](IEditorProxy.html#insertAtEditingCursor) [insertBatchBlock](IEditorProxy.html#insertBatchBlock) [insertBlock](IEditorProxy.html#insertBlock) [moveBlock](IEditorProxy.html#moveBlock) [newBlockUUID](IEditorProxy.html#newBlockUUID) [onInputSelectionEnd](IEditorProxy.html#onInputSelectionEnd) [openInRightSidebar](IEditorProxy.html#openInRightSidebar) [prependBlockInPage](IEditorProxy.html#prependBlockInPage) [registerBlockContextMenuItem](IEditorProxy.html#registerBlockContextMenuItem) [registerHighlightContextMenuItem](IEditorProxy.html#registerHighlightContextMenuItem) [registerSlashCommand](IEditorProxy.html#registerSlashCommand) [removeBlock](IEditorProxy.html#removeBlock) [removeBlockProperty](IEditorProxy.html#removeBlockProperty) [renamePage](IEditorProxy.html#renamePage) [restoreEditingCursor](IEditorProxy.html#restoreEditingCursor) [saveFocusedCodeEditorContent](IEditorProxy.html#saveFocusedCodeEditorContent) [scrollToBlockInPage](IEditorProxy.html#scrollToBlockInPage) [selectBlock](IEditorProxy.html#selectBlock) [setBlockCollapsed](IEditorProxy.html#setBlockCollapsed) [updateBlock](IEditorProxy.html#updateBlock) [upsertBlockProperty](IEditorProxy.html#upsertBlockProperty)

## Properties

### appendBlockInPage

appendBlockInPage: ((page: [PageIdentity](../types/PageIdentity.html), content: string, opts?: Partial<{   
properties: {};   
}>) => Promise<[BlockEntity](BlockEntity.html)>)

#### Type declaration

  *     * (page: [PageIdentity](../types/PageIdentity.html), content: string, opts?: Partial<{   
properties: {};   
}>): Promise<[BlockEntity](BlockEntity.html)>
    * #### Parameters

      * ##### page: [PageIdentity](../types/PageIdentity.html)

      * ##### content: string

      * ##### `Optional` opts: Partial<{   
properties: {};   
}>

#### Returns Promise<[BlockEntity](BlockEntity.html)>




  * Defined in [src/LSPlugin.ts:736](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L736)



### checkEditing

checkEditing: (() => Promise<string | boolean>)

#### Type declaration

  *     * (): Promise<string | boolean>
    * #### Returns Promise<string | boolean>




  * Defined in [src/LSPlugin.ts:583](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L583)



### createPage

createPage: ((pageName: string, properties?: {}, opts?: Partial<{   
createFirstBlock: boolean;   
format: "markdown" | "org";   
journal: boolean;   
redirect: boolean;   
}>) => Promise<[PageEntity](PageEntity.html)>)

#### Type declaration

  *     * (pageName: string, properties?: {}, opts?: Partial<{   
createFirstBlock: boolean;   
format: "markdown" | "org";   
journal: boolean;   
redirect: boolean;   
}>): Promise<[PageEntity](PageEntity.html)>
    * #### Parameters

      * ##### pageName: string

      * ##### `Optional` properties: {}

      * ##### `Optional` opts: Partial<{   
createFirstBlock: boolean;   
format: "markdown" | "org";   
journal: boolean;   
redirect: boolean;   
}>

#### Returns Promise<[PageEntity](PageEntity.html)>




  * Defined in [src/LSPlugin.ts:713](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L713)



### deletePage

deletePage: ((pageName: string) => Promise<void>)

#### Type declaration

  *     * (pageName: string): Promise<void>
    * #### Parameters

      * ##### pageName: string

#### Returns Promise<void>




  * Defined in [src/LSPlugin.ts:724](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L724)



### editBlock

editBlock: ((srcBlock: [BlockIdentity](../types/BlockIdentity.html), opts?: {   
pos: number;   
}) => Promise<void>)

#### Type declaration

  *     * (srcBlock: [BlockIdentity](../types/BlockIdentity.html), opts?: {   
pos: number;   
}): Promise<void>
    * #### Parameters

      * ##### srcBlock: [BlockIdentity](../types/BlockIdentity.html)

      * ##### `Optional` opts: {   
pos: number;   
}

        * ##### pos: number

#### Returns Promise<void>




  * Defined in [src/LSPlugin.ts:754](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L754)



### exitEditingMode

exitEditingMode: ((selectBlock?: boolean) => Promise<void>)

#### Type declaration

  *     * (selectBlock?: boolean): Promise<void>
    * #### Parameters

      * ##### `Optional` selectBlock: boolean

#### Returns Promise<void>




  * Defined in [src/LSPlugin.ts:589](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L589)



### getAllPages

getAllPages: ((repo?: string) => Promise<[PageEntity](PageEntity.html)[]>)

#### Type declaration

  *     * (repo?: string): Promise<[PageEntity](PageEntity.html)[]>
    * #### Parameters

      * ##### `Optional` repo: string

#### Returns Promise<[PageEntity](PageEntity.html)[]>




  * Defined in [src/LSPlugin.ts:728](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L728)



### getBlock

getBlock: ((srcBlock: number | [BlockIdentity](../types/BlockIdentity.html), opts?: Partial<{   
includeChildren: boolean;   
}>) => Promise<[BlockEntity](BlockEntity.html)>)

#### Type declaration

  *     * (srcBlock: number | [BlockIdentity](../types/BlockIdentity.html), opts?: Partial<{   
includeChildren: boolean;   
}>): Promise<[BlockEntity](BlockEntity.html)>
    * #### Parameters

      * ##### srcBlock: number | [BlockIdentity](../types/BlockIdentity.html)

      * ##### `Optional` opts: Partial<{   
includeChildren: boolean;   
}>

#### Returns Promise<[BlockEntity](BlockEntity.html)>




  * Defined in [src/LSPlugin.ts:688](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L688)



### getBlockProperties

getBlockProperties: ((block: [BlockIdentity](../types/BlockIdentity.html)) => Promise<any>)

#### Type declaration

  *     * (block: [BlockIdentity](../types/BlockIdentity.html)): Promise<any>
    * #### Parameters

      * ##### block: [BlockIdentity](../types/BlockIdentity.html)

#### Returns Promise<any>




  * Defined in [src/LSPlugin.ts:769](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L769)



### getBlockProperty

getBlockProperty: ((block: [BlockIdentity](../types/BlockIdentity.html), key: string) => Promise<any>)

#### Type declaration

  *     * (block: [BlockIdentity](../types/BlockIdentity.html), key: string): Promise<any>
    * #### Parameters

      * ##### block: [BlockIdentity](../types/BlockIdentity.html)

      * ##### key: string

#### Returns Promise<any>




  * Defined in [src/LSPlugin.ts:767](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L767)



### getCurrentBlock

getCurrentBlock: (() => Promise<[BlockEntity](BlockEntity.html)>)

#### Type declaration

  *     * (): Promise<[BlockEntity](BlockEntity.html)>
    * #### Returns Promise<[BlockEntity](BlockEntity.html)>




  * Defined in [src/LSPlugin.ts:597](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L597)



### getCurrentPage

getCurrentPage: (() => Promise<[BlockEntity](BlockEntity.html) | [PageEntity](PageEntity.html)>)

#### Type declaration

  *     * (): Promise<[BlockEntity](BlockEntity.html) | [PageEntity](PageEntity.html)>
    * #### Returns Promise<[BlockEntity](BlockEntity.html) | [PageEntity](PageEntity.html)>




  * Defined in [src/LSPlugin.ts:595](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L595)



### getCurrentPageBlocksTree

getCurrentPageBlocksTree: (() => Promise<[BlockEntity](BlockEntity.html)[]>)

#### Type declaration

  *     * (): Promise<[BlockEntity](BlockEntity.html)[]>
    * get all blocks of the current page as a tree structure

### Example
        
                const blocks = await logseq.Editor.getCurrentPageBlocksTree()  
        initMindMap(blocks)
        

#### Returns Promise<[BlockEntity](BlockEntity.html)[]>




  * Defined in [src/LSPlugin.ts:610](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L610)



### getEditingBlockContent

getEditingBlockContent: (() => Promise<string>)

#### Type declaration

  *     * (): Promise<string>
    * #### Returns Promise<string>




  * Defined in [src/LSPlugin.ts:593](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L593)



### getEditingCursorPosition

getEditingCursorPosition: (() => Promise<[BlockCursorPosition](../types/BlockCursorPosition.html)>)

#### Type declaration

  *     * (): Promise<[BlockCursorPosition](../types/BlockCursorPosition.html)>
    * #### Returns Promise<[BlockCursorPosition](../types/BlockCursorPosition.html)>




  * Defined in [src/LSPlugin.ts:591](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L591)



### getNextSiblingBlock

getNextSiblingBlock: ((srcBlock: [BlockIdentity](../types/BlockIdentity.html)) => Promise<[BlockEntity](BlockEntity.html)>)

#### Type declaration

  *     * (srcBlock: [BlockIdentity](../types/BlockIdentity.html)): Promise<[BlockEntity](BlockEntity.html)>
    * #### Parameters

      * ##### srcBlock: [BlockIdentity](../types/BlockIdentity.html)

#### Returns Promise<[BlockEntity](BlockEntity.html)>




  * Defined in [src/LSPlugin.ts:746](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L746)



### getPage

getPage: ((srcPage: number | [PageIdentity](../types/PageIdentity.html), opts?: Partial<{   
includeChildren: boolean;   
}>) => Promise<[PageEntity](PageEntity.html)>)

#### Type declaration

  *     * (srcPage: number | [PageIdentity](../types/PageIdentity.html), opts?: Partial<{   
includeChildren: boolean;   
}>): Promise<[PageEntity](PageEntity.html)>
    * #### Parameters

      * ##### srcPage: number | [PageIdentity](../types/PageIdentity.html)

      * ##### `Optional` opts: Partial<{   
includeChildren: boolean;   
}>

#### Returns Promise<[PageEntity](PageEntity.html)>




  * Defined in [src/LSPlugin.ts:708](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L708)



### getPageBlocksTree

getPageBlocksTree: ((srcPage: [PageIdentity](../types/PageIdentity.html)) => Promise<[BlockEntity](BlockEntity.html)[]>)

#### Type declaration

  *     * (srcPage: [PageIdentity](../types/PageIdentity.html)): Promise<[BlockEntity](BlockEntity.html)[]>
    * get all blocks for the specified page

#### Parameters

      * ##### srcPage: [PageIdentity](../types/PageIdentity.html)

the page name or uuid

#### Returns Promise<[BlockEntity](BlockEntity.html)[]>




  * Defined in [src/LSPlugin.ts:617](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L617)



### getPageLinkedReferences

getPageLinkedReferences: ((srcPage: [PageIdentity](../types/PageIdentity.html)) => Promise<[page: [PageEntity](PageEntity.html), blocks: [BlockEntity](BlockEntity.html)[]][]>)

#### Type declaration

  *     * (srcPage: [PageIdentity](../types/PageIdentity.html)): Promise<[page: [PageEntity](PageEntity.html), blocks: [BlockEntity](BlockEntity.html)[]][]>
    * get all page/block linked references

#### Parameters

      * ##### srcPage: [PageIdentity](../types/PageIdentity.html)

#### Returns Promise<[page: [PageEntity](PageEntity.html), blocks: [BlockEntity](BlockEntity.html)[]][]>




  * Defined in [src/LSPlugin.ts:623](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L623)



### getPagesFromNamespace

getPagesFromNamespace: ((namespace: string) => Promise<[PageEntity](PageEntity.html)[]>)

#### Type declaration

  *     * (namespace: string): Promise<[PageEntity](PageEntity.html)[]>
    * get flatten pages from top namespace

#### Parameters

      * ##### namespace: string

#### Returns Promise<[PageEntity](PageEntity.html)[]>




  * Defined in [src/LSPlugin.ts:631](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L631)



### getPagesTreeFromNamespace

getPagesTreeFromNamespace: ((namespace: string) => Promise<[PageEntity](PageEntity.html)[]>)

#### Type declaration

  *     * (namespace: string): Promise<[PageEntity](PageEntity.html)[]>
    * construct pages tree from namespace pages

#### Parameters

      * ##### namespace: string

#### Returns Promise<[PageEntity](PageEntity.html)[]>




  * Defined in [src/LSPlugin.ts:639](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L639)



### getPreviousSiblingBlock

getPreviousSiblingBlock: ((srcBlock: [BlockIdentity](../types/BlockIdentity.html)) => Promise<[BlockEntity](BlockEntity.html)>)

#### Type declaration

  *     * (srcBlock: [BlockIdentity](../types/BlockIdentity.html)): Promise<[BlockEntity](BlockEntity.html)>
    * #### Parameters

      * ##### srcBlock: [BlockIdentity](../types/BlockIdentity.html)

#### Returns Promise<[BlockEntity](BlockEntity.html)>




  * Defined in [src/LSPlugin.ts:742](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L742)



### getSelectedBlocks

getSelectedBlocks: (() => Promise<[BlockEntity](BlockEntity.html)[]>)

#### Type declaration

  *     * (): Promise<[BlockEntity](BlockEntity.html)[]>
    * #### Returns Promise<[BlockEntity](BlockEntity.html)[]>




  * Defined in [src/LSPlugin.ts:599](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L599)



### insertAtEditingCursor

insertAtEditingCursor: ((content: string) => Promise<void>)

#### Type declaration

  *     * (content: string): Promise<void>
    * #### Parameters

      * ##### content: string

#### Returns Promise<void>




  * Defined in [src/LSPlugin.ts:585](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L585)



### insertBatchBlock

insertBatchBlock: ((srcBlock: [BlockIdentity](../types/BlockIdentity.html), batch: [IBatchBlock](../types/IBatchBlock.html) | [IBatchBlock](../types/IBatchBlock.html)[], opts?: Partial<{   
before: boolean;   
keepUUID: boolean;   
sibling: boolean;   
}>) => Promise<[BlockEntity](BlockEntity.html)[]>)

#### Type declaration

  *     * (srcBlock: [BlockIdentity](../types/BlockIdentity.html), batch: [IBatchBlock](../types/IBatchBlock.html) | [IBatchBlock](../types/IBatchBlock.html)[], opts?: Partial<{   
before: boolean;   
keepUUID: boolean;   
sibling: boolean;   
}>): Promise<[BlockEntity](BlockEntity.html)[]>
    * ### Example

<https://github.com/logseq/logseq-plugin-samples/tree/master/logseq-reddit-hot-news>

`keepUUID` will allow you to set a custom UUID for blocks by setting their properties.id

#### Parameters

      * ##### srcBlock: [BlockIdentity](../types/BlockIdentity.html)

      * ##### batch: [IBatchBlock](../types/IBatchBlock.html) | [IBatchBlock](../types/IBatchBlock.html)[]

      * ##### `Optional` opts: Partial<{   
before: boolean;   
keepUUID: boolean;   
sibling: boolean;   
}>

#### Returns Promise<[BlockEntity](BlockEntity.html)[]>




  * Defined in [src/LSPlugin.ts:674](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L674)



### insertBlock

insertBlock: ((srcBlock: [BlockIdentity](../types/BlockIdentity.html), content: string, opts?: Partial<{   
before: boolean;   
customUUID: string;   
focus: boolean;   
isPageBlock: boolean;   
properties: {};   
sibling: boolean;   
}>) => Promise<[BlockEntity](BlockEntity.html)>)

#### Type declaration

  *     * (srcBlock: [BlockIdentity](../types/BlockIdentity.html), content: string, opts?: Partial<{   
before: boolean;   
customUUID: string;   
focus: boolean;   
isPageBlock: boolean;   
properties: {};   
sibling: boolean;   
}>): Promise<[BlockEntity](BlockEntity.html)>
    * ### Example
        
                https://github.com/logseq/logseq-plugin-samples/tree/master/logseq-reddit-hot-news
        

#### Parameters

      * ##### srcBlock: [BlockIdentity](../types/BlockIdentity.html)

      * ##### content: string

      * ##### `Optional` opts: Partial<{   
before: boolean;   
customUUID: string;   
focus: boolean;   
isPageBlock: boolean;   
properties: {};   
sibling: boolean;   
}>

#### Returns Promise<[BlockEntity](BlockEntity.html)>




  * Defined in [src/LSPlugin.ts:656](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L656)



### moveBlock

moveBlock: ((srcBlock: [BlockIdentity](../types/BlockIdentity.html), targetBlock: [BlockIdentity](../types/BlockIdentity.html), opts?: Partial<{   
before: boolean;   
children: boolean;   
}>) => Promise<void>)

#### Type declaration

  *     * (srcBlock: [BlockIdentity](../types/BlockIdentity.html), targetBlock: [BlockIdentity](../types/BlockIdentity.html), opts?: Partial<{   
before: boolean;   
children: boolean;   
}>): Promise<void>
    * #### Parameters

      * ##### srcBlock: [BlockIdentity](../types/BlockIdentity.html)

      * ##### targetBlock: [BlockIdentity](../types/BlockIdentity.html)

      * ##### `Optional` opts: Partial<{   
before: boolean;   
children: boolean;   
}>

#### Returns Promise<void>




  * Defined in [src/LSPlugin.ts:748](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L748)



### newBlockUUID

newBlockUUID: (() => Promise<string>)

#### Type declaration

  *     * (): Promise<string>
    * Create a unique UUID string which can then be assigned to a block.

### Added

0.0.8

#### Returns Promise<string>




  * Defined in [src/LSPlugin.ts:647](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L647)



### onInputSelectionEnd

onInputSelectionEnd: [IUserHook](../types/IUserHook.html)<{   
caret: any;   
end: number;   
point: {   
x: number;   
y: number;   
};   
start: number;   
text: string;   
}, [IUserOffHook](../types/IUserOffHook.html)>

### Example
    
    
    https://github.com/logseq/logseq-plugin-samples/tree/master/logseq-a-translator
    

  * Defined in [src/LSPlugin.ts:782](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L782)



### openInRightSidebar

openInRightSidebar: ((uuid: string) => void)

#### Type declaration

  *     * (uuid: string): void
    * #### Parameters

      * ##### uuid: string

#### Returns void




  * Defined in [src/LSPlugin.ts:777](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L777)



### prependBlockInPage

prependBlockInPage: ((page: [PageIdentity](../types/PageIdentity.html), content: string, opts?: Partial<{   
properties: {};   
}>) => Promise<[BlockEntity](BlockEntity.html)>)

#### Type declaration

  *     * (page: [PageIdentity](../types/PageIdentity.html), content: string, opts?: Partial<{   
properties: {};   
}>): Promise<[BlockEntity](BlockEntity.html)>
    * #### Parameters

      * ##### page: [PageIdentity](../types/PageIdentity.html)

      * ##### content: string

      * ##### `Optional` opts: Partial<{   
properties: {};   
}>

#### Returns Promise<[BlockEntity](BlockEntity.html)>




  * Defined in [src/LSPlugin.ts:730](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L730)



### registerBlockContextMenuItem

registerBlockContextMenuItem: ((label: string, action: [BlockCommandCallback](../types/BlockCommandCallback.html)) => unknown)

#### Type declaration

  *     * (label: string, action: [BlockCommandCallback](../types/BlockCommandCallback.html)): unknown
    * register a custom command in the block context menu (triggered by right-clicking the block dot)

#### Parameters

      * ##### label: string

displayed name of command

      * ##### action: [BlockCommandCallback](../types/BlockCommandCallback.html)

can be a single callback function to run when the command is called

#### Returns unknown




  * Defined in [src/LSPlugin.ts:562](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L562)



### registerHighlightContextMenuItem

registerHighlightContextMenuItem: ((label: string, action: [SimpleCommandCallback](../types/SimpleCommandCallback.html)<any>, opts?: {   
clearSelection: boolean;   
}) => unknown)

#### Type declaration

  *     * (label: string, action: [SimpleCommandCallback](../types/SimpleCommandCallback.html)<any>, opts?: {   
clearSelection: boolean;   
}): unknown
    * Current it's only available for pdf viewer

#### Parameters

      * ##### label: string

displayed name of command

      * ##### action: [SimpleCommandCallback](../types/SimpleCommandCallback.html)<any>

callback for the clickable item

      * ##### `Optional` opts: {   
clearSelection: boolean;   
}

clearSelection: clear highlight selection when callback invoked

        * ##### clearSelection: boolean

#### Returns unknown




  * Defined in [src/LSPlugin.ts:573](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L573)



### registerSlashCommand

registerSlashCommand: ((tag: string, action: [BlockCommandCallback](../types/BlockCommandCallback.html) | [cmd: [SlashCommandActionCmd](../types/SlashCommandActionCmd.html), ...args: any[]][]) => unknown)

#### Type declaration

  *     * (tag: string, action: [BlockCommandCallback](../types/BlockCommandCallback.html) | [cmd: [SlashCommandActionCmd](../types/SlashCommandActionCmd.html), ...args: any[]][]): unknown
    * register a custom command which will be added to the Logseq slash command list

### Example
        
                https://github.com/logseq/logseq-plugin-samples/tree/master/logseq-slash-commands
        

### Example
        
                logseq.Editor.registerSlashCommand("Say Hi", () => {  
          console.log('Hi!')  
        })
        

### Example
        
                logseq.Editor.registerSlashCommand("💥 Big Bang", [  
          ["editor/hook", "customCallback"],  
          ["editor/clear-current-slash"],  
        ]);
        

#### Parameters

      * ##### tag: string

displayed name of command

      * ##### action: [BlockCommandCallback](../types/BlockCommandCallback.html) | [cmd: [SlashCommandActionCmd](../types/SlashCommandActionCmd.html), ...args: any[]][]

can be a single callback function to run when the command is called, or an array of fixed commands with arguments

#### Returns unknown




  * Defined in [src/LSPlugin.ts:552](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L552)



### removeBlock

removeBlock: ((srcBlock: [BlockIdentity](../types/BlockIdentity.html)) => Promise<void>)

#### Type declaration

  *     * (srcBlock: [BlockIdentity](../types/BlockIdentity.html)): Promise<void>
    * #### Parameters

      * ##### srcBlock: [BlockIdentity](../types/BlockIdentity.html)

#### Returns Promise<void>




  * Defined in [src/LSPlugin.ts:686](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L686)



### removeBlockProperty

removeBlockProperty: ((block: [BlockIdentity](../types/BlockIdentity.html), key: string) => Promise<void>)

#### Type declaration

  *     * (block: [BlockIdentity](../types/BlockIdentity.html), key: string): Promise<void>
    * #### Parameters

      * ##### block: [BlockIdentity](../types/BlockIdentity.html)

      * ##### key: string

#### Returns Promise<void>




  * Defined in [src/LSPlugin.ts:765](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L765)



### renamePage

renamePage: ((oldName: string, newName: string) => Promise<void>)

#### Type declaration

  *     * (oldName: string, newName: string): Promise<void>
    * #### Parameters

      * ##### oldName: string

      * ##### newName: string

#### Returns Promise<void>




  * Defined in [src/LSPlugin.ts:726](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L726)



### restoreEditingCursor

restoreEditingCursor: (() => Promise<void>)

#### Type declaration

  *     * (): Promise<void>
    * #### Returns Promise<void>




  * Defined in [src/LSPlugin.ts:587](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L587)



### saveFocusedCodeEditorContent

saveFocusedCodeEditorContent: (() => Promise<void>)

#### Type declaration

  *     * (): Promise<void>
    * #### Returns Promise<void>




  * Defined in [src/LSPlugin.ts:757](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L757)



### scrollToBlockInPage

scrollToBlockInPage: ((pageName: string, blockId: [BlockIdentity](../types/BlockIdentity.html), opts?: {   
replaceState: boolean;   
}) => void)

#### Type declaration

  *     * (pageName: string, blockId: [BlockIdentity](../types/BlockIdentity.html), opts?: {   
replaceState: boolean;   
}): void
    * #### Parameters

      * ##### pageName: string

      * ##### blockId: [BlockIdentity](../types/BlockIdentity.html)

      * ##### `Optional` opts: {   
replaceState: boolean;   
}

        * ##### replaceState: boolean

#### Returns void




  * Defined in [src/LSPlugin.ts:771](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L771)



### selectBlock

selectBlock: ((srcBlock: [BlockIdentity](../types/BlockIdentity.html)) => Promise<void>)

#### Type declaration

  *     * (srcBlock: [BlockIdentity](../types/BlockIdentity.html)): Promise<void>
    * #### Parameters

      * ##### srcBlock: [BlockIdentity](../types/BlockIdentity.html)

#### Returns Promise<void>




  * Defined in [src/LSPlugin.ts:755](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L755)



### setBlockCollapsed

setBlockCollapsed: ((uuid: string, opts: boolean | "toggle" | {   
flag: boolean | "toggle";   
}) => Promise<void>)

#### Type declaration

  *     * (uuid: string, opts: boolean | "toggle" | {   
flag: boolean | "toggle";   
}): Promise<void>
    * ### Example
        
                 logseq.Editor.setBlockCollapsed('uuid', true)  
         logseq.Editor.setBlockCollapsed('uuid', 'toggle')
        

#### Parameters

      * ##### uuid: string

      * ##### opts: boolean | "toggle" | {   
flag: boolean | "toggle";   
}

#### Returns Promise<void>




  * Defined in [src/LSPlugin.ts:703](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L703)



### updateBlock

updateBlock: ((srcBlock: [BlockIdentity](../types/BlockIdentity.html), content: string, opts?: Partial<{   
properties: {};   
}>) => Promise<void>)

#### Type declaration

  *     * (srcBlock: [BlockIdentity](../types/BlockIdentity.html), content: string, opts?: Partial<{   
properties: {};   
}>): Promise<void>
    * #### Parameters

      * ##### srcBlock: [BlockIdentity](../types/BlockIdentity.html)

      * ##### content: string

      * ##### `Optional` opts: Partial<{   
properties: {};   
}>

#### Returns Promise<void>




  * Defined in [src/LSPlugin.ts:680](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L680)



### upsertBlockProperty

upsertBlockProperty: ((block: [BlockIdentity](../types/BlockIdentity.html), key: string, value: any) => Promise<void>)

#### Type declaration

  *     * (block: [BlockIdentity](../types/BlockIdentity.html), key: string, value: any): Promise<void>
    * #### Parameters

      * ##### block: [BlockIdentity](../types/BlockIdentity.html)

      * ##### key: string

      * ##### value: any

#### Returns Promise<void>




  * Defined in [src/LSPlugin.ts:759](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L759)



###  Settings

#### Member Visibility

  * Protected
  * Private
  * Inherited
  * External



#### Theme

OSLightDark

Generated using [TypeDoc](https://typedoc.org/)
