/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { ellipticCurve } from "../ANSI-X9-62/ellipticCurve.va.mjs";
/**
 * @summary primeCurve
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * primeCurve OBJECT IDENTIFIER ::= { ellipticCurve prime(1) }
 * ```
 *
 * @constant
 */
export const primeCurve: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* prime */ 1],
    ellipticCurve
);

/* eslint-enable */
