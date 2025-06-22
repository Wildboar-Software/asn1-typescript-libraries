/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { primeCurve } from "../ANSI-X9-62/primeCurve.va.mjs";
/**
 * @summary prime256v1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * prime256v1 OBJECT IDENTIFIER ::= { primeCurve 7 }
 * ```
 *
 * @constant
 */
export const prime256v1: OBJECT_IDENTIFIER = _OID.fromParts([7], primeCurve);

/* eslint-enable */
