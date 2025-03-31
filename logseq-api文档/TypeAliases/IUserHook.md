  * Preparing search index...
  * The search index is not available

[@logseq/libs]()

  * [@logseq/libs](../modules.html)
  * [IUserHook](IUserHook.html)



# Type alias IUserHook<E, R>

IUserHook<E, R>: ((callback: ((e: [IHookEvent](IHookEvent.html) & E) => void)) => [IUserOffHook](IUserOffHook.html))

#### Type Parameters

  * #### E = any

  * #### R = [IUserOffHook](IUserOffHook.html)




#### Type declaration

  *     * (callback: ((e: [IHookEvent](IHookEvent.html) & E) => void)): [IUserOffHook](IUserOffHook.html)
    * #### Parameters

      * ##### callback: ((e: [IHookEvent](IHookEvent.html) & E) => void)

        *           * (e: [IHookEvent](IHookEvent.html) & E): void
          * #### Parameters

            * ##### e: [IHookEvent](IHookEvent.html) & E

#### Returns void

#### Returns [IUserOffHook](IUserOffHook.html)




  * Defined in [src/LSPlugin.ts:99](https://github.com/logseq/logseq/blob/ac1b53544/libs/src/LSPlugin.ts#L99)



###  Settings

#### Member Visibility

  * Protected
  * Private
  * Inherited
  * External



#### Theme

OSLightDark

Generated using [TypeDoc](https://typedoc.org/)
