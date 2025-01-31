import type { InjectionKey } from 'vue';
import type { Auth0VueClient } from './interfaces';
/**
 * @ignore
 */
export declare const AUTH0_TOKEN = "$auth0";
/**
 * Injection token used to `provide` the `Auth0VueClient` instance. Can be used to pass to `inject()`
 *
 * ```js
 * inject(AUTH0_INJECTION_KEY)
 * ```
 */
export declare const AUTH0_INJECTION_KEY: InjectionKey<Auth0VueClient>;
