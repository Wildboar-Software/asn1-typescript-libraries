/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mod } from "../MMSObjectIdentifiers/id-mod.va.mjs";


/**
 * @summary id_mod_extended_body_part_types
 * @description
 * 
 * Module identifier for the military extended body parts, `{id-mod 7}`. STANAG
 * 4406 (Ed. 2), Annex A, Annex I1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mod-extended-body-part-types ID ::= {id-mod  7}
 * ```
 * 
 * @constant
 */
export
const id_mod_extended_body_part_types: ID = _OID.fromParts([
    7,
], id_mod);

/* eslint-enable */
