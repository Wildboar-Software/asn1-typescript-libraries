/* eslint-disable */
import { type EXTENSION } from "../IN-CS3-common-classes/EXTENSION.oca.mjs";
// export { EXTENSION } from "../IN-CS3-common-classes/EXTENSION.oca.mjs";
import { firstExtension } from "../IN-CS3-common-classes/firstExtension.oa.mjs";
// export { firstExtension } from "../IN-CS3-common-classes/firstExtension.oa.mjs";


/**
 * @summary SupportedExtensions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedExtensions EXTENSION ::= {firstExtension, ...
 *   -- full set of network operator extensions --}
 * ```
 * 
 * @constant
 * @type {EXTENSION[]}
 * 
 */
export
const SupportedExtensions: (EXTENSION)[] = [ firstExtension, ];

/* eslint-enable */
