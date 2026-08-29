/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { c_TwoCurve } from "../ANSI-X9-62/c-TwoCurve.va.mjs";
/**
 * @summary c2onb239v5
 * @description
 *
 * Named example curve over F2^239 (Gaussian normal basis). Coefficients
 * selected verifiably at random with a seeded hash (Annex A.3.3.1).
 * Full domain parameters are in ANSI X9.62-1998 J.4.5,
 * example 5. Use as `Parameters.namedCurve`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * c2onb239v5 OBJECT IDENTIFIER ::= { c-TwoCurve 15 }
 * ```
 *
 * @constant
 */
export const c2onb239v5: OBJECT_IDENTIFIER = _OID.fromParts([15], c_TwoCurve);

/* eslint-enable */
