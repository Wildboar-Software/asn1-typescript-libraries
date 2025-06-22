/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { primeCurve } from "../ANSI-X9-62/primeCurve.va.mjs";
/**
 * @summary prime239v2
 * @description
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
