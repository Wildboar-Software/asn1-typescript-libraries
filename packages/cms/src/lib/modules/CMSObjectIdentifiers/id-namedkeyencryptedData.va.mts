/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_namedkeyencryptedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-namedkeyencryptedData OID ::= { iso(1) member-body(2) us(840)
 * x973(10060) types(1) namedKeyEncryptedData(2) }
 * ```
 *
 * @constant
 */
export const id_namedkeyencryptedData: OID = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* x973 */ 10060,
    /* types */ 1,
    /* namedKeyEncryptedData */ 2,
]);

/* eslint-enable */
