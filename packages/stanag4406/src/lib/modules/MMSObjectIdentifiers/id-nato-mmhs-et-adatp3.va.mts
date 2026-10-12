/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_et } from "../MMSObjectIdentifiers/id-et.va.mjs";


/**
 * @summary id_nato_mmhs_et_adatp3
 * @description
 * 
 * Data identifier for the ADatP-3 (proforma) extended body part. STANAG 4406
 * (Ed. 2), Annex A, clause 7.3.12.1, B1.1, and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-et-adatp3 ID ::= {id-et  0}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_et_adatp3: ID = _OID.fromParts([
    0,
], id_et);

/* eslint-enable */
