/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_cat } from "../MMSObjectIdentifiers/id-cat.va.mjs";


/**
 * @summary id_nato_mmhs_cat_atomal
 * @description
 * 
 * Deprecated special-category identifier. Edition 2 marks the value deprecated
 * and does not define a replacement under this arc. Current NATO security
 * categories are the Annex H tag sets in the ESS security label. STANAG 4406
 * (Ed. 2), Annex A, X.411 object identifiers, and Annex H.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-cat-atomal ID ::= {id-cat  1}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_cat_atomal: ID = _OID.fromParts([
    1,
], id_cat);

/* eslint-enable */
