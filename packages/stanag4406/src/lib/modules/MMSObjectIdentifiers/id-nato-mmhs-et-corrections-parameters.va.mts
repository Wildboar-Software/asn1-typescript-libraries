/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_et } from "../MMSObjectIdentifiers/id-et.va.mjs";


/**
 * @summary id_nato_mmhs_et_corrections_parameters
 * @description
 * 
 * Parameters identifier for the corrections extended body part. STANAG 4406
 * (Ed. 2), Annex A, B1.2 and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-et-corrections-parameters ID ::= {id-et  3}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_et_corrections_parameters: ID = _OID.fromParts([
    3,
], id_et);

/* eslint-enable */
