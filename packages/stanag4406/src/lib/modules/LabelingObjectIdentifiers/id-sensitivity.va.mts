/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
import { id_restrictive } from "../LabelingObjectIdentifiers/id-restrictive.va.mjs";
// export { id_restrictive } from "../LabelingObjectIdentifiers/id-restrictive.va.mjs";


/**
 * @summary id_sensitivity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-sensitivity ID ::= {id-restrictive 1}
 * ```
 * 
 * @constant
 */
export
const id_sensitivity: ID = _OID.fromParts([
    1,
], id_restrictive);

/* eslint-enable */
