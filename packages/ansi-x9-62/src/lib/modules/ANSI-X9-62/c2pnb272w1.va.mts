/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { c_TwoCurve } from "../ANSI-X9-62/c-TwoCurve.va.mjs";
/**
 * @summary c2pnb272w1
 * @description
 *
 * Named example curve over F2^272 (pentanomial basis). Coefficients selected
 * using the Weil method (Annex A.3.2).
 * Full domain parameters are in ANSI X9.62-1998 J.4.6,
 * example 1. Use as `Parameters.namedCurve`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * c2pnb272w1 OBJECT IDENTIFIER ::= { c-TwoCurve 16 }
 * ```
 *
 * @constant
 */
export const c2pnb272w1: OBJECT_IDENTIFIER = _OID.fromParts([16], c_TwoCurve);

/* eslint-enable */
