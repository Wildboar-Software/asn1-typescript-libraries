/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_hat } from "../MMSObjectIdentifiers/id-hat.va.mjs";


/**
 * @summary id_nato_mmhs_hat_copy_precedence
 * @description
 * 
 * Message-store attribute identifier for copy precedence. Single-valued,
 * equality match. STANAG 4406 (Ed. 2), Annex A, C.2.5 and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-hat-copy-precedence ID ::= {id-hat  1}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_hat_copy_precedence: ID = _OID.fromParts([
    1,
], id_hat);

/* eslint-enable */
