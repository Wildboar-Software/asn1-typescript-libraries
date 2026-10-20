/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { accessControlSchemes } from "../UsefulDefinitions/accessControlSchemes.va.mjs";
// export { accessControlSchemes } from "../UsefulDefinitions/accessControlSchemes.va.mjs";


/**
 * @summary id_acScheme
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-acScheme ID ::= accessControlSchemes
 * ```
 * 
 * @constant
 */
export
const id_acScheme: ID = accessControlSchemes;

/* eslint-enable */
