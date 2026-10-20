/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { accessControlAttribute } from "../UsefulDefinitions/accessControlAttribute.va.mjs";
// export { accessControlAttribute } from "../UsefulDefinitions/accessControlAttribute.va.mjs";


/**
 * @summary id_aca
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aca ID ::= accessControlAttribute
 * ```
 * 
 * @constant
 */
export
const id_aca: ID = accessControlAttribute;

/* eslint-enable */
