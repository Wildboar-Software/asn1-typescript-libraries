/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_hat } from "../MMSObjectIdentifiers/id-hat.va.mjs";


/**
 * @summary id_nato_mmhs_hat_message_type
 * @description
 * 
 * Message-store attribute identifier for message type. Single-valued, equality
 * match. STANAG 4406 (Ed. 2), Annex A, C.2.5 and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-hat-message-type ID ::= {id-hat  2}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_hat_message_type: ID = _OID.fromParts([
    2,
], id_hat);

/* eslint-enable */
