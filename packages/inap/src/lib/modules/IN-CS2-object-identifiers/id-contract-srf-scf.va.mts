/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-CS2-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-CS2-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_contract_srf_scf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contract-srf-scf OBJECT IDENTIFIER ::= {id-contract 13}
 * ```
 * 
 * @constant
 */
export
const id_contract_srf_scf: OBJECT_IDENTIFIER = _OID.fromParts([
    13,
], id_contract);

/* eslint-enable */
