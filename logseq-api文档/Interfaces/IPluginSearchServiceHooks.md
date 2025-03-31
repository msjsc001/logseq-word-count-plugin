  * Preparing search index...
  * The search index is not available

[@logseq/libs]()

  * [@logseq/libs](../modules.html)
  * [IPluginSearchServiceHooks](IPluginSearchServiceHooks.html)



# Interface IPluginSearchServiceHooks

#### Hierarchy

  * IPluginSearchServiceHooks



  * Defined in [src/LSPlugin.ts:301](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L301)



#####  Index

### Properties

[name](IPluginSearchServiceHooks.html#name) [onBlocksChanged](IPluginSearchServiceHooks.html#onBlocksChanged) [onGraphRemoved](IPluginSearchServiceHooks.html#onGraphRemoved) [onIndiceInit](IPluginSearchServiceHooks.html#onIndiceInit) [onIndiceReset](IPluginSearchServiceHooks.html#onIndiceReset) [onQuery](IPluginSearchServiceHooks.html#onQuery) [options?](IPluginSearchServiceHooks.html#options)

## Properties

### name

name: string

  * Defined in [src/LSPlugin.ts:302](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L302)



### onBlocksChanged

onBlocksChanged: ((graph: string, changes: {   
added: [SearchBlockItem](../types/SearchBlockItem.html)[];   
removed: [BlockEntity](BlockEntity.html)[];   
}) => Promise<void>)

#### Type declaration

  *     * (graph: string, changes: {   
added: [SearchBlockItem](../types/SearchBlockItem.html)[];   
removed: [BlockEntity](BlockEntity.html)[];   
}): Promise<void>
    * #### Parameters

      * ##### graph: string

      * ##### changes: {   
added: [SearchBlockItem](../types/SearchBlockItem.html)[];   
removed: [BlockEntity](BlockEntity.html)[];   
}

        * ##### added: [SearchBlockItem](../types/SearchBlockItem.html)[]

        * ##### removed: [BlockEntity](BlockEntity.html)[]

#### Returns Promise<void>




  * Defined in [src/LSPlugin.ts:320](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L320)



### onGraphRemoved

onGraphRemoved: ((graph: string, opts?: {}) => Promise<any>)

#### Type declaration

  *     * (graph: string, opts?: {}): Promise<any>
    * #### Parameters

      * ##### graph: string

      * ##### `Optional` opts: {}

#### Returns Promise<any>




  * Defined in [src/LSPlugin.ts:321](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L321)



### onIndiceInit

onIndiceInit: ((graph: string) => Promise<boolean>)

#### Type declaration

  *     * (graph: string): Promise<boolean>
    * #### Parameters

      * ##### graph: string

#### Returns Promise<boolean>




  * Defined in [src/LSPlugin.ts:318](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L318)



### onIndiceReset

onIndiceReset: ((graph: string) => Promise<void>)

#### Type declaration

  *     * (graph: string): Promise<void>
    * #### Parameters

      * ##### graph: string

#### Returns Promise<void>




  * Defined in [src/LSPlugin.ts:319](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L319)



### onQuery

onQuery: ((graph: string, key: string, opts: Partial<{   
limit: number;   
}>) => Promise<{   
blocks?: Partial<[SearchBlockItem](../types/SearchBlockItem.html)>[];   
files?: string[];   
graph: string;   
key: string;   
pages?: string[];   
}>)

#### Type declaration

  *     * (graph: string, key: string, opts: Partial<{   
limit: number;   
}>): Promise<{   
blocks?: Partial<[SearchBlockItem](../types/SearchBlockItem.html)>[];   
files?: string[];   
graph: string;   
key: string;   
pages?: string[];   
}>
    * #### Parameters

      * ##### graph: string

      * ##### key: string

      * ##### opts: Partial<{   
limit: number;   
}>

#### Returns Promise<{   
blocks?: Partial<[SearchBlockItem](../types/SearchBlockItem.html)>[];   
files?: string[];   
graph: string;   
key: string;   
pages?: string[];   
}>




  * Defined in [src/LSPlugin.ts:305](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L305)



### `Optional` options

options?: Record<string, any>

  * Defined in [src/LSPlugin.ts:303](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L303)



###  Settings

#### Member Visibility

  * Protected
  * Private
  * Inherited
  * External



#### Theme

OSLightDark

Generated using [TypeDoc](https://typedoc.org/)
