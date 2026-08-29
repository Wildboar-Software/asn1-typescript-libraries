/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { primeCurve } from "../ANSI-X9-62/primeCurve.va.mjs";
/**
 * @summary ansix9p256r1
 * @description
 *
 * Same OID as `prime256v1` (`{primeCurve 7}`). ANSI X9.62-1998
 * J.5.3 example 1 (256-bit Fp, verifiably at random). Later
 * module also lists this as L.6.4.3 under the `ansix9p256r1`
 * name.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ansix9p256r1 OBJECT IDENTIFIER ::= {primeCurve  7 }
 * ```
 *
 * @constant
 */
export const ansix9p256r1: OBJECT_IDENTIFIER = _OID.fromParts([7], primeCurve);

/* eslint-enable */
