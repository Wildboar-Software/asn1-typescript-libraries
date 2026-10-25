/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mm } from "../MMSObjectIdentifiers/id-mm.va.mjs";


/**
 * @summary id_nato_mmhs_mm_distribution_codes
 * @description
 * 
 * Identifies the distribution-codes heading extension (subject indicator codes
 * and other distribution criteria). STANAG 4406 (Ed. 2), Annex A, A1.3, B.107,
 * and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-mm-distribution-codes ID ::= {id-mm  6}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_mm_distribution_codes: ID = _OID.fromParts([
    6,
], id_mm);

/* eslint-enable */
