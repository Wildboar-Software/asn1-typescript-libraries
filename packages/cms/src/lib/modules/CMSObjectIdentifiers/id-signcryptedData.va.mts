/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_signcryptedData
 * @description
 *
 * OID for SigncryptedData content type (ITU-T X.894 | ISO/IEC 24824-4 clause 7.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-signcryptedData OID ::= { iso(1) member-body(2) us(840)
 * x973(10060) types(1) signcryptedData(3)}
 * ```
 *
 * @constant
 */
export const id_signcryptedData: OID = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* x973 */ 10060,
    /* types */ 1,
    /* signcryptedData */ 3,
]);

/* eslint-enable */
