/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_et } from "../MMSObjectIdentifiers/id-et.va.mjs";


/**
 * @summary id_nato_mmhs_et_mm_message
 * @description
 * 
 * Data identifier for a forwarded military message that is not encrypted, or
 * that was decrypted before forwarding. STANAG 4406 (Ed. 2), Annex A, clause
 * 7.3.12.4, B1.4, and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-et-mm-message ID ::= {id-et  9}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_et_mm_message: ID = _OID.fromParts([
    9,
], id_et);

/* eslint-enable */
