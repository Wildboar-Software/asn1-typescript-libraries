/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary pkcs_1
 * @description
 *
 * PKCS #1 arc OID used as parent for PSS/OAEP algorithm identifiers
 * ([RFC 4055](https://datatracker.ietf.org/doc/html/rfc4055)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-1  OBJECT IDENTIFIER ::= { iso(1) member-body(2) us(840) rsadsi(113549) pkcs(1) 1 }
 * ```
 *
 * @constant
 */
export const pkcs_1: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    1,
]);

/* eslint-enable */
