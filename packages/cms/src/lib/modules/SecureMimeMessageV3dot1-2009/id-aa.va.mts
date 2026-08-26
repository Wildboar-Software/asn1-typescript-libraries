/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_aa
 * @description
 *
 * S/MIME authenticated-attributes arc (`id-aa`)
 * ([RFC 5751](https://datatracker.ietf.org/doc/html/rfc5751);
 * [RFC 5911](https://datatracker.ietf.org/doc/html/rfc5911)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aa OBJECT IDENTIFIER ::= { iso(1) member-body(2) usa(840) rsadsi(113549) pkcs(1) pkcs-9(9)
 * smime(16) attributes(2)}
 * ```
 *
 * @constant
 */
export const id_aa: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* usa */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* attributes */ 2,
]);

/* eslint-enable */
