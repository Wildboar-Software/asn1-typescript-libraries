/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mod } from "../MMSObjectIdentifiers/id-mod.va.mjs";


/**
 * @summary id_mod_other_notification_type_extensions
 * @description
 * 
 * Module identifier for the other-notification-type extensions, `{id-mod 12}`.
 * STANAG 4406 (Ed. 2), Annex A, Annex H3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mod-other-notification-type-extensions ID ::= {id-mod  12}
 * ```
 * 
 * @constant
 */
export
const id_mod_other_notification_type_extensions: ID = _OID.fromParts([
    12,
], id_mod);

/* eslint-enable */
