/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_hat } from "../MMSObjectIdentifiers/id-hat.va.mjs";


/**
 * @summary id_nato_mmhs_hat_handling_instructions
 * @description
 * 
 * Message-store attribute identifier for handling instructions. Single-valued,
 * equality match. STANAG 4406 (Ed. 2), Annex A, C.2.5 and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-hat-handling-instructions ID ::= {id-hat  7}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_hat_handling_instructions: ID = _OID.fromParts([
    7,
], id_hat);

/* eslint-enable */
