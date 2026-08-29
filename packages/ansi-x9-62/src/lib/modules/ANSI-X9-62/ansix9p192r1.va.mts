/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { primeCurve } from "../ANSI-X9-62/primeCurve.va.mjs";
/**
 * @summary ansix9p192r1
 * @description
 *
 * Same OID as `prime192v1` (`{primeCurve 1}`). ANSI X9.62-1998
 * J.5.1 example 1 (192-bit Fp, verifiably at random). Later
 * module also lists this as L.6.2.3 under the `ansix9p192r1`
 * name.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ansix9p192r1 OBJECT IDENTIFIER ::= {primeCurve  1 }
 * ```
 *
 * @constant
 */
export const ansix9p192r1: OBJECT_IDENTIFIER = _OID.fromParts([1], primeCurve);

/* eslint-enable */
