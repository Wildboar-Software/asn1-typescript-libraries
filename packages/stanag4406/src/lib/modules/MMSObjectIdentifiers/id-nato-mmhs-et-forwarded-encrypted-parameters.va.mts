/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_et } from "../MMSObjectIdentifiers/id-et.va.mjs";


/**
 * @summary id_nato_mmhs_et_forwarded_encrypted_parameters
 * @description
 * 
 * Parameters identifier for the forwarded-encrypted body part. STANAG 4406 (Ed.
 * 2), Annex A, B1.3 and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-et-forwarded-encrypted-parameters ID ::= {id-et  7}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_et_forwarded_encrypted_parameters: ID = _OID.fromParts([
    7,
], id_et);

/* eslint-enable */
