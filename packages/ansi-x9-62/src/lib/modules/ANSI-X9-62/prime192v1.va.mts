/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { primeCurve } from "../ANSI-X9-62/primeCurve.va.mjs";
/**
 * @summary prime192v1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * prime192v1 OBJECT IDENTIFIER ::= { primeCurve 1 }
 * ```
 *
 * @constant
 */
export const prime192v1: OBJECT_IDENTIFIER = _OID.fromParts([1], primeCurve);

/* eslint-enable */
