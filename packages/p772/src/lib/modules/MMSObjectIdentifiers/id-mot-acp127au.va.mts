/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mot } from "../MMSObjectIdentifiers/id-mot.va.mjs";
// export { id_mot } from "../MMSObjectIdentifiers/id-mot.va.mjs";


/**
 * @summary id_mot_acp127au
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mot-acp127au ID ::= {id-mot  5}
 * ```
 * 
 * @constant
 */
export
const id_mot_acp127au: ID = _OID.fromParts([
    5,
], id_mot);

/* eslint-enable */
