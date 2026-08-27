/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_ecMQV
 * @description
 *
 * ECMQV public-key OID ([RFC 5480 §2.1.2](https://datatracker.ietf.org/doc/html/rfc5480#section-2.1.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ecMQV OBJECT IDENTIFIER ::= {
 * iso(1) identified-organization(3) certicom(132) schemes(1) ecmqv(13) }
 * ```
 *
 * @constant
 */
export const id_ecMQV: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* certicom */ 132,
    /* schemes */ 1,
    /* ecmqv */ 13,
]);

/* eslint-enable */
