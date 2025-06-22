/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";

/**
 * @summary secgCurve
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * secgCurve OBJECT IDENTIFIER ::= { iso(1) identified-organization(3)
 * certicom(132) curve(0) }
 * ```
 *
 * @constant
 */
export const secgCurve: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* certicom */ 132,
    /* curve */ 0,
]);

/* eslint-enable */
