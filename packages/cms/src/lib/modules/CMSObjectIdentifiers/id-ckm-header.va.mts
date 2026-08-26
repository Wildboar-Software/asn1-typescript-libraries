/* eslint-disable */
import { iso, ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_ckm_header
 * @description
 *
 * OID for CKM header. (ITU-T X.894 | ISO/IEC 24824-4 clause 9).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ckm-header OID ::= { iso member-body(2) us(840) x973(10060) header(4) }
 * ```
 *
 * @constant
 */
export const id_ckm_header: OID = _OID.fromParts(
    [/* member-body */ 2, /* us */ 840, /* x973 */ 10060, /* header */ 4],
    iso
);

/* eslint-enable */
