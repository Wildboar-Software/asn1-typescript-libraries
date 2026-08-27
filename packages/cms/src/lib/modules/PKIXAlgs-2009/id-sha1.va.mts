/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_sha1
 * @description
 *
 * SHA-1 hash algorithm OID ([RFC 3279 §2.2](https://datatracker.ietf.org/doc/html/rfc3279#section-2.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha1 OBJECT IDENTIFIER ::= {
 * iso(1) identified-organization(3) oiw(14) secsig(3)
 * algorithm(2) 26 }
 * ```
 *
 * @constant
 */
export const id_sha1: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* oiw */ 14,
    /* secsig */ 3,
    /* algorithm */ 2,
    26,
]);

/* eslint-enable */
