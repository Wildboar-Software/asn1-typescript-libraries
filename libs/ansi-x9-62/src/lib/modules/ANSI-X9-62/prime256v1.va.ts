/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { primeCurve } from "../ANSI-X9-62/primeCurve.va";
export { primeCurve } from "../ANSI-X9-62/primeCurve.va";

/* START_OF_SYMBOL_DEFINITION prime256v1 */
/**
 * @summary prime256v1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * prime256v1 OBJECT IDENTIFIER ::= { primeCurve 7 }
 * ```
 *
 * @constant
 */
export const prime256v1: OBJECT_IDENTIFIER = new _OID([7], primeCurve);
/* END_OF_SYMBOL_DEFINITION prime256v1 */

/* eslint-enable */
