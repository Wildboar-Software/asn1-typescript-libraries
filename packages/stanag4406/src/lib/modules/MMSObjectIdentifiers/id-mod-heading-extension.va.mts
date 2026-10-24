/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mod } from "../MMSObjectIdentifiers/id-mod.va.mjs";


/**
 * @summary id_mod_heading_extension
 * @description
 * 
 * Module identifier for the military heading extensions, `{id-mod 6}`. STANAG
 * 4406 (Ed. 2), Annex A, Annex H1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mod-heading-extension ID ::= {id-mod  6}
 * ```
 * 
 * @constant
 */
export
const id_mod_heading_extension: ID = _OID.fromParts([
    6,
], id_mod);

/* eslint-enable */
