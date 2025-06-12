/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { secgCurve } from "../ANSI-X9-62/secgCurve.va.mjs";
export { secgCurve } from "../ANSI-X9-62/secgCurve.va.mjs";

/* START_OF_SYMBOL_DEFINITION ansix9p160r1 */
/**
 * @summary ansix9p160r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ansix9p160r1 OBJECT IDENTIFIER ::= {secgCurve  8 }
 * ```
 *
 * @constant
 */
export const ansix9p160r1: OBJECT_IDENTIFIER = new _OID([8], secgCurve);
/* END_OF_SYMBOL_DEFINITION ansix9p160r1 */

/* eslint-enable */
