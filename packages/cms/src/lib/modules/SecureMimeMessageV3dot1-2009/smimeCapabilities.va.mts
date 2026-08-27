/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary smimeCapabilities
 * @description
 *
 * OID for the SMIMECapabilities signed attribute
 * ([RFC 5751 §2.5.2](https://datatracker.ietf.org/doc/html/rfc5751#section-2.5.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * smimeCapabilities OBJECT IDENTIFIER ::= { iso(1) member-body(2) us(840) rsadsi(113549) pkcs(1) pkcs-9(9) 15 }
 * ```
 *
 * @constant
 */
export const smimeCapabilities: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    15,
]);

/* eslint-enable */
