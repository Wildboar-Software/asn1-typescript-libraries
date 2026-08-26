/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary pkcs9
 * @description
 *
 * PKCS #9 arc OID — parent of S/MIME and attribute OIDs
 * ([RFC 5652](https://datatracker.ietf.org/doc/html/rfc5652)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs9 OID ::= { iso(1) member-body(2) us(840) rsadsi(113549) pkcs(1) pkcs9(9) }
 * ```
 *
 * @constant
 */
export const pkcs9: OID = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
]);

/* eslint-enable */
