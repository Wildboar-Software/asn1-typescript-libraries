/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_mpt } from "../MMSObjectIdentifiers/id-mpt.va.mjs";
// export { id_mpt } from "../MMSObjectIdentifiers/id-mpt.va.mjs";


/**
 * @summary id_mpt_reception
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mpt-reception ID ::= {id-mpt  1}
 * ```
 * 
 * @constant
 */
export
const id_mpt_reception: ID = _OID.fromParts([
    1,
], id_mpt);

/* eslint-enable */
