/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
import { id_enumerated } from "../LabelingObjectIdentifiers/id-enumerated.va.mjs";
// export { id_enumerated } from "../LabelingObjectIdentifiers/id-enumerated.va.mjs";


/**
 * @summary id_enum_restrictive
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-enum-restrictive ID ::= {id-enumerated 1}
 * ```
 * 
 * @constant
 */
export
const id_enum_restrictive: ID = _OID.fromParts([
    1,
], id_enumerated);

/* eslint-enable */
