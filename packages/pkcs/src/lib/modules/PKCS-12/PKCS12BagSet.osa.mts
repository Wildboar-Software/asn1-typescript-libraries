/* eslint-disable */
import { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca.mjs";
import { certBag } from "../PKCS-12/certBag.oa.mjs";
import { crlBag } from "../PKCS-12/crlBag.oa.mjs";
import { keyBag } from "../PKCS-12/keyBag.oa.mjs";
import { pkcs8ShroudedKeyBag } from "../PKCS-12/pkcs8ShroudedKeyBag.oa.mjs";
import { safeContentsBag } from "../PKCS-12/safeContentsBag.oa.mjs";
import { secretBag } from "../PKCS-12/secretBag.oa.mjs";
export { BAG_TYPE } from "../PKCS-12/BAG-TYPE.oca.mjs";
export { certBag } from "../PKCS-12/certBag.oa.mjs";
export { crlBag } from "../PKCS-12/crlBag.oa.mjs";
export { keyBag } from "../PKCS-12/keyBag.oa.mjs";
export { pkcs8ShroudedKeyBag } from "../PKCS-12/pkcs8ShroudedKeyBag.oa.mjs";
export { safeContentsBag } from "../PKCS-12/safeContentsBag.oa.mjs";
export { secretBag } from "../PKCS-12/secretBag.oa.mjs";

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
