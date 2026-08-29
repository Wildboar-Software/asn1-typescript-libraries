/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { primeCurve } from "../ANSI-X9-62/primeCurve.va.mjs";
/**
 * @summary prime256v1
 * @description
 *
 * Named example curve over a 256-bit prime field Fp.
 * Generated verifiably at random (Annex A.3.3.2). Full domain
 * parameters are in ANSI X9.62-1998 J.5.3, example 1.
 * Use as `Parameters.namedCurve`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * prime256v1 OBJECT IDENTIFIER ::= { primeCurve 7 }
 * ```
 *
 * @constant
 */
export const prime256v1: OBJECT_IDENTIFIER = _OID.fromParts([7], primeCurve);

/* eslint-enable */
