/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mm } from "../MMSObjectIdentifiers/id-mm.va.mjs";


/**
 * @summary id_nato_mmhs_mm_primary_precedence
 * @description
 * 
 * Identifies the primary-precedence heading extension. Action addressees; the
 * originating domain always includes it, and it selects the MTS grade of
 * delivery. STANAG 4406 (Ed. 2), Annex A, A1.8, B.101, and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-mm-primary-precedence ID ::= {id-mm  0}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_mm_primary_precedence: ID = _OID.fromParts([
    0,
], id_mm);

/* eslint-enable */
