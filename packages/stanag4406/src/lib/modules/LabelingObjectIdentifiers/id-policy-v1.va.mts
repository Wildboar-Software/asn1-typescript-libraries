/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
import { id_policy } from "../MMSObjectIdentifiers/id-policy.va.mjs";
// export { id_policy } from "../MMSObjectIdentifiers/id-policy.va.mjs";


/**
 * @summary id_policy_v1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-policy-v1 ID ::= {id-policy v1(1) }
 * ```
 * 
 * @constant
 */
export
const id_policy_v1: ID = _OID.fromParts([
    /* v1 */ 1,
], id_policy);

/* eslint-enable */
