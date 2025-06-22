/* eslint-disable */
import { iso, ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_ckm_recip_info2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ckm-recip-info2 OID ::= { iso member-body(2) us(840) x973(10060) km(2) 2}
 * ```
 *
 * @constant
 */
export const id_ckm_recip_info2: OID = _OID.fromParts(
    [/* member-body */ 2, /* us */ 840, /* x973 */ 10060, /* km */ 2, 2],
    iso
);

/* eslint-enable */
