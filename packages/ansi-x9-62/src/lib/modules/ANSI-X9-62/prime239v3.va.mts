/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { primeCurve } from "../ANSI-X9-62/primeCurve.va.mjs";
/**
 * @summary prime239v3
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * prime239v3 OBJECT IDENTIFIER ::= { primeCurve 6 }
 * ```
 *
 * @constant
 */
export const prime239v3: OBJECT_IDENTIFIER = _OID.fromParts([6], primeCurve);

/* eslint-enable */
