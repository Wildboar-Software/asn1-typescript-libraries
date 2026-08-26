/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_smime
 * @description
 *
 * S/MIME arc OID (`id-smime` / `smime`) under PKCS #9
 * ([RFC 5751 §2.5](https://datatracker.ietf.org/doc/html/rfc5751#section-2.5);
 * ASN.1 [RFC 5911](https://datatracker.ietf.org/doc/html/rfc5911)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-smime OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 * us(840) rsadsi(113549) pkcs(1) pkcs9(9) 16 }
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
