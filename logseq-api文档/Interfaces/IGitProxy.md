  * Preparing search index...
  * The search index is not available

[@logseq/libs]()

  * [@logseq/libs](../modules.html)
  * [IGitProxy](IGitProxy.html)



# Interface IGitProxy

Git related APIS

#### Hierarchy

  * IGitProxy



  * Defined in [src/LSPlugin.ts:836](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L836)



#####  Index

### Properties

[execCommand](IGitProxy.html#execCommand) [loadIgnoreFile](IGitProxy.html#loadIgnoreFile) [saveIgnoreFile](IGitProxy.html#saveIgnoreFile)

## Properties

### execCommand

execCommand: ((args: string[]) => Promise<[IGitResult](../types/IGitResult.html)>)

#### Type declaration

  *     * (args: string[]): Promise<[IGitResult](../types/IGitResult.html)>
    * ### Added

0.0.2

### Link

<https://github.com/desktop/dugite/blob/master/docs/api/exec.md>

#### Parameters

      * ##### args: string[]

#### Returns Promise<[IGitResult](../types/IGitResult.html)>




  * Defined in [src/LSPlugin.ts:842](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L842)



### loadIgnoreFile

loadIgnoreFile: (() => Promise<string>)

#### Type declaration

  *     * (): Promise<string>
    * #### Returns Promise<string>




  * Defined in [src/LSPlugin.ts:844](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L844)



### saveIgnoreFile

saveIgnoreFile: ((content: string) => Promise<void>)

#### Type declaration

  *     * (content: string): Promise<void>
    * #### Parameters

      * ##### content: string

#### Returns Promise<void>




  * Defined in [src/LSPlugin.ts:845](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L845)



###  Settings

#### Member Visibility

  * Protected
  * Private
  * Inherited
  * External



#### Theme

OSLightDark

Generated using [TypeDoc](https://typedoc.org/)
