/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_contract_indsp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contract-indsp OBJECT IDENTIFIER ::= {id-contract indsp(14)}
 * ```
 * 
 * @constant
 */
export
const id_contract_indsp: OBJECT_IDENTIFIER = _OID.fromParts([
    /* indsp */ 14,
], id_contract);

/* eslint-enable */
