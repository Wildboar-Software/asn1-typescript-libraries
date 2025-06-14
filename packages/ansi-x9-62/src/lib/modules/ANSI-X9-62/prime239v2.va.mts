/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
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
export const prime239v2: OBJECT_IDENTIFIER = new _OID([5], primeCurve);

/* eslint-enable */
