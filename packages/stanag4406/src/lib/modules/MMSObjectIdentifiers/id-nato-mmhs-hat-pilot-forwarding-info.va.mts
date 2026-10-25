/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_hat } from "../MMSObjectIdentifiers/id-hat.va.mjs";


/**
 * @summary id_nato_mmhs_hat_pilot_forwarding_info
 * @description
 * 
 * Message-store attribute identifier for one pilot-information value.
 * Multi-valued, equality match. STANAG 4406 (Ed. 2), Annex A, C.2.5 and Annex
 * D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-hat-pilot-forwarding-info ID ::= {id-hat  12}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_hat_pilot_forwarding_info: ID = _OID.fromParts([
    12,
], id_hat);

/* eslint-enable */
