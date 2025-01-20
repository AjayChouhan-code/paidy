/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(HomeScreen)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(HomeScreen)'}/styles` | `/styles`; params?: Router.UnknownInputParams; } | { pathname: `${'/(TaskDetails)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(TaskDetails)'}/styles` | `/styles`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(HomeScreen)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(HomeScreen)'}/styles` | `/styles`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(TaskDetails)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(TaskDetails)'}/styles` | `/styles`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(HomeScreen)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(HomeScreen)'}/styles${`?${string}` | `#${string}` | ''}` | `/styles${`?${string}` | `#${string}` | ''}` | `${'/(TaskDetails)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(TaskDetails)'}/styles${`?${string}` | `#${string}` | ''}` | `/styles${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(HomeScreen)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(HomeScreen)'}/styles` | `/styles`; params?: Router.UnknownInputParams; } | { pathname: `${'/(TaskDetails)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(TaskDetails)'}/styles` | `/styles`; params?: Router.UnknownInputParams; };
    }
  }
}
