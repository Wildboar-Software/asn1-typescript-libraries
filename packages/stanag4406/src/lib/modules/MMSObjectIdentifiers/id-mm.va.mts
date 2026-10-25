/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mmhs } from "../MMSObjectIdentifiers/id-mmhs.va.mjs";


/**
 * @summary id_mm
 * @description
 * 
 * Arc for military heading-extension identifiers, `{id-mmhs 2}`. STANAG 4406
 * (Ed. 2), Annex A, Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mm ID ::= {id-mmhs  2}
 * ```
 * 
 * @constant
 */
export
const id_mm: ID = _OID.fromParts([
    2,
], id_mmhs);

/* eslint-enable */
