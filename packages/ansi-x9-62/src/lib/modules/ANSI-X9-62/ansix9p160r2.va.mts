/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { secgCurve } from "../ANSI-X9-62/secgCurve.va.mjs";
/**
 * @summary ansix9p160r2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ansix9p160r2 OBJECT IDENTIFIER ::= {secgCurve  30 }
 * ```
 *
 * @constant
 */
export const ansix9p160r2: OBJECT_IDENTIFIER = _OID.fromParts([30], secgCurve);

/* eslint-enable */
