  * Preparing search index...
  * The search index is not available

[@logseq/libs]()

  * [@logseq/libs](../modules.html)
  * [ILSPluginUser](ILSPluginUser.html)



# Interface ILSPluginUser

#### Hierarchy

  * EventEmitter<[LSPluginUserEvents](../types/LSPluginUserEvents.html)>
    * ILSPluginUser



#### Implemented by

  * [LSPluginUser](../classes/LSPluginUser.html)



  * Defined in [src/LSPlugin.ts:914](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L914)



#####  Index

### Properties

[App](ILSPluginUser.html#App) [Assets](ILSPluginUser.html#Assets) [DB](ILSPluginUser.html#DB) [Editor](ILSPluginUser.html#Editor) [Experiments](ILSPluginUser.html#Experiments) [FileStorage](ILSPluginUser.html#FileStorage) [Git](ILSPluginUser.html#Git) [Request](ILSPluginUser.html#Request) [UI](ILSPluginUser.html#UI) [baseInfo](ILSPluginUser.html#baseInfo) [beforeunload](ILSPluginUser.html#beforeunload) [caller](ILSPluginUser.html#caller) [connected](ILSPluginUser.html#connected) [isMainUIVisible](ILSPluginUser.html#isMainUIVisible) [settings?](ILSPluginUser.html#settings)

### Methods

[addListener](ILSPluginUser.html#addListener) [emit](ILSPluginUser.html#emit) [eventNames](ILSPluginUser.html#eventNames) [hideMainUI](ILSPluginUser.html#hideMainUI) [hideSettingsUI](ILSPluginUser.html#hideSettingsUI) [listenerCount](ILSPluginUser.html#listenerCount) [listeners](ILSPluginUser.html#listeners) [off](ILSPluginUser.html#off) [on](ILSPluginUser.html#on) [onSettingsChanged](ILSPluginUser.html#onSettingsChanged) [once](ILSPluginUser.html#once) [provideModel](ILSPluginUser.html#provideModel) [provideStyle](ILSPluginUser.html#provideStyle) [provideTheme](ILSPluginUser.html#provideTheme) [provideUI](ILSPluginUser.html#provideUI) [ready](ILSPluginUser.html#ready) [removeAllListeners](ILSPluginUser.html#removeAllListeners) [removeListener](ILSPluginUser.html#removeListener) [resolveResourceFullUrl](ILSPluginUser.html#resolveResourceFullUrl) [setMainUIAttrs](ILSPluginUser.html#setMainUIAttrs) [setMainUIInlineStyle](ILSPluginUser.html#setMainUIInlineStyle) [showMainUI](ILSPluginUser.html#showMainUI) [showSettingsUI](ILSPluginUser.html#showSettingsUI) [toggleMainUI](ILSPluginUser.html#toggleMainUI) [updateSettings](ILSPluginUser.html#updateSettings) [useSettingsSchema](ILSPluginUser.html#useSettingsSchema)

## Properties

### App

App: [IAppProxy](IAppProxy.html) & Record<string, any>

  * Defined in [src/LSPlugin.ts:1061](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L1061)



### Assets

Assets: [IAssetsProxy](IAssetsProxy.html)

  * Defined in [src/LSPlugin.ts:1066](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L1066)



### DB

DB: [IDBProxy](IDBProxy.html)

  * Defined in [src/LSPlugin.ts:1063](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L1063)



### Editor

Editor: [IEditorProxy](IEditorProxy.html) & Record<string, any>

  * Defined in [src/LSPlugin.ts:1062](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L1062)



### Experiments

Experiments: LSPluginExperiments

  * Defined in [src/LSPlugin.ts:1070](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L1070)



### FileStorage

FileStorage: LSPluginFileStorage

  * Defined in [src/LSPlugin.ts:1069](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L1069)



### Git

Git: [IGitProxy](IGitProxy.html)

  * Defined in [src/LSPlugin.ts:1064](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L1064)



### Request

Request: LSPluginRequest

  * Defined in [src/LSPlugin.ts:1068](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L1068)



### UI

UI: [IUIProxy](IUIProxy.html)

  * Defined in [src/LSPlugin.ts:1065](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L1065)



### baseInfo

baseInfo: [LSPluginBaseInfo](LSPluginBaseInfo.html)

The plugin configurations from package.json

  * Defined in [src/LSPlugin.ts:928](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L928)



### beforeunload

beforeunload: ((callback: (() => Promise<void>)) => void)

#### Type declaration

  *     * (callback: (() => Promise<void>)): void
    * #### Parameters

      * ##### callback: (() => Promise<void>)

        *           * (): Promise<void>
          * #### Returns Promise<void>

#### Returns void




  * Defined in [src/LSPlugin.ts:952](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L952)



### caller

caller: LSPluginCaller

Duplex message caller

  * Defined in [src/LSPlugin.ts:923](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L923)



### connected

connected: boolean

Connection status with the main app

  * Defined in [src/LSPlugin.ts:918](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L918)



### isMainUIVisible

isMainUIVisible: boolean

  * Defined in [src/LSPlugin.ts:1057](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L1057)



### `Optional` settings

settings?: {   
disabled: boolean;   
[key: string]: any;   
}

The plugin user settings

#### Type declaration

  * ##### [key: string]: any

  * ##### disabled: boolean




  * Defined in [src/LSPlugin.ts:933](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L933)



## Methods

### addListener

  * addListener<T>(event: T, fn: ((...args: any[]) => void), context?: any): [ILSPluginUser](ILSPluginUser.html)
  * #### Type Parameters

    * #### T extends [LSPluginUserEvents](../types/LSPluginUserEvents.html)

#### Parameters

    * ##### event: T

    * ##### fn: ((...args: any[]) => void)

      *         * (...args: any[]): void
        * #### Parameters

          * ##### `Rest` ...args: any[]

#### Returns void

    * ##### `Optional` context: any

#### Returns [ILSPluginUser](ILSPluginUser.html)

Inherited from EventEmitter.addListener

    * Defined in node_modules/eventemitter3/index.d.ts:45



### emit

  * emit<T>(event: T, ...args: any[]): boolean
  * Calls each of the listeners registered for a given event.

#### Type Parameters

    * #### T extends [LSPluginUserEvents](../types/LSPluginUserEvents.html)

#### Parameters

    * ##### event: T

    * ##### `Rest` ...args: any[]

#### Returns boolean

Inherited from EventEmitter.emit

    * Defined in node_modules/eventemitter3/index.d.ts:32



### eventNames

  * eventNames(): [LSPluginUserEvents](../types/LSPluginUserEvents.html)[]
  * Return an array listing the events for which the emitter has registered listeners.

#### Returns [LSPluginUserEvents](../types/LSPluginUserEvents.html)[]

Inherited from EventEmitter.eventNames

    * Defined in node_modules/eventemitter3/index.d.ts:15



### hideMainUI

  * hideMainUI(opts?: {   
restoreEditingCursor: boolean;   
}): void
  * hide the plugin's UI

#### Parameters

    * ##### `Optional` opts: {   
restoreEditingCursor: boolean;   
}

      * ##### restoreEditingCursor: boolean

#### Returns void

    * Defined in [src/LSPlugin.ts:1050](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L1050)



### hideSettingsUI

  * hideSettingsUI(): void
  * #### Returns void

    * Defined in [src/LSPlugin.ts:1024](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L1024)



### listenerCount

  * listenerCount(event: [LSPluginUserEvents](../types/LSPluginUserEvents.html)): number
  * Return the number of listeners listening to a given event.

#### Parameters

    * ##### event: [LSPluginUserEvents](../types/LSPluginUserEvents.html)

#### Returns number

Inherited from EventEmitter.listenerCount

    * Defined in node_modules/eventemitter3/index.d.ts:27



### listeners

  * listeners<T>(event: T): ((...args: any[]) => void)[]
  * Return the listeners registered for a given event.

#### Type Parameters

    * #### T extends [LSPluginUserEvents](../types/LSPluginUserEvents.html)

#### Parameters

    * ##### event: T

#### Returns ((...args: any[]) => void)[]

Inherited from EventEmitter.listeners

    * Defined in node_modules/eventemitter3/index.d.ts:20



### off

  * off<T>(event: T, fn?: ((...args: any[]) => void), context?: any, once?: boolean): [ILSPluginUser](ILSPluginUser.html)
  * #### Type Parameters

    * #### T extends [LSPluginUserEvents](../types/LSPluginUserEvents.html)

#### Parameters

    * ##### event: T

    * ##### `Optional` fn: ((...args: any[]) => void)

      *         * (...args: any[]): void
        * #### Parameters

          * ##### `Rest` ...args: any[]

#### Returns void

    * ##### `Optional` context: any

    * ##### `Optional` once: boolean

#### Returns [ILSPluginUser](ILSPluginUser.html)

Inherited from EventEmitter.off

    * Defined in node_modules/eventemitter3/index.d.ts:69



### on

  * on<T>(event: T, fn: ((...args: any[]) => void), context?: any): [ILSPluginUser](ILSPluginUser.html)
  * Add a listener for a given event.

#### Type Parameters

    * #### T extends [LSPluginUserEvents](../types/LSPluginUserEvents.html)

#### Parameters

    * ##### event: T

    * ##### fn: ((...args: any[]) => void)

      *         * (...args: any[]): void
        * #### Parameters

          * ##### `Rest` ...args: any[]

#### Returns void

    * ##### `Optional` context: any

#### Returns [ILSPluginUser](ILSPluginUser.html)

Inherited from EventEmitter.on

    * Defined in node_modules/eventemitter3/index.d.ts:40



### onSettingsChanged

  * onSettingsChanged<T>(cb: ((a: T, b: T) => void)): [IUserOffHook](../types/IUserOffHook.html)
  * #### Type Parameters

    * #### T = any

#### Parameters

    * ##### cb: ((a: T, b: T) => void)

      *         * (a: T, b: T): void
        * #### Parameters

          * ##### a: T

          * ##### b: T

#### Returns void

#### Returns [IUserOffHook](../types/IUserOffHook.html)

    * Defined in [src/LSPlugin.ts:1020](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L1020)



### once

  * once<T>(event: T, fn: ((...args: any[]) => void), context?: any): [ILSPluginUser](ILSPluginUser.html)
  * Add a one-time listener for a given event.

#### Type Parameters

    * #### T extends [LSPluginUserEvents](../types/LSPluginUserEvents.html)

#### Parameters

    * ##### event: T

    * ##### fn: ((...args: any[]) => void)

      *         * (...args: any[]): void
        * #### Parameters

          * ##### `Rest` ...args: any[]

#### Returns void

    * ##### `Optional` context: any

#### Returns [ILSPluginUser](ILSPluginUser.html)

Inherited from EventEmitter.once

    * Defined in node_modules/eventemitter3/index.d.ts:54



### provideModel

  * provideModel(model: Record<string, any>): [ILSPluginUser](ILSPluginUser.html)
  * Create a object to hold the methods referenced in `provideUI`

### Example
    
        logseq.provideModel({  
     openCalendar () {  
       console.log('Open the calendar!')  
     }  
    })
    

#### Parameters

    * ##### model: Record<string, any>

#### Returns [ILSPluginUser](ILSPluginUser.html)

    * Defined in [src/LSPlugin.ts:966](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L966)



### provideStyle

  * provideStyle(style: string | [StyleOptions](../types/StyleOptions.html)): [ILSPluginUser](ILSPluginUser.html)
  * Inject custom css for the main Logseq app

### Example
    
        https://github.com/logseq/logseq-plugin-samples/tree/master/logseq-awesome-fonts
    

### Example
    
          logseq.provideStyle(`  
       @import url("https://at.alicdn.com/t/font_2409735_r7em724douf.css");  
     )
    

#### Parameters

    * ##### style: string | [StyleOptions](../types/StyleOptions.html)

#### Returns [ILSPluginUser](ILSPluginUser.html)

    * Defined in [src/LSPlugin.ts:984](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L984)



### provideTheme

  * provideTheme(theme: [Theme](Theme.html)): [ILSPluginUser](ILSPluginUser.html)
  * Set the theme for the main Logseq app

#### Parameters

    * ##### theme: [Theme](Theme.html)

#### Returns [ILSPluginUser](ILSPluginUser.html)

    * Defined in [src/LSPlugin.ts:971](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L971)



### provideUI

  * provideUI(ui: [UIOptions](../types/UIOptions.html)): [ILSPluginUser](ILSPluginUser.html)
  * Inject custom UI at specific DOM node. Event handlers can not be passed by string, so you need to create them in `provideModel`

### Example
    
        https://github.com/logseq/logseq-plugin-samples/tree/master/logseq-a-translator
    

### Example
    
        logseq.provideUI({  
    key: 'open-calendar',  
    path: '#search',  
    template: `  
     <a data-on-click="openCalendar" onclick="alert('abc')' style="opacity: .6; display: inline-flex; padding-left: 3px;'>  
       <i class="iconfont icon-Calendaralt2"></i>  
     </a>  
    `  
    })
    

#### Parameters

    * ##### ui: [UIOptions](../types/UIOptions.html)

#### Returns [ILSPluginUser](ILSPluginUser.html)

    * Defined in [src/LSPlugin.ts:1004](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L1004)



### ready

  * ready(model?: Record<string, any>): Promise<any>
  * The main Logseq app is ready to run the plugin

#### Parameters

    * ##### `Optional` model: Record<string, any>

same as the model in `provideModel`

#### Returns Promise<any>

    * Defined in [src/LSPlugin.ts:940](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L940)
  * ready(callback?: ((e: any) => void | {})): Promise<any>
  * #### Parameters

    * ##### `Optional` callback: ((e: any) => void | {})

a function to run when the main Logseq app is ready

      *         * (e: any): void | {}
        * #### Parameters

          * ##### e: any

#### Returns void | {}

#### Returns Promise<any>

    * Defined in [src/LSPlugin.ts:945](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L945)
  * ready(model?: Record<string, any>, callback?: ((e: any) => void | {})): Promise<any>
  * #### Parameters

    * ##### `Optional` model: Record<string, any>

    * ##### `Optional` callback: ((e: any) => void | {})

      *         * (e: any): void | {}
        * #### Parameters

          * ##### e: any

#### Returns void | {}

#### Returns Promise<any>

    * Defined in [src/LSPlugin.ts:947](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L947)



### removeAllListeners

  * removeAllListeners(event?: [LSPluginUserEvents](../types/LSPluginUserEvents.html)): [ILSPluginUser](ILSPluginUser.html)
  * Remove all listeners, or those of the specified event.

#### Parameters

    * ##### `Optional` event: [LSPluginUserEvents](../types/LSPluginUserEvents.html)

#### Returns [ILSPluginUser](ILSPluginUser.html)

Inherited from EventEmitter.removeAllListeners

    * Defined in node_modules/eventemitter3/index.d.ts:79



### removeListener

  * removeListener<T>(event: T, fn?: ((...args: any[]) => void), context?: any, once?: boolean): [ILSPluginUser](ILSPluginUser.html)
  * Remove the listeners of a given event.

#### Type Parameters

    * #### T extends [LSPluginUserEvents](../types/LSPluginUserEvents.html)

#### Parameters

    * ##### event: T

    * ##### `Optional` fn: ((...args: any[]) => void)

      *         * (...args: any[]): void
        * #### Parameters

          * ##### `Rest` ...args: any[]

#### Returns void

    * ##### `Optional` context: any

    * ##### `Optional` once: boolean

#### Returns [ILSPluginUser](ILSPluginUser.html)

Inherited from EventEmitter.removeListener

    * Defined in node_modules/eventemitter3/index.d.ts:63



### resolveResourceFullUrl

  * resolveResourceFullUrl(filePath: string): string
  * #### Parameters

    * ##### filePath: string

#### Returns string

    * Defined in [src/LSPlugin.ts:1059](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L1059)



### setMainUIAttrs

  * setMainUIAttrs(attrs: Record<string, any>): void
  * #### Parameters

    * ##### attrs: Record<string, any>

#### Returns void

    * Defined in [src/LSPlugin.ts:1026](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L1026)



### setMainUIInlineStyle

  * setMainUIInlineStyle(style: Properties<0 | string & {}, string & {}>): void
  * Set the style for the plugin's UI

### Example
    
        https://github.com/logseq/logseq-plugin-samples/tree/master/logseq-awesome-fonts
    

### Example
    
        logseq.setMainUIInlineStyle({  
     position: 'fixed',  
     zIndex: 11,  
    })
    

#### Parameters

    * ##### style: Properties<0 | string & {}, string & {}>

#### Returns void

    * Defined in [src/LSPlugin.ts:1040](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L1040)



### showMainUI

  * showMainUI(opts?: {   
autoFocus: boolean;   
}): void
  * show the plugin's UI

#### Parameters

    * ##### `Optional` opts: {   
autoFocus: boolean;   
}

      * ##### autoFocus: boolean

#### Returns void

    * Defined in [src/LSPlugin.ts:1045](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L1045)



### showSettingsUI

  * showSettingsUI(): void
  * #### Returns void

    * Defined in [src/LSPlugin.ts:1022](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L1022)



### toggleMainUI

  * toggleMainUI(): void
  * toggle the plugin's UI

#### Returns void

    * Defined in [src/LSPlugin.ts:1055](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L1055)



### updateSettings

  * updateSettings(attrs: Record<string, any>): void
  * ### Example
    
        https://github.com/logseq/logseq-plugin-samples/tree/master/logseq-awesome-fonts
    

#### Parameters

    * ##### attrs: Record<string, any>

#### Returns void

    * Defined in [src/LSPlugin.ts:1018](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L1018)



### useSettingsSchema

  * useSettingsSchema(schemas: [SettingSchemaDesc](../types/SettingSchemaDesc.html)[]): [ILSPluginUser](ILSPluginUser.html)
  * ### Example
    
        https://github.com/logseq/logseq-plugin-samples/tree/master/logseq-awesome-fonts
    

#### Parameters

    * ##### schemas: [SettingSchemaDesc](../types/SettingSchemaDesc.html)[]

#### Returns [ILSPluginUser](ILSPluginUser.html)

    * Defined in [src/LSPlugin.ts:1011](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L1011)



###  Settings

#### Member Visibility

  * Protected
  * Private
  * Inherited
  * External



#### Theme

OSLightDark

Generated using [TypeDoc](https://typedoc.org/)
