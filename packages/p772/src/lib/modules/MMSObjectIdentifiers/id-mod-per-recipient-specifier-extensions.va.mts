/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mod } from "../MMSObjectIdentifiers/id-mod.va.mjs";
// export { id_mod } from "../MMSObjectIdentifiers/id-mod.va.mjs";


/**
 * @summary id_mod_per_recipient_specifier_extensions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mod-per-recipient-specifier-extensions ID ::= {id-mod  11}
 * ```
 * 
 * @constant
 */
export
const id_mod_per_recipient_specifier_extensions: ID = _OID.fromParts([
    11,
], id_mod);

/* eslint-enable */
