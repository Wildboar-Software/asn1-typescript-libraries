/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { primeCurve } from "../ANSI-X9-62/primeCurve.va.mjs";
/**
 * @summary ansix9p256r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ansix9p256r1 OBJECT IDENTIFIER ::= {primeCurve  7 }
 * ```
 *
 * @constant
 */
export const ansix9p256r1: OBJECT_IDENTIFIER = new _OID([7], primeCurve);

/* eslint-enable */
