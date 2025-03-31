  * Preparing search index...
  * The search index is not available

[@logseq/libs]()

  * [@logseq/libs](../modules.html)
  * [IDBProxy](IDBProxy.html)



# Interface IDBProxy

Datascript related APIs

#### Hierarchy

  * IDBProxy



  * Defined in [src/LSPlugin.ts:794](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L794)



#####  Index

### Properties

[datascriptQuery](IDBProxy.html#datascriptQuery) [onChanged](IDBProxy.html#onChanged) [q](IDBProxy.html#q)

### Methods

[onBlockChanged](IDBProxy.html#onBlockChanged)

## Properties

### datascriptQuery

datascriptQuery: (<T>(query: string, ...inputs: any[]) => Promise<T>)

#### Type declaration

  *     * <T>(query: string, ...inputs: any[]): Promise<T>
    * Run a datascript query

#### Type Parameters

      * #### T = any

#### Parameters

      * ##### query: string

      * ##### `Rest` ...inputs: any[]

#### Returns Promise<T>




  * Defined in [src/LSPlugin.ts:805](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L805)



### onChanged

onChanged: [IUserHook](../types/IUserHook.html)<{   
blocks: [BlockEntity](BlockEntity.html)[];   
txData: [IDatom](../types/IDatom.html)[];   
txMeta?: {   
outlinerOp: string;   
[key: string]: any;   
};   
}, [IUserOffHook](../types/IUserOffHook.html)>

Hook all transaction data of DB

### Added

0.0.2

  * Defined in [src/LSPlugin.ts:812](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L812)



### q

q: (<T>(dsl: string) => Promise<T[]>)

#### Type declaration

  *     * <T>(dsl: string): Promise<T[]>
    * Run a DSL query

### Link

<https://docs.logseq.com/#/page/queries>

#### Type Parameters

      * #### T = any

#### Parameters

      * ##### dsl: string

#### Returns Promise<T[]>




  * Defined in [src/LSPlugin.ts:800](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L800)



## Methods

### onBlockChanged

  * onBlockChanged(uuid: string, callback: ((block: [BlockEntity](BlockEntity.html), txData: [IDatom](../types/IDatom.html)[], txMeta?: {   
outlinerOp: string;   
[key: string]: any;   
}) => void)): [IUserOffHook](../types/IUserOffHook.html)
  * Subscribe a specific block changed event

### Added

0.0.2

#### Parameters

    * ##### uuid: string

    * ##### callback: ((block: [BlockEntity](BlockEntity.html), txData: [IDatom](../types/IDatom.html)[], txMeta?: {   
outlinerOp: string;   
[key: string]: any;   
}) => void)

      *         * (block: [BlockEntity](BlockEntity.html), txData: [IDatom](../types/IDatom.html)[], txMeta?: {   
outlinerOp: string;   
[key: string]: any;   
}): void
        * #### Parameters

          * ##### block: [BlockEntity](BlockEntity.html)

          * ##### txData: [IDatom](../types/IDatom.html)[]

          * ##### `Optional` txMeta: {   
outlinerOp: string;   
[key: string]: any;   
}

            * ##### [key: string]: any

            * ##### outlinerOp: string

#### Returns void

#### Returns [IUserOffHook](../types/IUserOffHook.html)

    * Defined in [src/LSPlugin.ts:823](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L823)



###  Settings

#### Member Visibility

  * Protected
  * Private
  * Inherited
  * External



#### Theme

OSLightDark

Generated using [TypeDoc](https://typedoc.org/)
