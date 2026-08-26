/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_PBKDF2
 * @description
 *
 * OID for PBKDF2 key derivation (`id-PBKDF2`)
 * ([RFC 3370 §4.4.1](https://datatracker.ietf.org/doc/html/rfc3370#section-4.4.1);
 * PKCS #5). Parameters are `PBKDF2-params`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-PBKDF2 OBJECT IDENTIFIER ::= { iso(1) member-body(2) us(840)
 * rsadsi(113549) pkcs(1) pkcs-5(5) 12 }
 * ```
 *
 * @constant
 */
export const id_PBKDF2: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-5 */ 5,
    12,
]);

/* eslint-enable */
