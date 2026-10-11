/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mpt } from "../MMSObjectIdentifiers/id-mpt.va.mjs";
// export { id_mpt } from "../MMSObjectIdentifiers/id-mpt.va.mjs";


/**
 * @summary id_mpt_origination
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mpt-origination ID ::= {id-mpt  0}
 * ```
 * 
 * @constant
 */
export
const id_mpt_origination: ID = _OID.fromParts([
    0,
], id_mpt);

/* eslint-enable */
