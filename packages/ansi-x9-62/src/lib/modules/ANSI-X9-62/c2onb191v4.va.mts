/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { c_TwoCurve } from "../ANSI-X9-62/c-TwoCurve.va.mjs";
/**
 * @summary c2onb191v4
 * @description
 *
 * Named example curve over F2^191 (Gaussian normal basis). Coefficients
 * selected verifiably at random with a seeded hash (Annex A.3.3.1).
 * Full domain parameters are in ANSI X9.62-1998 J.4.3,
 * example 4. Use as `Parameters.namedCurve`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * c2onb191v4 OBJECT IDENTIFIER ::= { c-TwoCurve 8 }
 * ```
 *
 * @constant
 */
export const c2onb191v4: OBJECT_IDENTIFIER = _OID.fromParts([8], c_TwoCurve);

/* eslint-enable */
