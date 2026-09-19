/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mmhs } from "../MMSObjectIdentifiers/id-mmhs.va.mjs";
// export { id_mmhs } from "../MMSObjectIdentifiers/id-mmhs.va.mjs";


/**
 * @summary id_nat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nat ID ::= {id-mmhs  9}
 * ```
 * 
 * @constant
 */
export
const id_nat: ID = _OID.fromParts([
    9,
], id_mmhs);

/* eslint-enable */
