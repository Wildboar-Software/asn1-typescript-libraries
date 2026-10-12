/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mm } from "../MMSObjectIdentifiers/id-mm.va.mjs";


/**
 * @summary id_nato_mmhs_mm_handling_instructions
 * @description
 * 
 * Identifies the handling-instructions heading extension. Transitional ACP 127
 * traffic-operator instructions. STANAG 4406 (Ed. 2), Annex A, A1.4, B.108, and
 * Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-mm-handling-instructions ID ::= {id-mm  7}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_mm_handling_instructions: ID = _OID.fromParts([
    7,
], id_mm);

/* eslint-enable */
