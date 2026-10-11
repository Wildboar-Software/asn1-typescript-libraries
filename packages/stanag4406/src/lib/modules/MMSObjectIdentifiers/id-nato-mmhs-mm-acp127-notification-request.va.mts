/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mm } from "../MMSObjectIdentifiers/id-mm.va.mjs";
// export { id_mm } from "../MMSObjectIdentifiers/id-mm.va.mjs";


/**
 * @summary id_nato_mmhs_mm_acp127_notification_request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-mm-acp127-notification-request ID ::= {id-mm  15}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_mm_acp127_notification_request: ID = _OID.fromParts([
    15,
], id_mm);

/* eslint-enable */
