/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { primeCurve } from "../ANSI-X9-62/primeCurve.va.mjs";
/**
 * @summary prime192v3
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * prime192v3 OBJECT IDENTIFIER ::= { primeCurve 3 }
 * ```
 *
 * @constant
 */
export const prime192v3: OBJECT_IDENTIFIER = _OID.fromParts([3], primeCurve);

/* eslint-enable */
