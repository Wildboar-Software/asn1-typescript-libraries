/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_ref } from "../MMSObjectIdentifiers/id-ref.va.mjs";
// export { id_ref } from "../MMSObjectIdentifiers/id-ref.va.mjs";


/**
 * @summary id_ref_secondary
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ref-secondary ID ::= {id-ref  1}
 * ```
 * 
 * @constant
 */
export
const id_ref_secondary: ID = _OID.fromParts([
    1,
], id_ref);

/* eslint-enable */
