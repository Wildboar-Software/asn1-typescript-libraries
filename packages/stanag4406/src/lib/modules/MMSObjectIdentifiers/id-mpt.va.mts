/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mmhs } from "../MMSObjectIdentifiers/id-mmhs.va.mjs";
// export { id_mmhs } from "../MMSObjectIdentifiers/id-mmhs.va.mjs";


/**
 * @summary id_mpt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mpt ID ::= {id-mmhs  11}
 * ```
 * 
 * @constant
 */
export
const id_mpt: ID = _OID.fromParts([
    11,
], id_mmhs);

/* eslint-enable */
