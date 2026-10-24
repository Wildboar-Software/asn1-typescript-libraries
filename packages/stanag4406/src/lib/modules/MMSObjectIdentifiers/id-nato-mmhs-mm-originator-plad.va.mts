/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mm } from "../MMSObjectIdentifiers/id-mm.va.mjs";


/**
 * @summary id_nato_mmhs_mm_originator_plad
 * @description
 * 
 * Identifies the originator-PLAD heading extension. Transitional. STANAG 4406
 * (Ed. 2), Annex A, A1.15, B.117, and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-mm-originator-plad ID ::= {id-mm  14}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_mm_originator_plad: ID = _OID.fromParts([
    14,
], id_mm);

/* eslint-enable */
