/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_et } from "../MMSObjectIdentifiers/id-et.va.mjs";
// export { id_et } from "../MMSObjectIdentifiers/id-et.va.mjs";


/**
 * @summary id_nato_mmhs_et_forwarded_encrypted
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-et-forwarded-encrypted ID ::= {id-et  6}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_et_forwarded_encrypted: ID = _OID.fromParts([
    6,
], id_et);

/* eslint-enable */
