  * Preparing search index...
  * The search index is not available

[@logseq/libs]()

  * [@logseq/libs](../modules.html)
  * [IAppProxy](IAppProxy.html)



# Interface IAppProxy

App level APIs

#### Hierarchy

  * IAppProxy



  * Defined in [src/LSPlugin.ts:327](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L327)



#####  Index

### Properties

[_installPluginHook](IAppProxy.html#_installPluginHook) [_uninstallPluginHook](IAppProxy.html#_uninstallPluginHook) [clearRightSidebarBlocks](IAppProxy.html#clearRightSidebarBlocks) [execGitCommand](IAppProxy.html#execGitCommand) [getCurrentGraph](IAppProxy.html#getCurrentGraph) [getCurrentGraphConfigs](IAppProxy.html#getCurrentGraphConfigs) [getCurrentGraphFavorites](IAppProxy.html#getCurrentGraphFavorites) [getCurrentGraphRecent](IAppProxy.html#getCurrentGraphRecent) [getExternalPlugin](IAppProxy.html#getExternalPlugin) [getInfo](IAppProxy.html#getInfo) [getStateFromStore](IAppProxy.html#getStateFromStore) [getUserConfigs](IAppProxy.html#getUserConfigs) [getUserInfo](IAppProxy.html#getUserInfo) [invokeExternalCommand](IAppProxy.html#invokeExternalCommand) [invokeExternalPlugin](IAppProxy.html#invokeExternalPlugin) [onBlockRendererSlotted](IAppProxy.html#onBlockRendererSlotted) [onCurrentGraphChanged](IAppProxy.html#onCurrentGraphChanged) [onGraphAfterIndexed](IAppProxy.html#onGraphAfterIndexed) [onMacroRendererSlotted](IAppProxy.html#onMacroRendererSlotted) [onPageHeadActionsSlotted](IAppProxy.html#onPageHeadActionsSlotted) [onRouteChanged](IAppProxy.html#onRouteChanged) [onSidebarVisibleChanged](IAppProxy.html#onSidebarVisibleChanged) [onThemeChanged](IAppProxy.html#onThemeChanged) [onThemeModeChanged](IAppProxy.html#onThemeModeChanged) [openExternalLink](IAppProxy.html#openExternalLink) [pushState](IAppProxy.html#pushState) [queryElementById](IAppProxy.html#queryElementById) [queryElementRect](IAppProxy.html#queryElementRect) [quit](IAppProxy.html#quit) [registerCommand](IAppProxy.html#registerCommand) [registerCommandPalette](IAppProxy.html#registerCommandPalette) [registerCommandShortcut](IAppProxy.html#registerCommandShortcut) [registerPageMenuItem](IAppProxy.html#registerPageMenuItem) [registerUIItem](IAppProxy.html#registerUIItem) [relaunch](IAppProxy.html#relaunch) [replaceState](IAppProxy.html#replaceState) [setFullScreen](IAppProxy.html#setFullScreen) [setLeftSidebarVisible](IAppProxy.html#setLeftSidebarVisible) [setRightSidebarVisible](IAppProxy.html#setRightSidebarVisible) [setStateFromStore](IAppProxy.html#setStateFromStore) [setZoomFactor](IAppProxy.html#setZoomFactor) [showMsg](IAppProxy.html#showMsg)

### Methods

[registerSearchService](IAppProxy.html#registerSearchService)

## Properties

### _installPluginHook

_installPluginHook: ((pid: string, hook: string) => void)

#### Type declaration

  *     * (pid: string, hook: string): void
    * #### Parameters

      * ##### pid: string

      * ##### hook: string

#### Returns void




  * Defined in [src/LSPlugin.ts:521](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L521)



### _uninstallPluginHook

_uninstallPluginHook: ((pid: string, hookOrAll: string | boolean) => void)

#### Type declaration

  *     * (pid: string, hookOrAll: string | boolean): void
    * #### Parameters

      * ##### pid: string

      * ##### hookOrAll: string | boolean

#### Returns void




  * Defined in [src/LSPlugin.ts:522](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L522)



### clearRightSidebarBlocks

clearRightSidebarBlocks: ((opts?: {   
close: boolean;   
}) => void)

#### Type declaration

  *     * (opts?: {   
close: boolean;   
}): void
    * #### Parameters

      * ##### `Optional` opts: {   
close: boolean;   
}

        * ##### close: boolean

#### Returns void




  * Defined in [src/LSPlugin.ts:467](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L467)



### execGitCommand

execGitCommand: ((args: string[]) => Promise<string>)

#### Type declaration

  *     * (args: string[]): Promise<string>
    * ### Deprecated

Using `logseq.Git.execCommand`

### Link

<https://github.com/desktop/dugite/blob/master/docs/api/exec.md>

#### Parameters

      * ##### args: string[]

#### Returns Promise<string>




  * Defined in [src/LSPlugin.ts:424](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L424)



### getCurrentGraph

getCurrentGraph: (() => Promise<[AppGraphInfo](AppGraphInfo.html)>)

#### Type declaration

  *     * (): Promise<[AppGraphInfo](AppGraphInfo.html)>
    * #### Returns Promise<[AppGraphInfo](AppGraphInfo.html)>




  * Defined in [src/LSPlugin.ts:427](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L427)



### getCurrentGraphConfigs

getCurrentGraphConfigs: (() => Promise<any>)

#### Type declaration

  *     * (): Promise<any>
    * #### Returns Promise<any>




  * Defined in [src/LSPlugin.ts:428](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L428)



### getCurrentGraphFavorites

getCurrentGraphFavorites: (() => Promise<string[]>)

#### Type declaration

  *     * (): Promise<string[]>
    * #### Returns Promise<string[]>




  * Defined in [src/LSPlugin.ts:429](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L429)



### getCurrentGraphRecent

getCurrentGraphRecent: (() => Promise<string[]>)

#### Type declaration

  *     * (): Promise<string[]>
    * #### Returns Promise<string[]>




  * Defined in [src/LSPlugin.ts:430](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L430)



### getExternalPlugin

getExternalPlugin: ((pid: string) => Promise<{}>)

#### Type declaration

  *     * (pid: string): Promise<{}>
    * ### Added

0.0.13

#### Parameters

      * ##### pid: string

#### Returns Promise<{}>




  * Defined in [src/LSPlugin.ts:398](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L398)



### getInfo

getInfo: ((key?: keyof [AppInfo](AppInfo.html)) => Promise<any>)

#### Type declaration

  *     * (key?: keyof [AppInfo](AppInfo.html)): Promise<any>
    * ### Added

0.0.4

#### Parameters

      * ##### `Optional` key: keyof [AppInfo](AppInfo.html)

#### Returns Promise<any>




  * Defined in [src/LSPlugin.ts:332](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L332)



### getStateFromStore

getStateFromStore: (<T>(path: string | string[]) => Promise<T>)

#### Type declaration

  *     * <T>(path: string | string[]): Promise<T>
    * Get state from app store valid state is here <https://github.com/logseq/logseq/blob/master/src/main/frontend/state.cljs#L27>

### Example
        
                const isDocMode = await logseq.App.getStateFromStore('document/mode?')
        

#### Type Parameters

      * #### T = any

#### Parameters

      * ##### path: string | string[]

#### Returns Promise<T>




  * Defined in [src/LSPlugin.ts:411](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L411)



### getUserConfigs

getUserConfigs: (() => Promise<[AppUserConfigs](AppUserConfigs.html)>)

#### Type declaration

  *     * (): Promise<[AppUserConfigs](AppUserConfigs.html)>
    * #### Returns Promise<[AppUserConfigs](AppUserConfigs.html)>




  * Defined in [src/LSPlugin.ts:335](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L335)



### getUserInfo

getUserInfo: (() => Promise<[AppUserInfo](AppUserInfo.html)>)

#### Type declaration

  *     * (): Promise<[AppUserInfo](AppUserInfo.html)>
    * #### Returns Promise<[AppUserInfo](AppUserInfo.html)>




  * Defined in [src/LSPlugin.ts:334](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L334)



### invokeExternalCommand

invokeExternalCommand: ((type: [ExternalCommandType](../types/ExternalCommandType.html), ...args: any[]) => Promise<void>)

#### Type declaration

  *     * (type: [ExternalCommandType](../types/ExternalCommandType.html), ...args: any[]): Promise<void>
    * Supported all registered palette commands

#### Parameters

      * ##### type: [ExternalCommandType](../types/ExternalCommandType.html)

      * ##### `Rest` ...args: any[]

#### Returns Promise<void>




  * Defined in [src/LSPlugin.ts:378](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L378)



### invokeExternalPlugin

invokeExternalPlugin: ((type: string, ...args: any[]) => Promise<unknown>)

#### Type declaration

  *     * (type: string, ...args: any[]): Promise<unknown>
    * Call external plugin command provided by models or registerd commands

### Added

0.0.13

#### Parameters

      * ##### type: string

`xx-plugin-id.commands.xx-key`, `xx-plugin-id.models.xx-key`

      * ##### `Rest` ...args: any[]

#### Returns Promise<unknown>




  * Defined in [src/LSPlugin.ts:389](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L389)



### onBlockRendererSlotted

onBlockRendererSlotted: [IUserConditionSlotHook](../types/IUserConditionSlotHook.html)<string, Omit<[BlockEntity](BlockEntity.html), "children" | "page">>

provide ui slot to specific block with UUID

### Added

0.0.13

  * Defined in [src/LSPlugin.ts:490](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L490)



### onCurrentGraphChanged

onCurrentGraphChanged: [IUserHook](../types/IUserHook.html)<any, [IUserOffHook](../types/IUserOffHook.html)>

  * Defined in [src/LSPlugin.ts:480](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L480)



### onGraphAfterIndexed

onGraphAfterIndexed: [IUserHook](../types/IUserHook.html)<{   
repo: string;   
}, [IUserOffHook](../types/IUserOffHook.html)>

  * Defined in [src/LSPlugin.ts:481](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L481)



### onMacroRendererSlotted

onMacroRendererSlotted: [IUserSlotHook](../types/IUserSlotHook.html)<{   
payload: {   
arguments: string[];   
uuid: string;   
[key: string]: any;   
};   
}>

provide ui slot to block `renderer` macro for `{{renderer arg1, arg2}}`

### Example
    
    
    https://github.com/logseq/logseq-plugin-samples/tree/master/logseq-pomodoro-timer
    

### Example
    
    
    // e.g. {{renderer :h1, hello world, green}}  
      
    logseq.App.onMacroRendererSlotted(({ slot, payload: { arguments } }) => {  
      let [type, text, color] = arguments  
      if (type !== ':h1') return  
       logseq.provideUI({  
         key: 'h1-playground',  
         slot, template: `  
          <h2 style="color: ${color || 'red'}">${text}</h2>  
         `,  
      })  
    })
    

  * Defined in [src/LSPlugin.ts:512](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L512)



### onPageHeadActionsSlotted

onPageHeadActionsSlotted: [IUserSlotHook](../types/IUserSlotHook.html)<any>

  * Defined in [src/LSPlugin.ts:516](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L516)



### onRouteChanged

onRouteChanged: [IUserHook](../types/IUserHook.html)<{   
path: string;   
template: string;   
}, [IUserOffHook](../types/IUserOffHook.html)>

  * Defined in [src/LSPlugin.ts:517](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L517)



### onSidebarVisibleChanged

onSidebarVisibleChanged: [IUserHook](../types/IUserHook.html)<{   
visible: boolean;   
}, [IUserOffHook](../types/IUserOffHook.html)>

  * Defined in [src/LSPlugin.ts:518](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L518)



### onThemeChanged

onThemeChanged: [IUserHook](../types/IUserHook.html)<Partial<{   
mode: string;   
name: string;   
pid: string;   
url: string;   
}>, [IUserOffHook](../types/IUserOffHook.html)>

  * Defined in [src/LSPlugin.ts:483](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L483)



### onThemeModeChanged

onThemeModeChanged: [IUserHook](../types/IUserHook.html)<{   
mode: "light" | "dark";   
}, [IUserOffHook](../types/IUserOffHook.html)>

  * Defined in [src/LSPlugin.ts:482](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L482)



### openExternalLink

openExternalLink: ((url: string) => Promise<void>)

#### Type declaration

  *     * (url: string): Promise<void>
    * #### Parameters

      * ##### url: string

#### Returns Promise<void>




  * Defined in [src/LSPlugin.ts:417](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L417)



### pushState

pushState: ((k: string, params?: Record<string, any>, query?: Record<string, any>) => void)

#### Type declaration

  *     * (k: string, params?: Record<string, any>, query?: Record<string, any>): void
    * #### Parameters

      * ##### k: string

      * ##### `Optional` params: Record<string, any>

      * ##### `Optional` query: Record<string, any>

#### Returns void




  * Defined in [src/LSPlugin.ts:433](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L433)



### queryElementById

queryElementById: ((id: string) => Promise<string | boolean>)

#### Type declaration

  *     * (id: string): Promise<string | boolean>
    * #### Parameters

      * ##### id: string

#### Returns Promise<string | boolean>




  * Defined in [src/LSPlugin.ts:445](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L445)



### queryElementRect

queryElementRect: ((selector: string) => Promise<DOMRectReadOnly>)

#### Type declaration

  *     * (selector: string): Promise<DOMRectReadOnly>
    * ### Added

0.0.5

#### Parameters

      * ##### selector: string

#### Returns Promise<DOMRectReadOnly>




  * Defined in [src/LSPlugin.ts:451](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L451)



### quit

quit: (() => Promise<void>)

#### Type declaration

  *     * (): Promise<void>
    * #### Returns Promise<void>




  * Defined in [src/LSPlugin.ts:416](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L416)



### registerCommand

registerCommand: ((type: string, opts: {   
desc?: string;   
key: string;   
keybinding?: [SimpleCommandKeybinding](../types/SimpleCommandKeybinding.html);   
label: string;   
palette?: boolean;   
}, action: [SimpleCommandCallback](../types/SimpleCommandCallback.html)<any>) => void)

#### Type declaration

  *     * (type: string, opts: {   
desc?: string;   
key: string;   
keybinding?: [SimpleCommandKeybinding](../types/SimpleCommandKeybinding.html);   
label: string;   
palette?: boolean;   
}, action: [SimpleCommandCallback](../types/SimpleCommandCallback.html)<any>): void
    * #### Parameters

      * ##### type: string

      * ##### opts: {   
desc?: string;   
key: string;   
keybinding?: [SimpleCommandKeybinding](../types/SimpleCommandKeybinding.html);   
label: string;   
palette?: boolean;   
}

        * ##### `Optional` desc?: string

        * ##### key: string

        * ##### `Optional` keybinding?: [SimpleCommandKeybinding](../types/SimpleCommandKeybinding.html)

        * ##### label: string

        * ##### `Optional` palette?: boolean

      * ##### action: [SimpleCommandCallback](../types/SimpleCommandCallback.html)<any>

#### Returns void




  * Defined in [src/LSPlugin.ts:341](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L341)



### registerCommandPalette

registerCommandPalette: ((opts: {   
key: string;   
keybinding?: [SimpleCommandKeybinding](../types/SimpleCommandKeybinding.html);   
label: string;   
}, action: [SimpleCommandCallback](../types/SimpleCommandCallback.html)<any>) => void)

#### Type declaration

  *     * (opts: {   
key: string;   
keybinding?: [SimpleCommandKeybinding](../types/SimpleCommandKeybinding.html);   
label: string;   
}, action: [SimpleCommandCallback](../types/SimpleCommandCallback.html)<any>): void
    * #### Parameters

      * ##### opts: {   
key: string;   
keybinding?: [SimpleCommandKeybinding](../types/SimpleCommandKeybinding.html);   
label: string;   
}

        * ##### key: string

        * ##### `Optional` keybinding?: [SimpleCommandKeybinding](../types/SimpleCommandKeybinding.html)

        * ##### label: string

      * ##### action: [SimpleCommandCallback](../types/SimpleCommandCallback.html)<any>

#### Returns void




  * Defined in [src/LSPlugin.ts:353](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L353)



### registerCommandShortcut

registerCommandShortcut: ((keybinding: [SimpleCommandKeybinding](../types/SimpleCommandKeybinding.html), action: [SimpleCommandCallback](../types/SimpleCommandCallback.html)<any>) => void)

#### Type declaration

  *     * (keybinding: [SimpleCommandKeybinding](../types/SimpleCommandKeybinding.html), action: [SimpleCommandCallback](../types/SimpleCommandCallback.html)<any>): void
    * Supported key names

### Link

<https://gist.github.com/xyhp915/d1a6d151a99f31647a95e59cdfbf4ddc>

#### Parameters

      * ##### keybinding: [SimpleCommandKeybinding](../types/SimpleCommandKeybinding.html)

      * ##### action: [SimpleCommandCallback](../types/SimpleCommandCallback.html)<any>

#### Returns void




  * Defined in [src/LSPlugin.ts:368](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L368)



### registerPageMenuItem

registerPageMenuItem: ((tag: string, action: ((e: [IHookEvent](../types/IHookEvent.html) & {   
page: string;   
}) => void)) => void)

#### Type declaration

  *     * (tag: string, action: ((e: [IHookEvent](../types/IHookEvent.html) & {   
page: string;   
}) => void)): void
    * #### Parameters

      * ##### tag: string

      * ##### action: ((e: [IHookEvent](../types/IHookEvent.html) & {   
page: string;   
}) => void)

        *           * (e: [IHookEvent](../types/IHookEvent.html) & {   
page: string;   
}): void
          * #### Parameters

            * ##### e: [IHookEvent](../types/IHookEvent.html) & {   
page: string;   
}

#### Returns void

#### Returns void




  * Defined in [src/LSPlugin.ts:474](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L474)



### registerUIItem

registerUIItem: ((type: "toolbar" | "pagebar", opts: {   
key: string;   
template: string;   
}) => void)

#### Type declaration

  *     * (type: "toolbar" | "pagebar", opts: {   
key: string;   
template: string;   
}): void
    * #### Parameters

      * ##### type: "toolbar" | "pagebar"

      * ##### opts: {   
key: string;   
template: string;   
}

        * ##### key: string

        * ##### template: string

#### Returns void




  * Defined in [src/LSPlugin.ts:469](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L469)



### relaunch

relaunch: (() => Promise<void>)

#### Type declaration

  *     * (): Promise<void>
    * #### Returns Promise<void>




  * Defined in [src/LSPlugin.ts:415](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L415)



### replaceState

replaceState: ((k: string, params?: Record<string, any>, query?: Record<string, any>) => void)

#### Type declaration

  *     * (k: string, params?: Record<string, any>, query?: Record<string, any>): void
    * #### Parameters

      * ##### k: string

      * ##### `Optional` params: Record<string, any>

      * ##### `Optional` query: Record<string, any>

#### Returns void




  * Defined in [src/LSPlugin.ts:438](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L438)



### setFullScreen

setFullScreen: ((flag: boolean | "toggle") => void)

#### Type declaration

  *     * (flag: boolean | "toggle"): void
    * #### Parameters

      * ##### flag: boolean | "toggle"

#### Returns void




  * Defined in [src/LSPlugin.ts:464](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L464)



### setLeftSidebarVisible

setLeftSidebarVisible: ((flag: boolean | "toggle") => void)

#### Type declaration

  *     * (flag: boolean | "toggle"): void
    * #### Parameters

      * ##### flag: boolean | "toggle"

#### Returns void




  * Defined in [src/LSPlugin.ts:465](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L465)



### setRightSidebarVisible

setRightSidebarVisible: ((flag: boolean | "toggle") => void)

#### Type declaration

  *     * (flag: boolean | "toggle"): void
    * #### Parameters

      * ##### flag: boolean | "toggle"

#### Returns void




  * Defined in [src/LSPlugin.ts:466](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L466)



### setStateFromStore

setStateFromStore: ((path: string | string[], value: any) => Promise<void>)

#### Type declaration

  *     * (path: string | string[], value: any): Promise<void>
    * #### Parameters

      * ##### path: string | string[]

      * ##### value: any

#### Returns Promise<void>




  * Defined in [src/LSPlugin.ts:412](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L412)



### setZoomFactor

setZoomFactor: ((factor: number) => void)

#### Type declaration

  *     * (factor: number): void
    * #### Parameters

      * ##### factor: number

#### Returns void




  * Defined in [src/LSPlugin.ts:463](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L463)



### showMsg

showMsg: ((content: string, status?: string) => void)

#### Type declaration

  *     * (content: string, status?: string): void
    * ### Deprecated

Use `logseq.UI.showMsg` instead

#### Parameters

      * ##### content: string

      * ##### `Optional` status: string

#### Returns void




  * Defined in [src/LSPlugin.ts:458](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L458)



## Methods

### registerSearchService

  * registerSearchService<T>(s: T): void
  * #### Type Parameters

    * #### T extends [IPluginSearchServiceHooks](IPluginSearchServiceHooks.html)

#### Parameters

    * ##### s: T

#### Returns void

    * Defined in [src/LSPlugin.ts:338](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L338)



###  Settings

#### Member Visibility

  * Protected
  * Private
  * Inherited
  * External



#### Theme

OSLightDark

Generated using [TypeDoc](https://typedoc.org/)
