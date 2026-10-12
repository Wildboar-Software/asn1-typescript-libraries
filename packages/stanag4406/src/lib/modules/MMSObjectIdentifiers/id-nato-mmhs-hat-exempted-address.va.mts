/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_hat } from "../MMSObjectIdentifiers/id-hat.va.mjs";


/**
 * @summary id_nato_mmhs_hat_exempted_address
 * @description
 * 
 * Message-store attribute identifier for one exempted address. Multi-valued,
 * equality match. STANAG 4406 (Ed. 2), Annex A, C.2.5 and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-hat-exempted-address ID ::= {id-hat  4}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_hat_exempted_address: ID = _OID.fromParts([
    4,
], id_hat);

/* eslint-enable */
