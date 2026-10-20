/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { nameForm } from "../UsefulDefinitions/nameForm.va.mjs";
// export { nameForm } from "../UsefulDefinitions/nameForm.va.mjs";


/**
 * @summary id_nf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-nf ID ::= nameForm
 * ```
 * 
 * @constant
 */
export
const id_nf: ID = nameForm;

/* eslint-enable */
