/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_hat } from "../MMSObjectIdentifiers/id-hat.va.mjs";


/**
 * @summary id_nato_mmhs_hat_security_information_labels
 * @description
 * 
 * Message-store attribute identifier `{id-hat 19}` for security information
 * labels. Deprecated. The replacement is the ESS security label in Annex B.
 * STANAG 4406 (Ed. 2), Annex A, C.2.5 and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-hat-security-information-labels ID ::= {id-hat  19}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_hat_security_information_labels: ID = _OID.fromParts([
    19,
], id_hat);

/* eslint-enable */
