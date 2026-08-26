/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary ecdsa_with_SHA384
 * @description
 *
 * ECDSA with SHA-384 signature OID ([RFC 5758 §3.2](https://datatracker.ietf.org/doc/html/rfc5758#section-3.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-SHA384 OBJECT IDENTIFIER ::= {
 * iso(1) member-body(2) us(840) ansi-X9-62(10045) signatures(4)
 * ecdsa-with-SHA2(3) 3 }
 * ```
 *
 * @constant
 */
export const ecdsa_with_SHA384: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* ansi-X9-62 */ 10045,
    /* signatures */ 4,
    /* ecdsa-with-SHA2 */ 3,
    3,
]);

/* eslint-enable */
