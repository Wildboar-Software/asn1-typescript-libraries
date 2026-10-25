/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mmhs } from "../MMSObjectIdentifiers/id-mmhs.va.mjs";


/**
 * @summary id_mot
 * @description
 * 
 * Arc for military functional-object types, `{id-mmhs 10}`. STANAG 4406 (Ed.
 * 2), Annex A, Annex D and Annex F.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mot ID ::= {id-mmhs  10}
 * ```
 * 
 * @constant
 */
export
const id_mot: ID = _OID.fromParts([
    10,
], id_mmhs);

/* eslint-enable */
