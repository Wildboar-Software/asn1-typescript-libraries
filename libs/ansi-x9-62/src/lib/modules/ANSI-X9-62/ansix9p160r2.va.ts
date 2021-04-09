/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { secgCurve } from "../ANSI-X9-62/secgCurve.va";
export { secgCurve } from "../ANSI-X9-62/secgCurve.va";

/* START_OF_SYMBOL_DEFINITION ansix9p160r2 */
/**
 * @summary ansix9p160r2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ansix9p160r2 OBJECT IDENTIFIER ::= {secgCurve  30 }
 * ```
 *
 * @constant
 */
export const ansix9p160r2: OBJECT_IDENTIFIER = new _OID([30], secgCurve);
/* END_OF_SYMBOL_DEFINITION ansix9p160r2 */

/* eslint-enable */
