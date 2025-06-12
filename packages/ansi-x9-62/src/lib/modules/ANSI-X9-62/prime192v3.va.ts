/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { primeCurve } from "../ANSI-X9-62/primeCurve.va.js";
export { primeCurve } from "../ANSI-X9-62/primeCurve.va.js";

/* START_OF_SYMBOL_DEFINITION prime192v3 */
/**
 * @summary prime192v3
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * prime192v3 OBJECT IDENTIFIER ::= { primeCurve 3 }
 * ```
 *
 * @constant
 */
export const prime192v3: OBJECT_IDENTIFIER = new _OID([3], primeCurve);
/* END_OF_SYMBOL_DEFINITION prime192v3 */

/* eslint-enable */
