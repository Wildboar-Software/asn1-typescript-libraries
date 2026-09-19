/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mot } from "../MMSObjectIdentifiers/id-mot.va.mjs";
// export { id_mot } from "../MMSObjectIdentifiers/id-mot.va.mjs";


/**
 * @summary id_mot_mms_ms
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mot-mms-ms ID ::= {id-mot  4}
 * ```
 * 
 * @constant
 */
export
const id_mot_mms_ms: ID = _OID.fromParts([
    4,
], id_mot);

/* eslint-enable */
