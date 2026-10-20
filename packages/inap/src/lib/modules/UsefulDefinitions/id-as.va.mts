/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { abstractSyntax } from "../UsefulDefinitions/abstractSyntax.va.mjs";
// export { abstractSyntax } from "../UsefulDefinitions/abstractSyntax.va.mjs";


/**
 * @summary id_as
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as ID ::= abstractSyntax
 * ```
 * 
 * @constant
 */
export
const id_as: ID = abstractSyntax;

/* eslint-enable */
