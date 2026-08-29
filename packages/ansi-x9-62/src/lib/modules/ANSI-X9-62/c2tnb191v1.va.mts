/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { c_TwoCurve } from "../ANSI-X9-62/c-TwoCurve.va.mjs";
/**
 * @summary c2tnb191v1
 * @description
 *
 * Named example curve over F2^191 (trinomial basis). Coefficients selected
 * verifiably at random with a seeded hash (Annex A.3.3.1).
 * Full domain parameters are in ANSI X9.62-1998 J.4.3,
 * example 1. Use as `Parameters.namedCurve`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * c2tnb191v1 OBJECT IDENTIFIER ::= { c-TwoCurve 5 }
 * ```
 *
 * @constant
 */
export const c2tnb191v1: OBJECT_IDENTIFIER = _OID.fromParts([5], c_TwoCurve);

/* eslint-enable */
