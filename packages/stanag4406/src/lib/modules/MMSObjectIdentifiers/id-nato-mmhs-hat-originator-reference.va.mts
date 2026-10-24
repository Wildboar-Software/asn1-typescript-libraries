/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_hat } from "../MMSObjectIdentifiers/id-hat.va.mjs";


/**
 * @summary id_nato_mmhs_hat_originator_reference
 * @description
 * 
 * Message-store attribute identifier for the originator's number.
 * Single-valued, equality match. STANAG 4406 (Ed. 2), Annex A, C.2.5 and Annex
 * D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-hat-originator-reference ID ::= {id-hat  10}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_hat_originator_reference: ID = _OID.fromParts([
    10,
], id_hat);

/* eslint-enable */
