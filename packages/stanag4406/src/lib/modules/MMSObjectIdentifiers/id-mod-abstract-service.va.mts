/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mod } from "../MMSObjectIdentifiers/id-mod.va.mjs";


/**
 * @summary id_mod_abstract_service
 * @description
 * 
 * Module identifier for the MMS abstract service, `{id-mod 3}`. STANAG 4406
 * (Ed. 2), Annex A, Annex G.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mod-abstract-service ID ::= {id-mod  3}
 * ```
 * 
 * @constant
 */
export
const id_mod_abstract_service: ID = _OID.fromParts([
    3,
], id_mod);

/* eslint-enable */
