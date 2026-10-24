/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mm } from "../MMSObjectIdentifiers/id-mm.va.mjs";


/**
 * @summary id_nato_mmhs_mm_message_instructions
 * @description
 * 
 * Identifies the message-instructions heading extension (operating signals and
 * remarks). STANAG 4406 (Ed. 2), Annex A, A1.5, B.109, and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-mm-message-instructions ID ::= {id-mm  8}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_mm_message_instructions: ID = _OID.fromParts([
    8,
], id_mm);

/* eslint-enable */
