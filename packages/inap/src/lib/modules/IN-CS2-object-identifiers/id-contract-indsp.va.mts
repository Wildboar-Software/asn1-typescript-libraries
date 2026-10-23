/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-CS2-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-CS2-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_contract_indsp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contract-indsp OBJECT IDENTIFIER ::= {id-contract 14}
 * ```
 * 
 * @constant
 */
export
const id_contract_indsp: OBJECT_IDENTIFIER = _OID.fromParts([
    14,
], id_contract);

/* eslint-enable */
