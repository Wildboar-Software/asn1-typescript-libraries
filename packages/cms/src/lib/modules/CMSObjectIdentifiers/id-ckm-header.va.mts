/* eslint-disable */
import { iso, ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_ckm_header
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ckm-header OID ::= { iso member-body(2) us(840) x973(10060) header(4) }
 * ```
 *
 * @constant
 */
export const id_ckm_header: OID = new _OID(
    [/* member-body */ 2, /* us */ 840, /* x973 */ 10060, /* header */ 4],
    iso
);

/* eslint-enable */
