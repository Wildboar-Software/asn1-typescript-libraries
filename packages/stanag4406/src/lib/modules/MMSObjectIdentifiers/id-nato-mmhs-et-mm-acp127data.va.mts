/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_et } from "../MMSObjectIdentifiers/id-et.va.mjs";


/**
 * @summary id_nato_mmhs_et_mm_acp127data
 * @description
 * 
 * Data identifier for ACP 127 data-pattern traffic. The Annex B1.5 name is
 * `id-nato-mmhs-et-acp127data`; this module includes `mm` in the name. STANAG
 * 4406 (Ed. 2), Annex A, clause 7.3.12.5, B1.5, and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-et-mm-acp127data ID ::= {id-et  12}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_et_mm_acp127data: ID = _OID.fromParts([
    12,
], id_et);

/* eslint-enable */
