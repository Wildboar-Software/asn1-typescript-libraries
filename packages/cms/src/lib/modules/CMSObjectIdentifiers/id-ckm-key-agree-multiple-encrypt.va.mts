/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { id_ckm_algorithms } from "../CMSObjectIdentifiers/id-ckm-algorithms.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_ckm_key_agree_multiple_encrypt
 * @description
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
export const id_ckm_key_agree_multiple_encrypt: OID = new _OID(
    [/* key-agree-multiple-encrypt */ 3],
    id_ckm_algorithms
);

/* eslint-enable */
