/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { attributeType } from "../UsefulDefinitions/attributeType.va.mjs";
// export { attributeType } from "../UsefulDefinitions/attributeType.va.mjs";


/**
 * @summary id_at
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-at ID ::= attributeType
 * ```
 * 
 * @constant
 */
export
const id_at: ID = attributeType;

/* eslint-enable */
