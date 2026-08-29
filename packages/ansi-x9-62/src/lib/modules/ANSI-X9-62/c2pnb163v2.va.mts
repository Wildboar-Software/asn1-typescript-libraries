/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { c_TwoCurve } from "../ANSI-X9-62/c-TwoCurve.va.mjs";
/**
 * @summary c2pnb163v2
 * @description
 *
 * Named example curve over F2^163 (pentanomial basis). Coefficients selected
 * verifiably at random with a seeded hash (Annex A.3.3.1).
 * Full domain parameters are in ANSI X9.62-1998 J.4.1,
 * example 2. Use as `Parameters.namedCurve`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * c2pnb163v2 OBJECT IDENTIFIER ::= { c-TwoCurve 2 }
 * ```
 *
 * @constant
 */
export const c2pnb163v2: OBJECT_IDENTIFIER = _OID.fromParts([2], c_TwoCurve);

/* eslint-enable */
