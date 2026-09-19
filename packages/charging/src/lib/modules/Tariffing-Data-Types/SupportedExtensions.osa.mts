/* eslint-disable */
import { EXTENSION } from "../Tariffing-Data-Types/EXTENSION.oca.mjs";
// export { EXTENSION } from "../Tariffing-Data-Types/EXTENSION.oca.mjs";
import { firstExtension } from "../Tariffing-Data-Types/firstExtension.oa.mjs";
// export { firstExtension } from "../Tariffing-Data-Types/firstExtension.oa.mjs";


/**
 * @summary SupportedExtensions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedExtensions EXTENSION ::= {firstExtension , ...
 * -- full set of network operator extensions --}
 * ```
 * 
 * @constant
 * @type {EXTENSION[]}
 * 
 */
export
const SupportedExtensions: (EXTENSION)[] = [ firstExtension, ];

/* eslint-enable */
