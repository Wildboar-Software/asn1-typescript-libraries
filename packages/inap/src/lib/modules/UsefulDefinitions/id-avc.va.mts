/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { attributeValueContext } from "../UsefulDefinitions/attributeValueContext.va.mjs";
// export { attributeValueContext } from "../UsefulDefinitions/attributeValueContext.va.mjs";


/**
 * @summary id_avc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-avc ID ::= attributeValueContext
 * ```
 * 
 * @constant
 */
export
const id_avc: ID = attributeValueContext;

/* eslint-enable */
