/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_hat } from "../MMSObjectIdentifiers/id-hat.va.mjs";


/**
 * @summary id_nato_mmhs_hat_codress_message
 * @description
 * 
 * Message-store attribute identifier for the codress indicator. Single-valued,
 * equality match. STANAG 4406 (Ed. 2), Annex A, C.2.5 and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-hat-codress-message ID ::= {id-hat  9}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_hat_codress_message: ID = _OID.fromParts([
    9,
], id_hat);

/* eslint-enable */
