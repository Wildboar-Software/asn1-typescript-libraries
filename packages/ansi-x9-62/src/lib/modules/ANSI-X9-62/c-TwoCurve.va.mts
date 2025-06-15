/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { ellipticCurve } from "../ANSI-X9-62/ellipticCurve.va.mjs";
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

/* eslint-enable */
