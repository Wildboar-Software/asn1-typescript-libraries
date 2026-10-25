/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-CS2-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-CS2-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_contract_cusf_scf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contract-cusf-scf OBJECT IDENTIFIER ::= {id-contract 21}
 * ```
 * 
 * @constant
 */
export
const id_contract_cusf_scf: OBJECT_IDENTIFIER = _OID.fromParts([
    21,
], id_contract);

/* eslint-enable */
