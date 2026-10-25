/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_contract_scfcusfGeneric
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contract-scfcusfGeneric OBJECT IDENTIFIER ::= {id-contract scf-cusf-Generic(23)}
 * ```
 * 
 * @constant
 */
export
const id_contract_scfcusfGeneric: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scf-cusf-Generic */ 23,
], id_contract);

/* eslint-enable */
