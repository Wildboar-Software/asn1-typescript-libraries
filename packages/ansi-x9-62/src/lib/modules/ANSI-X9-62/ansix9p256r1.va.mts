/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { primeCurve } from "../ANSI-X9-62/primeCurve.va.mjs";
export { primeCurve } from "../ANSI-X9-62/primeCurve.va.mjs";

/* START_OF_SYMBOL_DEFINITION ansix9p256r1 */
/**
 * @summary ansix9p256r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ansix9p256r1 OBJECT IDENTIFIER ::= {primeCurve  7 }
 * ```
 *
 * @constant
 */
export const ansix9p256r1: OBJECT_IDENTIFIER = new _OID([7], primeCurve);
/* END_OF_SYMBOL_DEFINITION ansix9p256r1 */

/* eslint-enable */
