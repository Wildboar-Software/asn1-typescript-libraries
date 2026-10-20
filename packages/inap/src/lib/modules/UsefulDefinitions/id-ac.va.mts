/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { applicationContext } from "../UsefulDefinitions/applicationContext.va.mjs";
// export { applicationContext } from "../UsefulDefinitions/applicationContext.va.mjs";


/**
 * @summary id_ac
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac ID ::= applicationContext
 * ```
 * 
 * @constant
 */
export
const id_ac: ID = applicationContext;

/* eslint-enable */
