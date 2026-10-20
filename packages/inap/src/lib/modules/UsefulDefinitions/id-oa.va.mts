/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { operationalAttributeType } from "../UsefulDefinitions/operationalAttributeType.va.mjs";
// export { operationalAttributeType } from "../UsefulDefinitions/operationalAttributeType.va.mjs";


/**
 * @summary id_oa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-oa ID ::= operationalAttributeType
 * ```
 * 
 * @constant
 */
export
const id_oa: ID = operationalAttributeType;

/* eslint-enable */
