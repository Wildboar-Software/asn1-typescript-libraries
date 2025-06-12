/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { ellipticCurve } from "../ANSI-X9-62/ellipticCurve.va.mjs";
export { ellipticCurve } from "../ANSI-X9-62/ellipticCurve.va.mjs";

/* START_OF_SYMBOL_DEFINITION primeCurve */
/**
 * @summary primeCurve
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * primeCurve OBJECT IDENTIFIER ::= { ellipticCurve prime(1) }
 * ```
 *
 * @constant
 */
export const primeCurve: OBJECT_IDENTIFIER = new _OID(
    [/* prime */ 1],
    ellipticCurve
);
/* END_OF_SYMBOL_DEFINITION primeCurve */

/* eslint-enable */
