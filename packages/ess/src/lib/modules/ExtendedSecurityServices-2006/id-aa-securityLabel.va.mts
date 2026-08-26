/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_aa_securityLabel
 * @description
 *
 * Signed-attribute OID for `ESSSecurityLabel`
 * (`… smime(16) id-aa(2) 2`) ([RFC 2634 §3.2](https://datatracker.ietf.org/doc/html/rfc2634#section-3.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aa-securityLabel OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 *     us(840) rsadsi(113549) pkcs(1) pkcs-9(9) smime(16) id-aa(2) 2}
 * ```
 *
 * @constant
 */
export const id_aa_securityLabel: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* id-aa */ 2,
    2,
]);

/* eslint-enable */
