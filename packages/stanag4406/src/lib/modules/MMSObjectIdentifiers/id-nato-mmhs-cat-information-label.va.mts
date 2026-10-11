/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../MMSObjectIdentifiers/ID.ta.mjs";
import { id_cat } from "../MMSObjectIdentifiers/id-cat.va.mjs";
// export { id_cat } from "../MMSObjectIdentifiers/id-cat.va.mjs";


/**
 * @summary id_nato_mmhs_cat_information_label
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nato-mmhs-cat-information-label ID ::= {id-cat  7}
 * ```
 * 
 * @constant
 */
export
const id_nato_mmhs_cat_information_label: ID = _OID.fromParts([
    7,
], id_cat);

/* eslint-enable */
