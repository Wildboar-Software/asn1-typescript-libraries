/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { secgCurve } from "../ANSI-X9-62/secgCurve.va.mjs";
/**
 * @summary ansix9p224k1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ansix9p224k1 OBJECT IDENTIFIER ::= {secgCurve  32 }
 * ```
 *
 * @constant
 */
export const ansix9p224k1: OBJECT_IDENTIFIER = _OID.fromParts([32], secgCurve);

/* eslint-enable */
