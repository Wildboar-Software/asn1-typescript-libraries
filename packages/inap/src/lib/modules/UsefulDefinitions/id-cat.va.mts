/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { controlAttributeType } from "../UsefulDefinitions/controlAttributeType.va.mjs";
// export { controlAttributeType } from "../UsefulDefinitions/controlAttributeType.va.mjs";


/**
 * @summary id_cat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-cat ID ::= controlAttributeType
 * ```
 * 
 * @constant
 */
export
const id_cat: ID = controlAttributeType;

/* eslint-enable */
