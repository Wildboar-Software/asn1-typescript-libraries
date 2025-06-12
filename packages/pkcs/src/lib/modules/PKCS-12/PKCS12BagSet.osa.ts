/* eslint-disable */
import { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca.js";
import { certBag } from "../PKCS-12/certBag.oa.js";
import { crlBag } from "../PKCS-12/crlBag.oa.js";
import { keyBag } from "../PKCS-12/keyBag.oa.js";
import { pkcs8ShroudedKeyBag } from "../PKCS-12/pkcs8ShroudedKeyBag.oa.js";
import { safeContentsBag } from "../PKCS-12/safeContentsBag.oa.js";
import { secretBag } from "../PKCS-12/secretBag.oa.js";
export { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca.js";
export { certBag } from "../PKCS-12/certBag.oa.js";
export { crlBag } from "../PKCS-12/crlBag.oa.js";
export { keyBag } from "../PKCS-12/keyBag.oa.js";
export { pkcs8ShroudedKeyBag } from "../PKCS-12/pkcs8ShroudedKeyBag.oa.js";
export { safeContentsBag } from "../PKCS-12/safeContentsBag.oa.js";
export { secretBag } from "../PKCS-12/secretBag.oa.js";

/* START_OF_SYMBOL_DEFINITION PKCS12BagSet */
/**
 * @summary PKCS12BagSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS12BagSet BAG-TYPE ::= {
 *     keyBag |
 *     pkcs8ShroudedKeyBag |
 *     certBag |
 *     crlBag |
 *     secretBag |
 *     safeContentsBag,
 *     ... -- For future extensions
 * }
 * ```
 *
 * @constant
 * @type {BAG_TYPE[]}
 *
 */
export const PKCS12BagSet: BAG_TYPE<any>[] = [
    keyBag,
    pkcs8ShroudedKeyBag,
    certBag,
    crlBag,
    secretBag,
    safeContentsBag,
];
/* END_OF_SYMBOL_DEFINITION PKCS12BagSet */

/* eslint-enable */
