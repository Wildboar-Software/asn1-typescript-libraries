/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { id_ckm_algorithms } from "../CMSObjectIdentifiers/id-ckm-algorithms.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_ckm_key_agree_hash
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ckm-key-agree-hash OID ::= { id-ckm-algorithms key-agree-hash(4) }
 * ```
 *
 * @constant
 */
export const id_ckm_key_agree_hash: OID = _OID.fromParts(
    [/* key-agree-hash */ 4],
    id_ckm_algorithms
);

/* eslint-enable */
