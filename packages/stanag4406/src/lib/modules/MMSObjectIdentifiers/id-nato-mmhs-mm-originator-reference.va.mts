/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mm } from "../MMSObjectIdentifiers/id-mm.va.mjs";


/**
 * @summary id_nato_mmhs_mm_originator_reference
 * @description
 * 
 * Identifies the originator-reference heading extension (the originator's
 * number). STANAG 4406 (Ed. 2), Annex A, A1.7, B.111, and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-mm-originator-reference ID ::= {id-mm  10}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_mm_originator_reference: ID = _OID.fromParts([
    10,
], id_mm);

/* eslint-enable */
