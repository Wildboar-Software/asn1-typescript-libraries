/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_alg_CMS3DESwrap
 * @description
 *
 * OID for Triple-DES key wrap in CMS (`id-alg-CMS3DESwrap`)
 * ([RFC 3370 §4.3.1](https://datatracker.ietf.org/doc/html/rfc3370#section-4.3.1)).
 * Parameters MUST be absent.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-alg-CMS3DESwrap OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 * us(840) rsadsi(113549) pkcs(1) pkcs-9(9) smime(16) alg(3) 6 }
 * ```
 *
 * @constant
 */
export const id_alg_CMS3DESwrap: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* alg */ 3,
    6,
]);

/* eslint-enable */
