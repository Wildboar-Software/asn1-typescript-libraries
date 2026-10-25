/* eslint-disable */
import { type UISCRIPT } from "../IN-CS3-SCF-SRF-classes/UISCRIPT.oca.mjs";
// export { UISCRIPT } from "../IN-CS3-SCF-SRF-classes/UISCRIPT.oca.mjs";
import { firstScript } from "../IN-CS3-SCF-SRF-classes/firstScript.oa.mjs";
// export { firstScript } from "../IN-CS3-SCF-SRF-classes/firstScript.oa.mjs";


/**
 * @summary SupportedUIScripts
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedUIScripts UISCRIPT ::= {firstScript, ...
 *   --full set of User Interaction script
 *   }
 * ```
 * 
 * @constant
 * @type {UISCRIPT[]}
 * 
 */
export
const SupportedUIScripts: (UISCRIPT)[] = [ firstScript, ];

/* eslint-enable */
