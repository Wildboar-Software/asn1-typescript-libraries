/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mmhs } from "../MMSObjectIdentifiers/id-mmhs.va.mjs";


/**
 * @summary id_hat
 * @description
 * 
 * Arc for military heading attributes of the message store, `{id-mmhs 3}`.
 * STANAG 4406 (Ed. 2), Annex A, Annex D.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-hat ID ::= {id-mmhs  3}
 * ```
 * 
 * @constant
 */
export
const id_hat: ID = _OID.fromParts([
    3,
], id_mmhs);

/* eslint-enable */
