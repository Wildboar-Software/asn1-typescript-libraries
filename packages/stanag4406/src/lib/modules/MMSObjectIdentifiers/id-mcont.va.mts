/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mmhs } from "../MMSObjectIdentifiers/id-mmhs.va.mjs";


/**
 * @summary id_mcont
 * @description
 * 
 * Arc for military content types, `{id-mmhs 4}`. `{id-mcont 1}` is P772.
 * `{id-mcont 2}` is the Annex E compressed-data type. STANAG 4406 (Ed. 2),
 * Annex A, Annex D, and Annex E clause 4.2.6.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mcont ID ::= {id-mmhs  4}
 * ```
 * 
 * @constant
 */
export
const id_mcont: ID = _OID.fromParts([
    4,
], id_mmhs);

/* eslint-enable */
