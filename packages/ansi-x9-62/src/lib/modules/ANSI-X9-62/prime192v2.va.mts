/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { primeCurve } from "../ANSI-X9-62/primeCurve.va.mjs";
/**
 * @summary prime192v2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * prime192v2 OBJECT IDENTIFIER ::= { primeCurve 2 }
 * ```
 *
 * @constant
 */
export const prime192v2: OBJECT_IDENTIFIER = new _OID([2], primeCurve);

/* eslint-enable */
