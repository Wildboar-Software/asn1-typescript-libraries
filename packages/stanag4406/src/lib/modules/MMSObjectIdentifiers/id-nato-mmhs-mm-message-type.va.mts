/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mm } from "../MMSObjectIdentifiers/id-mm.va.mjs";


/**
 * @summary id_nato_mmhs_mm_message_type
 * @description
 * 
 * Identifies the message-type heading extension (exercise, operation, project,
 * or drill). STANAG 4406 (Ed. 2), Annex A, A1.10, B.103, and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-mm-message-type ID ::= {id-mm  2}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_mm_message_type: ID = _OID.fromParts([
    2,
], id_mm);

/* eslint-enable */
