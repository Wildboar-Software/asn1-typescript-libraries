/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_ecDH
 * @description
 *
 * ECDH public-key OID restricted to key agreement ([RFC 5480 §2.1.2](https://datatracker.ietf.org/doc/html/rfc5480#section-2.1.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ecDH OBJECT IDENTIFIER ::= {
 * iso(1) identified-organization(3) certicom(132) schemes(1) ecdh(12) }
 * ```
 *
 * @constant
 */
export const id_ecDH: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* certicom */ 132,
    /* schemes */ 1,
    /* ecdh */ 12,
]);

/* eslint-enable */
