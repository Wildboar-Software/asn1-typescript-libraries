/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { administrativeRoles } from "../UsefulDefinitions/administrativeRoles.va.mjs";
// export { administrativeRoles } from "../UsefulDefinitions/administrativeRoles.va.mjs";


/**
 * @summary id_ar
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ar ID ::= administrativeRoles
 * ```
 * 
 * @constant
 */
export
const id_ar: ID = administrativeRoles;

/* eslint-enable */
