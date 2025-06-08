/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { secgCurve } from "../ANSI-X9-62/secgCurve.va";
export { secgCurve } from "../ANSI-X9-62/secgCurve.va";

/* START_OF_SYMBOL_DEFINITION ansix9p192k1 */
/**
 * @summary ansix9p192k1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ansix9p192k1 OBJECT IDENTIFIER ::= {secgCurve  31 }
 * ```
 *
 * @constant
 */
export const ansix9p192k1: OBJECT_IDENTIFIER = new _OID([31], secgCurve);
/* END_OF_SYMBOL_DEFINITION ansix9p192k1 */

/* eslint-enable */
