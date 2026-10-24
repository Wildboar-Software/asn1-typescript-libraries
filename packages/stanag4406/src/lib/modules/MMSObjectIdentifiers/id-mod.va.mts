/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mmhs } from "../MMSObjectIdentifiers/id-mmhs.va.mjs";


/**
 * @summary id_mod
 * @description
 * 
 * Arc for MMHS ASN.1 module identifiers, `{id-mmhs 0}`. STANAG 4406 (Ed. 2),
 * Annex A, Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mod ID ::= {id-mmhs  0}
 * ```
 * 
 * @constant
 */
export
const id_mod: ID = _OID.fromParts([
    0,
], id_mmhs);

/* eslint-enable */
