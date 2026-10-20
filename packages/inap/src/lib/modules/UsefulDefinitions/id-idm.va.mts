/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { idmProtocol } from "../UsefulDefinitions/idmProtocol.va.mjs";
// export { idmProtocol } from "../UsefulDefinitions/idmProtocol.va.mjs";


/**
 * @summary id_idm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-idm ID ::= idmProtocol
 * ```
 * 
 * @constant
 */
export
const id_idm: ID = idmProtocol;

/* eslint-enable */
