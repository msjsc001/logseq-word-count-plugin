  * Preparing search index...
  * The search index is not available

[@logseq/libs]()

  * [@logseq/libs](../modules.html)
  * [ILSPluginThemeManager](ILSPluginThemeManager.html)



# Interface ILSPluginThemeManager

#### Hierarchy

  * ILSPluginThemeManager



  * Defined in [src/LSPlugin.ts:899](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L899)



#####  Index

### Accessors

[themes](ILSPluginThemeManager.html#themes)

### Methods

[registerTheme](ILSPluginThemeManager.html#registerTheme) [selectTheme](ILSPluginThemeManager.html#selectTheme) [unregisterTheme](ILSPluginThemeManager.html#unregisterTheme)

## Accessors

### themes

  * get themes(): Map<string, [Theme](Theme.html)[]>
  * #### Returns Map<string, [Theme](Theme.html)[]>

    * Defined in [src/LSPlugin.ts:900](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L900)



## Methods

### registerTheme

  * registerTheme(id: string, opt: [Theme](Theme.html)): Promise<void>
  * #### Parameters

    * ##### id: string

    * ##### opt: [Theme](Theme.html)

#### Returns Promise<void>

    * Defined in [src/LSPlugin.ts:902](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L902)



### selectTheme

  * selectTheme(opt: [Theme](Theme.html) | [LegacyTheme](LegacyTheme.html), options: {   
effect?: boolean;   
emit?: boolean;   
}): Promise<void>
  * #### Parameters

    * ##### opt: [Theme](Theme.html) | [LegacyTheme](LegacyTheme.html)

    * ##### options: {   
effect?: boolean;   
emit?: boolean;   
}

      * ##### `Optional` effect?: boolean

      * ##### `Optional` emit?: boolean

#### Returns Promise<void>

    * Defined in [src/LSPlugin.ts:906](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L906)



### unregisterTheme

  * unregisterTheme(id: string, effect?: boolean): Promise<void>
  * #### Parameters

    * ##### id: string

    * ##### `Optional` effect: boolean

#### Returns Promise<void>

    * Defined in [src/LSPlugin.ts:904](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L904)



###  Settings

#### Member Visibility

  * Protected
  * Private
  * Inherited
  * External



#### Theme

OSLightDark

Generated using [TypeDoc](https://typedoc.org/)
