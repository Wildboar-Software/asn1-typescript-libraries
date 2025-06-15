/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary pkcs9
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs9 OID ::= { iso(1) member-body(2) us(840) rsadsi(113549) pkcs(1) pkcs9(9) }
 * ```
 *
 * @constant
 */
export const pkcs9: OID = new _OID([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
]);

/* eslint-enable */
