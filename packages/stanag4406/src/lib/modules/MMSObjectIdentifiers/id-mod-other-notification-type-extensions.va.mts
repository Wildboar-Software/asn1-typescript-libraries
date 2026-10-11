/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mod } from "../MMSObjectIdentifiers/id-mod.va.mjs";
// export { id_mod } from "../MMSObjectIdentifiers/id-mod.va.mjs";


/**
 * @summary id_mod_other_notification_type_extensions
 * @description
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
