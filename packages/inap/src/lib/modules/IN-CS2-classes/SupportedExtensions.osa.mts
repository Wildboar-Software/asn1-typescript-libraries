/* eslint-disable */
import { type EXTENSION } from "../IN-CS2-classes/EXTENSION.oca.mjs";
// export { EXTENSION } from "../IN-CS2-classes/EXTENSION.oca.mjs";
import { firstExtension } from "../IN-CS2-classes/firstExtension.oa.mjs";
// export { firstExtension } from "../IN-CS2-classes/firstExtension.oa.mjs";
import { boundedExtension } from "../IN-CS2-classes/boundedExtension.oa.mjs";
// export { boundedExtension } from "../IN-CS2-classes/boundedExtension.oa.mjs";


/**
 * @summary SupportedExtensions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedExtensions EXTENSION ::= {firstExtension | boundedExtension, ...
 *   }
 * ```
 * 
 * @constant
 * @type {EXTENSION[]}
 * 
 */
export
const SupportedExtensions: (EXTENSION)[] = [ firstExtension, boundedExtension, ];

/* eslint-enable */
