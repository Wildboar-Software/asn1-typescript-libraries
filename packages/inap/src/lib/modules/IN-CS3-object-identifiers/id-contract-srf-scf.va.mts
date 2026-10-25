/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-CS3-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-CS3-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_contract_srf_scf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contract-srf-scf OBJECT IDENTIFIER ::= {id-contract srf-scf(13)}
 * ```
 * 
 * @constant
 */
export
const id_contract_srf_scf: OBJECT_IDENTIFIER = _OID.fromParts([
    /* srf-scf */ 13,
], id_contract);

/* eslint-enable */
