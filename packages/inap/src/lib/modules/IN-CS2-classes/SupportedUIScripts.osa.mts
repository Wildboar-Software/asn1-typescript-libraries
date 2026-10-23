/* eslint-disable */
import { UISCRIPT } from "../IN-CS2-classes/UISCRIPT.oca.mjs";
// export { UISCRIPT } from "../IN-CS2-classes/UISCRIPT.oca.mjs";
import { firstScript } from "../IN-CS2-classes/firstScript.oa.mjs";
// export { firstScript } from "../IN-CS2-classes/firstScript.oa.mjs";
import { boundedScript } from "../IN-CS2-classes/boundedScript.oa.mjs";
// export { boundedScript } from "../IN-CS2-classes/boundedScript.oa.mjs";


/**
 * @summary SupportedUIScripts
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedUIScripts UISCRIPT ::= {firstScript | boundedScript, ...
 *   }
 * ```
 * 
 * @constant
 * @type {UISCRIPT[]}
 * 
 */
export
const SupportedUIScripts: (UISCRIPT)[] = [ firstScript, boundedScript, ];

/* eslint-enable */
