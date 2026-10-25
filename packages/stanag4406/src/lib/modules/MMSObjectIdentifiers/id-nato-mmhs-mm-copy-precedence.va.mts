/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mm } from "../MMSObjectIdentifiers/id-mm.va.mjs";


/**
 * @summary id_nato_mmhs_mm_copy_precedence
 * @description
 * 
 * Identifies the copy-precedence heading extension. Information addressees.
 * Equal to or lower than the primary precedence, and not used by the MM-MTS.
 * STANAG 4406 (Ed. 2), Annex A, A1.9, B.102, and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-mm-copy-precedence ID ::= {id-mm  1}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_mm_copy_precedence: ID = _OID.fromParts([
    1,
], id_mm);

/* eslint-enable */
