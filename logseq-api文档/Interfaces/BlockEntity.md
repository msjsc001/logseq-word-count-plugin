  * Preparing search index...
  * The search index is not available

[@logseq/libs]()

  * [@logseq/libs](../modules.html)
  * [BlockEntity](BlockEntity.html)



# Interface BlockEntity

Block - Logseq's fundamental data structure.

#### Hierarchy

  * BlockEntity



#### Indexable

[key: string]: any

  * Defined in [src/LSPlugin.ts:167](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L167)



#####  Index

### Properties

[anchor?](BlockEntity.html#anchor) [body?](BlockEntity.html#body) [children?](BlockEntity.html#children) [container?](BlockEntity.html#container) [content](BlockEntity.html#content) [file?](BlockEntity.html#file) [format](BlockEntity.html#format) [id](BlockEntity.html#id) [left](BlockEntity.html#left) [level?](BlockEntity.html#level) [meta?](BlockEntity.html#meta) [page](BlockEntity.html#page) [parent](BlockEntity.html#parent) [properties?](BlockEntity.html#properties-1) [title?](BlockEntity.html#title) [unordered](BlockEntity.html#unordered) [uuid](BlockEntity.html#uuid)

## Properties

### `Optional` anchor

anchor?: string

  * Defined in [src/LSPlugin.ts:179](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L179)



### `Optional` body

body?: any

  * Defined in [src/LSPlugin.ts:180](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L180)



### `Optional` children

children?: ([BlockEntity](BlockEntity.html) | [BlockUUIDTuple](../types/BlockUUIDTuple.html))[]

  * Defined in [src/LSPlugin.ts:181](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L181)



### `Optional` container

container?: string

  * Defined in [src/LSPlugin.ts:182](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L182)



### content

content: string

  * Defined in [src/LSPlugin.ts:174](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L174)



### `Optional` file

file?: [IEntityID](../types/IEntityID.html)

  * Defined in [src/LSPlugin.ts:183](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L183)



### format

format: "markdown" | "org"

  * Defined in [src/LSPlugin.ts:171](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L171)



### id

id: number

  * Defined in [src/LSPlugin.ts:168](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L168)



### left

left: [IEntityID](../types/IEntityID.html)

  * Defined in [src/LSPlugin.ts:170](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L170)



### `Optional` level

level?: number

  * Defined in [src/LSPlugin.ts:184](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L184)



### `Optional` meta

meta?: {   
endPos: number;   
properties: any;   
startPos: number;   
timestamps: any;   
}

#### Type declaration

  * ##### endPos: number

  * ##### properties: any

  * ##### startPos: number

  * ##### timestamps: any




  * Defined in [src/LSPlugin.ts:185](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L185)



### page

page: [IEntityID](../types/IEntityID.html)

  * Defined in [src/LSPlugin.ts:175](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L175)



### parent

parent: [IEntityID](../types/IEntityID.html)

  * Defined in [src/LSPlugin.ts:172](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L172)



### `Optional` properties

properties?: Record<string, any>

  * Defined in [src/LSPlugin.ts:176](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L176)



### `Optional` title

title?: any[]

  * Defined in [src/LSPlugin.ts:186](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L186)



### unordered

unordered: boolean

  * Defined in [src/LSPlugin.ts:173](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L173)



### uuid

uuid: string

  * Defined in [src/LSPlugin.ts:169](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L169)



###  Settings

#### Member Visibility

  * Protected
  * Private
  * Inherited
  * External



#### Theme

OSLightDark

Generated using [TypeDoc](https://typedoc.org/)
