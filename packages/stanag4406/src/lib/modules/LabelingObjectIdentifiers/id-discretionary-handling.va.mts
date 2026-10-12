/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../LabelingObjectIdentifiers/ID.ta.mjs";
import { id_informative } from "../LabelingObjectIdentifiers/id-informative.va.mjs";
// export { id_informative } from "../LabelingObjectIdentifiers/id-informative.va.mjs";


/**
 * @summary id_discretionary_handling
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-discretionary-handling ID ::= {id-informative 0}
 * ```
 * 
 * @constant
 */
export
const id_discretionary_handling: ID = _OID.fromParts([
    0,
], id_informative);

/* eslint-enable */
