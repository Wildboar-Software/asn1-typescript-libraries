/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_cat } from "../MMSObjectIdentifiers/id-cat.va.mjs";
// export { id_cat } from "../MMSObjectIdentifiers/id-cat.va.mjs";


/**
 * @summary id_nato_mmhs_cat_atomal
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-cat-atomal ID ::= {id-cat  1}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_cat_atomal: ID = _OID.fromParts([
    1,
], id_cat);

/* eslint-enable */
