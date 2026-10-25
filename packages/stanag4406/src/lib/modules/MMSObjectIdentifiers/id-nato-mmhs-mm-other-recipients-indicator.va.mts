/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mm } from "../MMSObjectIdentifiers/id-mm.va.mjs";


/**
 * @summary id_nato_mmhs_mm_other_recipients_indicator
 * @description
 * 
 * Identifies the other-recipients-indicator heading extension (ACP 127 ZEN).
 * STANAG 4406 (Ed. 2), Annex A, A1.12, B.113, and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-mm-other-recipients-indicator ID ::= {id-mm  11}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_mm_other_recipients_indicator: ID = _OID.fromParts([
    11,
], id_mm);

/* eslint-enable */
