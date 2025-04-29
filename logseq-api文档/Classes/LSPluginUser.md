  * Preparing search index...
  * The search index is not available

[@logseq/libs]()

  * [@logseq/libs](../modules.html)
  * [LSPluginUser](LSPluginUser.html)



# Class LSPluginUser

User plugin instance from global namespace `logseq`.

### Example
    
    
    logseq.UI.showMsg('Hello, Logseq')
    

#### Hierarchy

  * EventEmitter<[LSPluginUserEvents](../types/LSPluginUserEvents.html)>
    * LSPluginUser



#### Implements

  * [ILSPluginUser](../interfaces/ILSPluginUser.html)



  * Defined in [src/LSPlugin.user.ts:457](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L457)



#####  Index

### Constructors

[constructor](LSPluginUser.html#constructor)

### Properties

[_baseInfo](LSPluginUser.html#_baseInfo) [_beforeunloadCallback?](LSPluginUser.html#_beforeunloadCallback) [_caller](LSPluginUser.html#_caller) [_connected](LSPluginUser.html#_connected) [_debugTag](LSPluginUser.html#_debugTag) [_mExperiments](LSPluginUser.html#_mExperiments) [_mFileStorage](LSPluginUser.html#_mFileStorage) [_mRequest](LSPluginUser.html#_mRequest) [_settingsSchema?](LSPluginUser.html#_settingsSchema) [_ui](LSPluginUser.html#_ui) [_version](LSPluginUser.html#_version) [prefixed](LSPluginUser.html#prefixed)

### Accessors

[App](LSPluginUser.html#App) [Assets](LSPluginUser.html#Assets) [DB](LSPluginUser.html#DB) [Editor](LSPluginUser.html#Editor) [Experiments](LSPluginUser.html#Experiments) [FileStorage](LSPluginUser.html#FileStorage) [Git](LSPluginUser.html#Git) [Request](LSPluginUser.html#Request) [UI](LSPluginUser.html#UI) [baseInfo](LSPluginUser.html#baseInfo) [caller](LSPluginUser.html#caller) [connected](LSPluginUser.html#connected) [effect](LSPluginUser.html#effect) [isMainUIVisible](LSPluginUser.html#isMainUIVisible) [logger](LSPluginUser.html#logger) [settings](LSPluginUser.html#settings) [version](LSPluginUser.html#version)

### Methods

[_callWin](LSPluginUser.html#_callWin) [_execCallableAPI](LSPluginUser.html#_execCallableAPI) [_execCallableAPIAsync](LSPluginUser.html#_execCallableAPIAsync) [_makeUserProxy](LSPluginUser.html#_makeUserProxy) [addListener](LSPluginUser.html#addListener) [beforeunload](LSPluginUser.html#beforeunload) [emit](LSPluginUser.html#emit) [ensureConnected](LSPluginUser.html#ensureConnected) [eventNames](LSPluginUser.html#eventNames) [hideMainUI](LSPluginUser.html#hideMainUI) [hideSettingsUI](LSPluginUser.html#hideSettingsUI) [listenerCount](LSPluginUser.html#listenerCount) [listeners](LSPluginUser.html#listeners) [off](LSPluginUser.html#off) [on](LSPluginUser.html#on) [onSettingsChanged](LSPluginUser.html#onSettingsChanged) [once](LSPluginUser.html#once) [provideModel](LSPluginUser.html#provideModel) [provideStyle](LSPluginUser.html#provideStyle) [provideTheme](LSPluginUser.html#provideTheme) [provideUI](LSPluginUser.html#provideUI) [ready](LSPluginUser.html#ready) [removeAllListeners](LSPluginUser.html#removeAllListeners) [removeListener](LSPluginUser.html#removeListener) [resolveResourceFullUrl](LSPluginUser.html#resolveResourceFullUrl) [setMainUIAttrs](LSPluginUser.html#setMainUIAttrs) [setMainUIInlineStyle](LSPluginUser.html#setMainUIInlineStyle) [showMainUI](LSPluginUser.html#showMainUI) [showSettingsUI](LSPluginUser.html#showSettingsUI) [toggleMainUI](LSPluginUser.html#toggleMainUI) [updateSettings](LSPluginUser.html#updateSettings) [useSettingsSchema](LSPluginUser.html#useSettingsSchema)

## Constructors

### constructor

  * new LSPluginUser(_baseInfo: [LSPluginBaseInfo](../interfaces/LSPluginBaseInfo.html), _caller: LSPluginCaller): [LSPluginUser](LSPluginUser.html)
  * #### Parameters

    * ##### _baseInfo: [LSPluginBaseInfo](../interfaces/LSPluginBaseInfo.html)

    * ##### _caller: LSPluginCaller

#### Returns [LSPluginUser](LSPluginUser.html)

Overrides EventEmitter<LSPluginUserEvents>.constructor

    * Defined in [src/LSPlugin.user.ts:486](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L486)



## Properties

### `Private` _baseInfo

_baseInfo: [LSPluginBaseInfo](../interfaces/LSPluginBaseInfo.html)

  * Defined in [src/LSPlugin.user.ts:487](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L487)



### `Private` `Optional` _beforeunloadCallback

_beforeunloadCallback?: ((e: any) => Promise<void>)

#### Type declaration

  *     * (e: any): Promise<void>
    * `Private`

handler of before unload plugin

#### Parameters

      * ##### e: any

#### Returns Promise<void>




  * Defined in [src/LSPlugin.user.ts:480](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L480)



### `Private` _caller

_caller: LSPluginCaller

  * Defined in [src/LSPlugin.user.ts:488](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L488)



### `Private` _connected

_connected: boolean = false

  * Defined in [src/LSPlugin.user.ts:464](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L464)



### `Private` _debugTag

_debugTag: string = ''

  * Defined in [src/LSPlugin.user.ts:462](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L462)



### `Private` _mExperiments

_mExperiments: LSPluginExperiments

  * Defined in [src/LSPlugin.user.ts:474](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L474)



### `Private` _mFileStorage

_mFileStorage: LSPluginFileStorage

  * Defined in [src/LSPlugin.user.ts:472](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L472)



### `Private` _mRequest

_mRequest: LSPluginRequest

  * Defined in [src/LSPlugin.user.ts:473](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L473)



### `Private` `Optional` _settingsSchema

_settingsSchema?: [SettingSchemaDesc](../types/SettingSchemaDesc.html)[]

  * Defined in [src/LSPlugin.user.ts:463](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L463)



### `Private` _ui

_ui: Map<number, uiState> = ...

ui frame identities

  * Defined in [src/LSPlugin.user.ts:470](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L470)



### `Private` _version

_version: string = LIB_VERSION

  * Defined in [src/LSPlugin.user.ts:461](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L461)



### `Static` prefixed

prefixed: string | boolean

Inherited from EventEmitter.prefixed

  * Defined in node_modules/eventemitter3/index.d.ts:9



## Accessors

### App

  * get App(): [IAppProxy](../interfaces/IAppProxy.html)
  * The interface methods of [IAppProxy](../interfaces/IAppProxy.html)

#### Returns [IAppProxy](../interfaces/IAppProxy.html)

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[App](../interfaces/ILSPluginUser.html#App)

    * Defined in [src/LSPlugin.user.ts:798](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L798)



### Assets

  * get Assets(): [IAssetsProxy](../interfaces/IAssetsProxy.html)
  * #### Returns [IAssetsProxy](../interfaces/IAssetsProxy.html)

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[Assets](../interfaces/ILSPluginUser.html#Assets)

    * Defined in [src/LSPlugin.user.ts:818](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L818)



### DB

  * get DB(): [IDBProxy](../interfaces/IDBProxy.html)
  * #### Returns [IDBProxy](../interfaces/IDBProxy.html)

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[DB](../interfaces/ILSPluginUser.html#DB)

    * Defined in [src/LSPlugin.user.ts:806](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L806)



### Editor

  * get Editor(): [IEditorProxy](../interfaces/IEditorProxy.html)
  * #### Returns [IEditorProxy](../interfaces/IEditorProxy.html)

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[Editor](../interfaces/ILSPluginUser.html#Editor)

    * Defined in [src/LSPlugin.user.ts:802](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L802)



### Experiments

  * get Experiments(): LSPluginExperiments
  * #### Returns LSPluginExperiments

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[Experiments](../interfaces/ILSPluginUser.html#Experiments)

    * Defined in [src/LSPlugin.user.ts:834](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L834)



### FileStorage

  * get FileStorage(): LSPluginFileStorage
  * #### Returns LSPluginFileStorage

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[FileStorage](../interfaces/ILSPluginUser.html#FileStorage)

    * Defined in [src/LSPlugin.user.ts:822](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L822)



### Git

  * get Git(): [IGitProxy](../interfaces/IGitProxy.html)
  * #### Returns [IGitProxy](../interfaces/IGitProxy.html)

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[Git](../interfaces/ILSPluginUser.html#Git)

    * Defined in [src/LSPlugin.user.ts:810](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L810)



### Request

  * get Request(): LSPluginRequest
  * #### Returns LSPluginRequest

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[Request](../interfaces/ILSPluginUser.html#Request)

    * Defined in [src/LSPlugin.user.ts:828](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L828)



### UI

  * get UI(): [IUIProxy](../interfaces/IUIProxy.html)
  * #### Returns [IUIProxy](../interfaces/IUIProxy.html)

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[UI](../interfaces/ILSPluginUser.html#UI)

    * Defined in [src/LSPlugin.user.ts:814](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L814)



### baseInfo

  * get baseInfo(): [LSPluginBaseInfo](../interfaces/LSPluginBaseInfo.html)
  * The plugin configurations from package.json

#### Returns [LSPluginBaseInfo](../interfaces/LSPluginBaseInfo.html)

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[baseInfo](../interfaces/ILSPluginUser.html#baseInfo)

    * Defined in [src/LSPlugin.user.ts:683](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L683)



### caller

  * get caller(): LSPluginCaller
  * Duplex message caller

#### Returns LSPluginCaller

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[caller](../interfaces/ILSPluginUser.html#caller)

    * Defined in [src/LSPlugin.user.ts:699](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L699)



### connected

  * get connected(): boolean
  * Connection status with the main app

#### Returns boolean

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[connected](../interfaces/ILSPluginUser.html#connected)

    * Defined in [src/LSPlugin.user.ts:679](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L679)



### effect

  * get effect(): Boolean
  * #### Returns Boolean

    * Defined in [src/LSPlugin.user.ts:687](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L687)



### isMainUIVisible

  * get isMainUIVisible(): boolean
  * #### Returns boolean

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[isMainUIVisible](../interfaces/ILSPluginUser.html#isMainUIVisible)

    * Defined in [src/LSPlugin.user.ts:674](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L674)



### logger

  * get logger(): PluginLogger
  * #### Returns PluginLogger

    * Defined in [src/LSPlugin.user.ts:691](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L691)



### settings

  * get settings(): {   
disabled: boolean;   
[key: string]: any;   
}
  * The plugin user settings

#### Returns {   
disabled: boolean;   
[key: string]: any;   
}

    * ##### [key: string]: any

    * ##### disabled: boolean

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[settings](../interfaces/ILSPluginUser.html#settings)

    * Defined in [src/LSPlugin.user.ts:695](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L695)



### version

  * get version(): string
  * #### Returns string

    * Defined in [src/LSPlugin.user.ts:670](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L670)



## Methods

### _callWin

  * _callWin(...args: any[]): Promise<any>
  * #### Parameters

    * ##### `Rest` ...args: any[]

#### Returns Promise<any>

    * Defined in [src/LSPlugin.user.ts:791](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L791)



### _execCallableAPI

  * _execCallableAPI(method: string, ...args: any[]): void
  * #### Parameters

    * ##### method: string

    * ##### `Rest` ...args: any[]

#### Returns void

    * Defined in [src/LSPlugin.user.ts:784](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L784)



### _execCallableAPIAsync

  * _execCallableAPIAsync(method: string, ...args: any[]): Promise<any>
  * #### Parameters

    * ##### method: string

    * ##### `Rest` ...args: any[]

#### Returns Promise<any>

    * Defined in [src/LSPlugin.user.ts:777](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L777)



### _makeUserProxy

  * _makeUserProxy(target: any, tag?: [UserProxyTags](../types/UserProxyTags.html)): any
  * `Internal`

#### Parameters

    * ##### target: any

    * ##### `Optional` tag: [UserProxyTags](../types/UserProxyTags.html)

#### Returns any

    * Defined in [src/LSPlugin.user.ts:713](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L713)



### addListener

  * addListener<T>(event: T, fn: ((...args: any[]) => void), context?: any): [LSPluginUser](LSPluginUser.html)
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

#### Returns [LSPluginUser](LSPluginUser.html)

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[addListener](../interfaces/ILSPluginUser.html#addListener)

Inherited from EventEmitter.addListener

    * Defined in node_modules/eventemitter3/index.d.ts:45



### beforeunload

  * beforeunload(callback: ((e: any) => Promise<void>)): void
  * #### Parameters

    * ##### callback: ((e: any) => Promise<void>)

      *         * (e: any): Promise<void>
        * #### Parameters

          * ##### e: any

#### Returns Promise<void>

#### Returns void

Implementation of ILSPluginUser.beforeunload

    * Defined in [src/LSPlugin.user.ts:571](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L571)



### emit

  * emit<T>(event: T, ...args: any[]): boolean
  * Calls each of the listeners registered for a given event.

#### Type Parameters

    * #### T extends [LSPluginUserEvents](../types/LSPluginUserEvents.html)

#### Parameters

    * ##### event: T

    * ##### `Rest` ...args: any[]

#### Returns boolean

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[emit](../interfaces/ILSPluginUser.html#emit)

Inherited from EventEmitter.emit

    * Defined in node_modules/eventemitter3/index.d.ts:32



### ensureConnected

  * ensureConnected(): void
  * #### Returns void

    * Defined in [src/LSPlugin.user.ts:565](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L565)



### eventNames

  * eventNames(): [LSPluginUserEvents](../types/LSPluginUserEvents.html)[]
  * Return an array listing the events for which the emitter has registered listeners.

#### Returns [LSPluginUserEvents](../types/LSPluginUserEvents.html)[]

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[eventNames](../interfaces/ILSPluginUser.html#eventNames)

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

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[hideMainUI](../interfaces/ILSPluginUser.html#hideMainUI)

    * Defined in [src/LSPlugin.user.ts:637](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L637)



### hideSettingsUI

  * hideSettingsUI(): void
  * #### Returns void

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[hideSettingsUI](../interfaces/ILSPluginUser.html#hideSettingsUI)

    * Defined in [src/LSPlugin.user.ts:624](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L624)



### listenerCount

  * listenerCount(event: [LSPluginUserEvents](../types/LSPluginUserEvents.html)): number
  * Return the number of listeners listening to a given event.

#### Parameters

    * ##### event: [LSPluginUserEvents](../types/LSPluginUserEvents.html)

#### Returns number

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[listenerCount](../interfaces/ILSPluginUser.html#listenerCount)

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

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[listeners](../interfaces/ILSPluginUser.html#listeners)

Inherited from EventEmitter.listeners

    * Defined in node_modules/eventemitter3/index.d.ts:20



### off

  * off<T>(event: T, fn?: ((...args: any[]) => void), context?: any, once?: boolean): [LSPluginUser](LSPluginUser.html)
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

#### Returns [LSPluginUser](LSPluginUser.html)

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[off](../interfaces/ILSPluginUser.html#off)

Inherited from EventEmitter.off

    * Defined in node_modules/eventemitter3/index.d.ts:69



### on

  * on<T>(event: T, fn: ((...args: any[]) => void), context?: any): [LSPluginUser](LSPluginUser.html)
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

#### Returns [LSPluginUser](LSPluginUser.html)

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[on](../interfaces/ILSPluginUser.html#on)

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

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[onSettingsChanged](../interfaces/ILSPluginUser.html#onSettingsChanged)

    * Defined in [src/LSPlugin.user.ts:614](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L614)



### once

  * once<T>(event: T, fn: ((...args: any[]) => void), context?: any): [LSPluginUser](LSPluginUser.html)
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

#### Returns [LSPluginUser](LSPluginUser.html)

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[once](../interfaces/ILSPluginUser.html#once)

Inherited from EventEmitter.once

    * Defined in node_modules/eventemitter3/index.d.ts:54



### provideModel

  * provideModel(model: Record<string, any>): [LSPluginUser](LSPluginUser.html)
  * Create a object to hold the methods referenced in `provideUI`

### Example
    
        logseq.provideModel({  
     openCalendar () {  
       console.log('Open the calendar!')  
     }  
    })
    

#### Parameters

    * ##### model: Record<string, any>

#### Returns [LSPluginUser](LSPluginUser.html)

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[provideModel](../interfaces/ILSPluginUser.html#provideModel)

    * Defined in [src/LSPlugin.user.ts:576](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L576)



### provideStyle

  * provideStyle(style: string): [LSPluginUser](LSPluginUser.html)
  * Inject custom css for the main Logseq app

### Example
    
        https://github.com/logseq/logseq-plugin-samples/tree/master/logseq-awesome-fonts
    

### Example
    
          logseq.provideStyle(`  
       @import url("https://at.alicdn.com/t/font_2409735_r7em724douf.css");  
     )
    

#### Parameters

    * ##### style: string

#### Returns [LSPluginUser](LSPluginUser.html)

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[provideStyle](../interfaces/ILSPluginUser.html#provideStyle)

    * Defined in [src/LSPlugin.user.ts:586](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L586)



### provideTheme

  * provideTheme(theme: [Theme](../interfaces/Theme.html)): [LSPluginUser](LSPluginUser.html)
  * Set the theme for the main Logseq app

#### Parameters

    * ##### theme: [Theme](../interfaces/Theme.html)

#### Returns [LSPluginUser](LSPluginUser.html)

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[provideTheme](../interfaces/ILSPluginUser.html#provideTheme)

    * Defined in [src/LSPlugin.user.ts:581](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L581)



### provideUI

  * provideUI(ui: [UIOptions](../types/UIOptions.html)): [LSPluginUser](LSPluginUser.html)
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

#### Returns [LSPluginUser](LSPluginUser.html)

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[provideUI](../interfaces/ILSPluginUser.html#provideUI)

    * Defined in [src/LSPlugin.user.ts:591](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L591)



### ready

  * ready(model?: any, callback?: any): Promise<void>
  * The main Logseq app is ready to run the plugin

#### Parameters

    * ##### `Optional` model: any

same as the model in `provideModel`

    * ##### `Optional` callback: any

#### Returns Promise<void>

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[ready](../interfaces/ILSPluginUser.html#ready)

    * Defined in [src/LSPlugin.user.ts:519](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L519)



### removeAllListeners

  * removeAllListeners(event?: [LSPluginUserEvents](../types/LSPluginUserEvents.html)): [LSPluginUser](LSPluginUser.html)
  * Remove all listeners, or those of the specified event.

#### Parameters

    * ##### `Optional` event: [LSPluginUserEvents](../types/LSPluginUserEvents.html)

#### Returns [LSPluginUser](LSPluginUser.html)

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[removeAllListeners](../interfaces/ILSPluginUser.html#removeAllListeners)

Inherited from EventEmitter.removeAllListeners

    * Defined in node_modules/eventemitter3/index.d.ts:79



### removeListener

  * removeListener<T>(event: T, fn?: ((...args: any[]) => void), context?: any, once?: boolean): [LSPluginUser](LSPluginUser.html)
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

#### Returns [LSPluginUser](LSPluginUser.html)

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[removeListener](../interfaces/ILSPluginUser.html#removeListener)

Inherited from EventEmitter.removeListener

    * Defined in node_modules/eventemitter3/index.d.ts:63



### resolveResourceFullUrl

  * resolveResourceFullUrl(filePath: string): string
  * #### Parameters

    * ##### filePath: string

#### Returns string

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[resolveResourceFullUrl](../interfaces/ILSPluginUser.html#resolveResourceFullUrl)

    * Defined in [src/LSPlugin.user.ts:703](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L703)



### setMainUIAttrs

  * setMainUIAttrs(attrs: Partial<[UIContainerAttrs](../types/UIContainerAttrs.html)>): void
  * #### Parameters

    * ##### attrs: Partial<[UIContainerAttrs](../types/UIContainerAttrs.html)>

#### Returns void

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[setMainUIAttrs](../interfaces/ILSPluginUser.html#setMainUIAttrs)

    * Defined in [src/LSPlugin.user.ts:629](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L629)



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

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[setMainUIInlineStyle](../interfaces/ILSPluginUser.html#setMainUIInlineStyle)

    * Defined in [src/LSPlugin.user.ts:633](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L633)



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

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[showMainUI](../interfaces/ILSPluginUser.html#showMainUI)

    * Defined in [src/LSPlugin.user.ts:648](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L648)



### showSettingsUI

  * showSettingsUI(): void
  * #### Returns void

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[showSettingsUI](../interfaces/ILSPluginUser.html#showSettingsUI)

    * Defined in [src/LSPlugin.user.ts:620](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L620)



### toggleMainUI

  * toggleMainUI(): void
  * toggle the plugin's UI

#### Returns void

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[toggleMainUI](../interfaces/ILSPluginUser.html#toggleMainUI)

    * Defined in [src/LSPlugin.user.ts:659](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L659)



### updateSettings

  * updateSettings(attrs: Record<string, any>): void
  * ### Example
    
        https://github.com/logseq/logseq-plugin-samples/tree/master/logseq-awesome-fonts
    

#### Parameters

    * ##### attrs: Record<string, any>

#### Returns void

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[updateSettings](../interfaces/ILSPluginUser.html#updateSettings)

    * Defined in [src/LSPlugin.user.ts:609](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L609)



### useSettingsSchema

  * useSettingsSchema(schema: [SettingSchemaDesc](../types/SettingSchemaDesc.html)[]): [LSPluginUser](LSPluginUser.html)
  * ### Example
    
        https://github.com/logseq/logseq-plugin-samples/tree/master/logseq-awesome-fonts
    

#### Parameters

    * ##### schema: [SettingSchemaDesc](../types/SettingSchemaDesc.html)[]

#### Returns [LSPluginUser](LSPluginUser.html)

Implementation of [ILSPluginUser](../interfaces/ILSPluginUser.html).[useSettingsSchema](../interfaces/ILSPluginUser.html#useSettingsSchema)

    * Defined in [src/LSPlugin.user.ts:597](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.user.ts#L597)



###  Settings

#### Member Visibility

  * Protected
  * Private
  * Inherited
  * External



#### Theme

OSLightDark

Generated using [TypeDoc](https://typedoc.org/)
