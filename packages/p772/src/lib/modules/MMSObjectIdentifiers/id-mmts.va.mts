/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mmhs } from "../MMSObjectIdentifiers/id-mmhs.va.mjs";
// export { id_mmhs } from "../MMSObjectIdentifiers/id-mmhs.va.mjs";


/**
 * @summary id_mmts
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mmts ID ::= {id-mmhs  8}
 * ```
 * 
 * @constant
 */
export
const id_mmts: ID = _OID.fromParts([
    8,
], id_mmhs);

/* eslint-enable */
