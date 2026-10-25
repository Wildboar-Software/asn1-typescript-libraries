/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_hat } from "../MMSObjectIdentifiers/id-hat.va.mjs";


/**
 * @summary id_nato_mmhs_hat_extended_authorisation_info
 * @description
 * 
 * Message-store attribute identifier for the extended-authorisation date-time
 * group. Single-valued, equality match. STANAG 4406 (Ed. 2), Annex A, C.2.5 and
 * Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-hat-extended-authorisation-info ID ::= {id-hat  5}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_hat_extended_authorisation_info: ID = _OID.fromParts([
    5,
], id_hat);

/* eslint-enable */
