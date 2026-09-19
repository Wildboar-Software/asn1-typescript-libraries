/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mmhs } from "../MMSObjectIdentifiers/id-mmhs.va.mjs";
// export { id_mmhs } from "../MMSObjectIdentifiers/id-mmhs.va.mjs";


/**
 * @summary id_informationlabel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-informationlabel ID ::= {id-mmhs  13}
 * ```
 * 
 * @constant
 */
export
const id_informationlabel: ID = _OID.fromParts([
    13,
], id_mmhs);

/* eslint-enable */
