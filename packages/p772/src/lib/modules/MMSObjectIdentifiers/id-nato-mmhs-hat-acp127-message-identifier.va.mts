/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_hat } from "../MMSObjectIdentifiers/id-hat.va.mjs";
// export { id_hat } from "../MMSObjectIdentifiers/id-hat.va.mjs";


/**
 * @summary id_nato_mmhs_hat_acp127_message_identifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-hat-acp127-message-identifier ID ::= {id-hat  13}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_hat_acp127_message_identifier: ID = _OID.fromParts([
    13,
], id_hat);

/* eslint-enable */
