/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mod } from "../MMSObjectIdentifiers/id-mod.va.mjs";


/**
 * @summary id_mod_functional_objects
 * @description
 * 
 * Module identifier for the functional objects, `{id-mod 2}`. STANAG 4406 (Ed.
 * 2), Annex A, Annex F.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mod-functional-objects ID ::= {id-mod  2}
 * ```
 * 
 * @constant
 */
export
const id_mod_functional_objects: ID = _OID.fromParts([
    2,
], id_mod);

/* eslint-enable */
