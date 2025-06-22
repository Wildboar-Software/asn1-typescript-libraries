/* eslint-disable */
import { iso, ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_ckm_recip_info
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ckm-recip-info OID ::= { iso member-body(2) us(840) x973(10060) km(2) 1 }
 * ```
 *
 * @constant
 */
export const id_ckm_recip_info: OID = _OID.fromParts(
    [/* member-body */ 2, /* us */ 840, /* x973 */ 10060, /* km */ 2, 1],
    iso
);

/* eslint-enable */
