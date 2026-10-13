/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_et } from "../MMSObjectIdentifiers/id-et.va.mjs";


/**
 * @summary id_nato_mmhs_et_adatp3_parameters
 * @description
 * 
 * Parameters identifier for the ADatP-3 extended body part. STANAG 4406 (Ed.
 * 2), Annex A, B1.1 and Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-et-adatp3-parameters ID ::= {id-et  2}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_et_adatp3_parameters: ID = _OID.fromParts([
    2,
], id_et);

/* eslint-enable */
