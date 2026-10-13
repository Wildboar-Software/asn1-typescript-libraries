/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_cat } from "../MMSObjectIdentifiers/id-cat.va.mjs";


/**
 * @summary id_nato_mmhs_cat
 * @description
 * 
 * `{id-cat 0}`, under the deprecated special-category arc. Edition 2 does not
 * describe a use for this particular value. The named categories at `{id-cat
 * 1}` and above are marked deprecated. STANAG 4406 (Ed. 2), Annex A, Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-cat ID ::= {id-cat  0}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_cat: ID = _OID.fromParts([
    0,
], id_cat);

/* eslint-enable */
