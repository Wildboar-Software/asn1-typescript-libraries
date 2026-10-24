/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-CS3-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-CS3-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_contract_dap
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contract-dap OBJECT IDENTIFIER ::= {id-contract dap(1)}
 * ```
 * 
 * @constant
 */
export
const id_contract_dap: OBJECT_IDENTIFIER = _OID.fromParts([
    /* dap */ 1,
], id_contract);

/* eslint-enable */
