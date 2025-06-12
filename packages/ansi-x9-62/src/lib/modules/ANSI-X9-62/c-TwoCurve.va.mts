/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { ellipticCurve } from "../ANSI-X9-62/ellipticCurve.va.mjs";
export { ellipticCurve } from "../ANSI-X9-62/ellipticCurve.va.mjs";

/* START_OF_SYMBOL_DEFINITION c_TwoCurve */
/**
 * @summary c_TwoCurve
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * c-TwoCurve OBJECT IDENTIFIER ::= { ellipticCurve characteristicTwo(0) }
 * ```
 *
 * @constant
 */
export const c_TwoCurve: OBJECT_IDENTIFIER = new _OID(
    [/* characteristicTwo */ 0],
    ellipticCurve
);
/* END_OF_SYMBOL_DEFINITION c_TwoCurve */

/* eslint-enable */
