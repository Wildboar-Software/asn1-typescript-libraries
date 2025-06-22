/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { secgCurve } from "../ANSI-X9-62/secgCurve.va.mjs";
/**
 * @summary ansix9p192k1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ansix9p192k1 OBJECT IDENTIFIER ::= {secgCurve  31 }
 * ```
 *
 * @constant
 */
export const ansix9p192k1: OBJECT_IDENTIFIER = _OID.fromParts([31], secgCurve);

/* eslint-enable */
