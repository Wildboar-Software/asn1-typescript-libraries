/* eslint-disable */
import { iso, ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_dbekm_recip_info
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-dbekm-recip-info OID ::= { iso member-body(2) us(840) x973(10060) km(2) 3 }
 * ```
 *
 * @constant
 */
export const id_dbekm_recip_info: OID = new _OID(
    [/* member-body */ 2, /* us */ 840, /* x973 */ 10060, /* km */ 2, 3],
    iso
);

/* eslint-enable */
