/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_PasswordBasedMac
 * @description
 *
 * Algorithm OID for Password-Based MAC
 * (`1.2.840.113533.7.66.13`) ([RFC 4211 §4.4](https://datatracker.ietf.org/doc/html/rfc4211#section-4.4)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-PasswordBasedMac OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 *     usa(840) nt(113533) nsn(7) algorithms(66) 13 }
 * ```
 *
 * @constant
 */
export const id_PasswordBasedMac: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* usa */ 840,
    /* nt */ 113533,
    /* nsn */ 7,
    /* algorithms */ 66,
    13,
]);

/* eslint-enable */
