/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mmhs } from "../MMSObjectIdentifiers/id-mmhs.va.mjs";


/**
 * @summary id_cat
 * @description
 * 
 * Arc for the old special-category identifiers, `{id-mmhs 6}`. The values under
 * it are deprecated. Current categories are the Annex H tag sets. STANAG 4406
 * (Ed. 2), Annex A, X.411 object identifiers.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-cat ID ::= {id-mmhs  6}
 * ```
 * 
 * @constant
 */
export
const id_cat: ID = _OID.fromParts([
    6,
], id_mmhs);

/* eslint-enable */
