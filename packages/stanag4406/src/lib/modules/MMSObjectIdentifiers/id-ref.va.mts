/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mmhs } from "../MMSObjectIdentifiers/id-mmhs.va.mjs";


/**
 * @summary id_ref
 * @description
 * 
 * Arc for functional-object refinements, `{id-mmhs 12}`. STANAG 4406 (Ed. 2),
 * Annex A, Annex D and Annex F.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ref ID ::= {id-mmhs  12}
 * ```
 * 
 * @constant
 */
export
const id_ref: ID = _OID.fromParts([
    12,
], id_mmhs);

/* eslint-enable */
