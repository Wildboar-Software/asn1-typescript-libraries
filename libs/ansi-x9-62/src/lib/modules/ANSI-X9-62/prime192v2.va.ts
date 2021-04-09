/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { primeCurve } from "../ANSI-X9-62/primeCurve.va";
export { primeCurve } from "../ANSI-X9-62/primeCurve.va";

/* START_OF_SYMBOL_DEFINITION prime192v2 */
/**
 * @summary prime192v2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * prime192v2 OBJECT IDENTIFIER ::= { primeCurve 2 }
 * ```
 *
 * @constant
 */
export const prime192v2: OBJECT_IDENTIFIER = new _OID([2], primeCurve);
/* END_OF_SYMBOL_DEFINITION prime192v2 */

/* eslint-enable */
