/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_et } from "../MMSObjectIdentifiers/id-et.va.mjs";


/**
 * @summary id_nato_mmhs_et_forwarded_encrypted
 * @description
 * 
 * Data identifier for a message forwarded while still encrypted. Not for
 * inter-nation exchange except by bilateral agreement. STANAG 4406 (Ed. 2),
 * Annex A, clause 7.3.12.3, B1.3, and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-et-forwarded-encrypted ID ::= {id-et  6}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_et_forwarded_encrypted: ID = _OID.fromParts([
    6,
], id_et);

/* eslint-enable */
