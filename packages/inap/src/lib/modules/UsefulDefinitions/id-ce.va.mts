/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { certificateExtension } from "../UsefulDefinitions/certificateExtension.va.mjs";
// export { certificateExtension } from "../UsefulDefinitions/certificateExtension.va.mjs";


/**
 * @summary id_ce
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ce ID ::= certificateExtension
 * ```
 * 
 * @constant
 */
export
const id_ce: ID = certificateExtension;

/* eslint-enable */
