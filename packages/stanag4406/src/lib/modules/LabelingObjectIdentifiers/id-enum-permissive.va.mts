/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
import { id_enumerated } from "../LabelingObjectIdentifiers/id-enumerated.va.mjs";
// export { id_enumerated } from "../LabelingObjectIdentifiers/id-enumerated.va.mjs";


/**
 * @summary id_enum_permissive
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-enum-permissive ID ::= {id-enumerated 0}
 * ```
 * 
 * @constant
 */
export
const id_enum_permissive: ID = _OID.fromParts([
    0,
], id_enumerated);

/* eslint-enable */
