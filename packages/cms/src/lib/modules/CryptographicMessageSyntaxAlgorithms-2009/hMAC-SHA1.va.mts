/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary hMAC_SHA1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hMAC-SHA1 OBJECT IDENTIFIER ::= { iso(1) identified-organization(3)
 * dod(6) internet(1) security(5) mechanisms(5) 8 1 2 }
 * ```
 *
 * @constant
 */
export const hMAC_SHA1: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* mechanisms */ 5,
    8,
    1,
    2,
]);

/* eslint-enable */
