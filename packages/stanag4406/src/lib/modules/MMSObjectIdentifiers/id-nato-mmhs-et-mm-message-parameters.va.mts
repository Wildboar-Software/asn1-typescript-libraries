/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_et } from "../MMSObjectIdentifiers/id-et.va.mjs";


/**
 * @summary id_nato_mmhs_et_mm_message_parameters
 * @description
 * 
 * Parameters identifier for the MM-message body part. STANAG 4406 (Ed. 2),
 * Annex A, B1.4 and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-et-mm-message-parameters ID ::= {id-et  10}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_et_mm_message_parameters: ID = _OID.fromParts([
    10,
], id_et);

/* eslint-enable */
