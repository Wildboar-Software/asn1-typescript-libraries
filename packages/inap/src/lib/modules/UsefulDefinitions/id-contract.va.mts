/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { contract } from "../UsefulDefinitions/contract.va.mjs";
// export { contract } from "../UsefulDefinitions/contract.va.mjs";


/**
 * @summary id_contract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contract ID ::= contract
 * ```
 * 
 * @constant
 */
export
const id_contract: ID = contract;

/* eslint-enable */
