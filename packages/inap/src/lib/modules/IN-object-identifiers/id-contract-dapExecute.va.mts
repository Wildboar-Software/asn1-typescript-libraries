/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_contract_dapExecute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contract-dapExecute OBJECT IDENTIFIER ::= {id-contract dapExecute(2)}
 * ```
 * 
 * @constant
 */
export
const id_contract_dapExecute: OBJECT_IDENTIFIER = _OID.fromParts([
    /* dapExecute */ 2,
], id_contract);

/* eslint-enable */
