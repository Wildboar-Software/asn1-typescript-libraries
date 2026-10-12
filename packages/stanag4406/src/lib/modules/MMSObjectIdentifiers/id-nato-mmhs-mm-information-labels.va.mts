/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mm } from "../MMSObjectIdentifiers/id-mm.va.mjs";


/**
 * @summary id_nato_mmhs_mm_information_labels
 * @description
 * 
 * Identifies the security-information-labels heading extension, `{id-mm 17}`.
 * Deprecated. The replacement is the ESS security label in Annex B. STANAG 4406
 * (Ed. 2), Annex A, A1.16, B.120, and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-mm-information-labels ID ::= {id-mm  17}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_mm_information_labels: ID = _OID.fromParts([
    17,
], id_mm);

/* eslint-enable */
