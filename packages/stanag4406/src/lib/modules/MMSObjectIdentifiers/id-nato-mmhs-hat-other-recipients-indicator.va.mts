/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_hat } from "../MMSObjectIdentifiers/id-hat.va.mjs";


/**
 * @summary id_nato_mmhs_hat_other_recipients_indicator
 * @description
 * 
 * Message-store attribute identifier for one other-recipient designator.
 * Multi-valued, equality match. STANAG 4406 (Ed. 2), Annex A, C.2.5 and Annex
 * D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-hat-other-recipients-indicator ID ::= {id-hat  11}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_hat_other_recipients_indicator: ID = _OID.fromParts([
    11,
], id_hat);

/* eslint-enable */
