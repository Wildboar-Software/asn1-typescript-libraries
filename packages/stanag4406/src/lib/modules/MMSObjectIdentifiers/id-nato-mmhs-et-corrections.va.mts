/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_et } from "../MMSObjectIdentifiers/id-et.va.mjs";


/**
 * @summary id_nato_mmhs_et_corrections
 * @description
 * 
 * Data identifier for the corrections extended body part, used only with ACP
 * 127. STANAG 4406 (Ed. 2), Annex A, B1.2, B.114, and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-et-corrections ID ::= {id-et  1}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_et_corrections: ID = _OID.fromParts([
    1,
], id_et);

/* eslint-enable */
