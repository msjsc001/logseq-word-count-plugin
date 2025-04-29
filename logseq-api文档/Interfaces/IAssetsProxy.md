  * Preparing search index...
  * The search index is not available

[@logseq/libs]()

  * [@logseq/libs](../modules.html)
  * [IAssetsProxy](IAssetsProxy.html)



# Interface IAssetsProxy

Assets related APIs

#### Hierarchy

  * IAssetsProxy



  * Defined in [src/LSPlugin.ts:878](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L878)



#####  Index

### Methods

[listFilesOfCurrentGraph](IAssetsProxy.html#listFilesOfCurrentGraph) [makeSandboxStorage](IAssetsProxy.html#makeSandboxStorage)

## Methods

### listFilesOfCurrentGraph

  * listFilesOfCurrentGraph(exts?: string | string[]): Promise<{   
accessTime: number;   
birthTime: number;   
changeTime: number;   
modifiedTime: number;   
path: string;   
size: number;   
}[]>
  * ### Added

0.0.2

#### Parameters

    * ##### `Optional` exts: string | string[]

#### Returns Promise<{   
accessTime: number;   
birthTime: number;   
changeTime: number;   
modifiedTime: number;   
path: string;   
size: number;   
}[]>

    * Defined in [src/LSPlugin.ts:883](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L883)



### makeSandboxStorage

  * makeSandboxStorage(): IAsyncStorage
  * ### Example
    
        https://github.com/logseq/logseq/pull/6488
    

### Added

0.0.10

#### Returns IAsyncStorage

    * Defined in [src/LSPlugin.ts:896](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L896)



###  Settings

#### Member Visibility

  * Protected
  * Private
  * Inherited
  * External



#### Theme

OSLightDark

Generated using [TypeDoc](https://typedoc.org/)
