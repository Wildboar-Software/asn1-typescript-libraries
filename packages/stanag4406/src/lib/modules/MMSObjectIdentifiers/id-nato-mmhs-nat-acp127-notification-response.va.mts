/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_nat } from "../MMSObjectIdentifiers/id-nat.va.mjs";
// export { id_nat } from "../MMSObjectIdentifiers/id-nat.va.mjs";


/**
 * @summary id_nato_mmhs_nat_acp127_notification_response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-nat-acp127-notification-response ID ::= {id-nat  0}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_nat_acp127_notification_response: ID = _OID.fromParts([
    0,
], id_nat);

/* eslint-enable */
