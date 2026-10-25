/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mod } from "../MMSObjectIdentifiers/id-mod.va.mjs";


/**
 * @summary id_mod_message_store_attributes
 * @description
 * 
 * Module identifier for the MM-MS attributes, `{id-mod 8}`. STANAG 4406 (Ed.
 * 2), Annex A, Annex J1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mod-message-store-attributes ID ::= {id-mod  8}
 * ```
 * 
 * @constant
 */
export
const id_mod_message_store_attributes: ID = _OID.fromParts([
    8,
], id_mod);

/* eslint-enable */
