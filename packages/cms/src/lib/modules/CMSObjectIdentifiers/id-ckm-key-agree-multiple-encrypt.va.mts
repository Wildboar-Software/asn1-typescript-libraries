/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { id_ckm_algorithms } from "../CMSObjectIdentifiers/id-ckm-algorithms.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_ckm_key_agree_multiple_encrypt
 * @description
 *
 * OID for CKM key-agreement multiple-encryption construction. (ITU-T X.894 | ISO/IEC 24824-4 clause 9).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ckm-key-agree-multiple-encrypt OID ::= {
 * id-ckm-algorithms key-agree-multiple-encrypt(3) }
 * ```
 *
 * @constant
 */
export const id_ckm_key_agree_multiple_encrypt: OID = _OID.fromParts(
    [/* key-agree-multiple-encrypt */ 3],
    id_ckm_algorithms
);

/* eslint-enable */
