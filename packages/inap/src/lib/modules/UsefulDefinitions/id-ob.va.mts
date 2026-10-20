/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { operationalBinding } from "../UsefulDefinitions/operationalBinding.va.mjs";
// export { operationalBinding } from "../UsefulDefinitions/operationalBinding.va.mjs";


/**
 * @summary id_ob
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ob ID ::= operationalBinding
 * ```
 * 
 * @constant
 */
export
const id_ob: ID = operationalBinding;

/* eslint-enable */
