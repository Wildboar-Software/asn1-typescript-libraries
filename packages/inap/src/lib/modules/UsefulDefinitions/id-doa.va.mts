/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { dsaOperationalAttribute } from "../UsefulDefinitions/dsaOperationalAttribute.va.mjs";
// export { dsaOperationalAttribute } from "../UsefulDefinitions/dsaOperationalAttribute.va.mjs";


/**
 * @summary id_doa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-doa ID ::= dsaOperationalAttribute
 * ```
 * 
 * @constant
 */
export
const id_doa: ID = dsaOperationalAttribute;

/* eslint-enable */
