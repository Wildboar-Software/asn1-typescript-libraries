/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mm } from "../MMSObjectIdentifiers/id-mm.va.mjs";


/**
 * @summary id_nato_mmhs_mm_codress_message
 * @description
 * 
 * Identifies the codress-message heading extension. Transitional. STANAG 4406
 * (Ed. 2), Annex A, A1.6, B.110, and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-mm-codress-message ID ::= {id-mm  9}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_mm_codress_message: ID = _OID.fromParts([
    9,
], id_mm);

/* eslint-enable */
