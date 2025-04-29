  * Preparing search index...
  * The search index is not available

[@logseq/libs]()

  * [@logseq/libs](../modules.html)
  * [IUIProxy](IUIProxy.html)



# Interface IUIProxy

#### Hierarchy

  * IUIProxy



  * Defined in [src/LSPlugin.ts:858](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L858)



#####  Index

### Properties

[closeMsg](IUIProxy.html#closeMsg) [showMsg](IUIProxy.html#showMsg)

## Properties

### closeMsg

closeMsg: ((key: string) => void)

#### Type declaration

  *     * (key: string): void
    * #### Parameters

      * ##### key: string

#### Returns void




  * Defined in [src/LSPlugin.ts:872](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L872)



### showMsg

showMsg: ((content: string, status?: string, opts?: Partial<[UIMsgOptions](../types/UIMsgOptions.html)>) => Promise<string>)

#### Type declaration

  *     * (content: string, status?: string, opts?: Partial<[UIMsgOptions](../types/UIMsgOptions.html)>): Promise<string>
    * ### Added

0.0.2

#### Parameters

      * ##### content: string

      * ##### `Optional` status: string

      * ##### `Optional` opts: Partial<[UIMsgOptions](../types/UIMsgOptions.html)>

#### Returns Promise<string>




  * Defined in [src/LSPlugin.ts:866](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L866)



###  Settings

#### Member Visibility

  * Protected
  * Private
  * Inherited
  * External



#### Theme

OSLightDark

Generated using [TypeDoc](https://typedoc.org/)
