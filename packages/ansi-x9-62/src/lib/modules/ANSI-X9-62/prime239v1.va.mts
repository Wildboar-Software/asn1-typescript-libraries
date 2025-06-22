/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { primeCurve } from "../ANSI-X9-62/primeCurve.va.mjs";
/**
 * @summary prime239v1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * prime239v1 OBJECT IDENTIFIER ::= { primeCurve 4 }
 * ```
 *
 * @constant
 */
export const prime239v1: OBJECT_IDENTIFIER = _OID.fromParts([4], primeCurve);

/* eslint-enable */
