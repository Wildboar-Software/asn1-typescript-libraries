/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mm } from "../MMSObjectIdentifiers/id-mm.va.mjs";


/**
 * @summary id_nato_mmhs_mm_address_list_indicator
 * @description
 * 
 * Identifies the address-list-indicator heading extension. Deprecated; national
 * systems were expected to keep using it in the short term. STANAG 4406 (Ed.
 * 2), Annex A, A1.11, B.104, and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-mm-address-list-indicator ID ::= {id-mm  3}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_mm_address_list_indicator: ID = _OID.fromParts([
    3,
], id_mm);

/* eslint-enable */
