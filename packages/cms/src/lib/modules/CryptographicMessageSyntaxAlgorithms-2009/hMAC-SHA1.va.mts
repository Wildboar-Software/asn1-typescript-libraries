/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary hMAC_SHA1
 * @description
 *
 * OID for HMAC-SHA1 (`hMAC-SHA1`), used as PBKDF2 PRF default and as a CMS
 * MAC algorithm ([RFC 3370 §4.4.1](https://datatracker.ietf.org/doc/html/rfc3370#section-4.4.1),
 * [§6](https://datatracker.ietf.org/doc/html/rfc3370#section-6)).
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
