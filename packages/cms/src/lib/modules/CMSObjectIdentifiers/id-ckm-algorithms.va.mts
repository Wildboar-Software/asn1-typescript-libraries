/* eslint-disable */
import { iso, ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_ckm_algorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ckm-algorithms OID ::= { iso member-body(2) us(840) x973(10060) algorithms(3) }
 * ```
 *
 * @constant
 */
export const id_ckm_algorithms: OID = _OID.fromParts(
    [/* member-body */ 2, /* us */ 840, /* x973 */ 10060, /* algorithms */ 3],
    iso
);

/* eslint-enable */
