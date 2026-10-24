/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
import { id_policy } from "../MMSObjectIdentifiers/id-policy.va.mjs";


/**
 * @summary id_policy_v1
 * @description
 * 
 * Security-policy identifier required on every message generated under the NATO
 * security policy: `{id-policy v1(1)}`, that is `1.3.26.0.4406.0.5.1`. It is
 * used only in the security-policy-identifier of an ESS security label. STANAG
 * 4406 (Ed. 2), Annex H.3.1 and H.4, and the X.411 object-identifier note in
 * Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-policy-v1 ID ::= {id-policy v1(1) }
 * ```
 * 
 * @constant
 */
export
const id_policy_v1: ID = _OID.fromParts([
    /* v1 */ 1,
], id_policy);

/* eslint-enable */
