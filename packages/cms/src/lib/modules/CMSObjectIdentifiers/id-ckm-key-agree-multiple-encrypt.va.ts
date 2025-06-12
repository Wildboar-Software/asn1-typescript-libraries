/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { id_ckm_algorithms } from "../CMSObjectIdentifiers/id-ckm-algorithms.va.js";
import { OID } from "../CMSObjectIdentifiers/OID.ta.js";
export { id_ckm_algorithms } from "../CMSObjectIdentifiers/id-ckm-algorithms.va.js";
export { OID, _decode_OID, _encode_OID } from "../CMSObjectIdentifiers/OID.ta.js";

/* START_OF_SYMBOL_DEFINITION id_ckm_key_agree_multiple_encrypt */
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
/* END_OF_SYMBOL_DEFINITION id_ckm_key_agree_multiple_encrypt */

/* eslint-enable */
