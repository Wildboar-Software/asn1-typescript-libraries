/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { id_ckm_algorithms } from "../CMSObjectIdentifiers/id-ckm-algorithms.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary id_ckm_key_transport
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ckm-key-transport OID ::= { id-ckm-algorithms key-transport(2) }
 * ```
 *
 * @constant
 */
export const id_ckm_key_transport: OID = _OID.fromParts(
    [/* key-transport */ 2],
    id_ckm_algorithms
);

/* eslint-enable */
