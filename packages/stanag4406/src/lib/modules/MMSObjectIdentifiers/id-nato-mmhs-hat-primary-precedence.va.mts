/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_hat } from "../MMSObjectIdentifiers/id-hat.va.mjs";


/**
 * @summary id_nato_mmhs_hat_primary_precedence
 * @description
 * 
 * Message-store attribute identifier for primary precedence. Single-valued,
 * equality match. STANAG 4406 (Ed. 2), Annex A, C.2.5 and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-hat-primary-precedence ID ::= {id-hat  0}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_hat_primary_precedence: ID = _OID.fromParts([
    0,
], id_hat);

/* eslint-enable */
