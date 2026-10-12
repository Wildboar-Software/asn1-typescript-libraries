/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_hat } from "../MMSObjectIdentifiers/id-hat.va.mjs";


/**
 * @summary id_nato_mmhs_hat_message_instructions
 * @description
 * 
 * Message-store attribute identifier for message instructions. Single-valued,
 * equality match. STANAG 4406 (Ed. 2), Annex A, C.2.5 and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-hat-message-instructions ID ::= {id-hat  8}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_hat_message_instructions: ID = _OID.fromParts([
    8,
], id_hat);

/* eslint-enable */
