/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_smime
 * @description
 *
 * S/MIME arc used to define CMS content-type OIDs in this
 * module ([RFC 4211 Appendix B](https://datatracker.ietf.org/doc/html/rfc4211#appendix-B);
 * [RFC 5912 §10](https://datatracker.ietf.org/doc/html/rfc5912#section-10)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-smime OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 *     us(840) rsadsi(113549) pkcs(1) pkcs9(9) 16 }
 * ```
 *
 * @constant
 */
export const id_smime: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
    16,
]);

/* eslint-enable */
