/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { primeCurve } from "../ANSI-X9-62/primeCurve.va.mjs";
/**
 * @summary prime239v2
 * @description
 *
 * Named example curve over a 239-bit prime field Fp.
 * Generated verifiably at random (Annex A.3.3.2). Full domain
 * parameters are in ANSI X9.62-1998 J.5.2, example 2.
 * Use as `Parameters.namedCurve`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * prime239v2 OBJECT IDENTIFIER ::= { primeCurve 5 }
 * ```
 *
 * @constant
 */
export const prime239v2: OBJECT_IDENTIFIER = _OID.fromParts([5], primeCurve);

/* eslint-enable */
