/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
import { id_policy } from "../MMSObjectIdentifiers/id-policy.va.mjs";
// export { id_policy } from "../MMSObjectIdentifiers/id-policy.va.mjs";


/**
 * @summary id_policy_nato
 * @description
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
