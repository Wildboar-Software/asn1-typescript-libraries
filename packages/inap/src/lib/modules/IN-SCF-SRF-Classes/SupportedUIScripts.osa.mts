/* eslint-disable */
import { UISCRIPT } from "../IN-SCF-SRF-Classes/UISCRIPT.oca.mjs";
// export { UISCRIPT } from "../IN-SCF-SRF-Classes/UISCRIPT.oca.mjs";
import { firstScript } from "../IN-SCF-SRF-Classes/firstScript.oa.mjs";
// export { firstScript } from "../IN-SCF-SRF-Classes/firstScript.oa.mjs";


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
