/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { objectClass } from "../UsefulDefinitions/objectClass.va.mjs";
// export { objectClass } from "../UsefulDefinitions/objectClass.va.mjs";


/**
 * @summary id_oc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-oc ID ::= objectClass
 * ```
 * 
 * @constant
 */
export
const id_oc: ID = objectClass;

/* eslint-enable */
