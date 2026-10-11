/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mpt } from "../MMSObjectIdentifiers/id-mpt.va.mjs";
// export { id_mpt } from "../MMSObjectIdentifiers/id-mpt.va.mjs";


/**
 * @summary id_mpt_management
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mpt-management ID ::= {id-mpt  2}
 * ```
 * 
 * @constant
 */
export
const id_mpt_management: ID = _OID.fromParts([
    2,
], id_mpt);

/* eslint-enable */
