/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_aa_mlExpandHistory
 * @description
 *
 * Signed-attribute OID for `MLExpansionHistory`
 * (`… smime(16) id-aa(2) 3`) ([RFC 2634 §4.4](https://datatracker.ietf.org/doc/html/rfc2634#section-4.4)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aa-mlExpandHistory OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 *     us(840) rsadsi(113549) pkcs(1) pkcs-9(9) smime(16) id-aa(2) 3 }
 * ```
 *
 * @constant
 */
export const id_aa_mlExpandHistory: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* id-aa */ 2,
    3,
]);

/* eslint-enable */
