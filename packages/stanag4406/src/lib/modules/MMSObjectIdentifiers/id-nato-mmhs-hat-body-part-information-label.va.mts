/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_hat } from "../MMSObjectIdentifiers/id-hat.va.mjs";


/**
 * @summary id_nato_mmhs_hat_body_part_information_label
 * @description
 * 
 * Message-store attribute identifier `{id-hat 18}` for a body-part security
 * label. Deprecated. STANAG 4406 (Ed. 2), Annex A, C.2.5 and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-hat-body-part-information-label ID ::= {id-hat  18}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_hat_body_part_information_label: ID = _OID.fromParts([
    18,
], id_hat);

/* eslint-enable */
