/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_countersignature
 * @description
 *
 * OID for the countersignature unsigned attribute (`id-countersignature`)
 * ([RFC 5652 §11.4](https://datatracker.ietf.org/doc/html/rfc5652#section-11.4)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-countersignature OBJECT IDENTIFIER ::= { iso(1) member-body(2)
 * us(840) rsadsi(113549) pkcs(1) pkcs9(9) 6 }
 * ```
 *
 * @constant
 */
export const id_countersignature: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
    6,
]);

/* eslint-enable */
