/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
import { id_tag_names } from "../LabelingObjectIdentifiers/id-tag-names.va.mjs";
// export { id_tag_names } from "../LabelingObjectIdentifiers/id-tag-names.va.mjs";


/**
 * @summary id_enumerated
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-enumerated ID ::= {id-tag-names 1}
 * ```
 * 
 * @constant
 */
export
const id_enumerated: ID = _OID.fromParts([
    1,
], id_tag_names);

/* eslint-enable */
