/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
import { id_policy } from "../MMSObjectIdentifiers/id-policy.va.mjs";


/**
 * @summary id_policy_nato
 * @description
 * 
 * `{id-policy 0}`. Deprecated. Used with older implementations of STANAG 4406
 * Edition 1. Edition 2 messages under the NATO policy use `id-policy-v1`.
 * STANAG 4406 (Ed. 2), Annex H.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-policy-nato ID ::= {id-policy 0}
 * ```
 * 
 * @constant
 */
export
const id_policy_nato: ID = _OID.fromParts([
    0,
], id_policy);

/* eslint-enable */
