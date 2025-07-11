/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary pkcs7
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs7 OID ::= { iso(1) member-body(2) us(840) rsadsi(113549) pkcs(1) pkcs7(7) }
 * ```
 *
 * @constant
 */
export const pkcs7: OID = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs7 */ 7,
]);

/* eslint-enable */
