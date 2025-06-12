/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { primeCurve } from "../ANSI-X9-62/primeCurve.va.mjs";
export { primeCurve } from "../ANSI-X9-62/primeCurve.va.mjs";

/* START_OF_SYMBOL_DEFINITION ansix9p192r1 */
/**
 * @summary ansix9p192r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ansix9p192r1 OBJECT IDENTIFIER ::= {primeCurve  1 }
 * ```
 *
 * @constant
 */
export const ansix9p192r1: OBJECT_IDENTIFIER = new _OID([1], primeCurve);
/* END_OF_SYMBOL_DEFINITION ansix9p192r1 */

/* eslint-enable */
