/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { primeCurve } from "../ANSI-X9-62/primeCurve.va.mjs";
/* START_OF_SYMBOL_DEFINITION prime192v1 */
/**
 * @summary prime192v1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * prime192v1 OBJECT IDENTIFIER ::= { primeCurve 1 }
 * ```
 *
 * @constant
 */
export const prime192v1: OBJECT_IDENTIFIER = new _OID([1], primeCurve);
/* END_OF_SYMBOL_DEFINITION prime192v1 */

/* eslint-enable */
