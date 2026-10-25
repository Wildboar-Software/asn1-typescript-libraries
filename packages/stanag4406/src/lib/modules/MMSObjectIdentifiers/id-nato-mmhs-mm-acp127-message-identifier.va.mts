/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mm } from "../MMSObjectIdentifiers/id-mm.va.mjs";


/**
 * @summary id_nato_mmhs_mm_acp127_message_identifier
 * @description
 * 
 * Identifies the ACP 127 message-identifier heading extension. Transitional.
 * STANAG 4406 (Ed. 2), Annex A, A1.14, B.116, and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-mm-acp127-message-identifier ID ::= {id-mm  13}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_mm_acp127_message_identifier: ID = _OID.fromParts([
    13,
], id_mm);

/* eslint-enable */
