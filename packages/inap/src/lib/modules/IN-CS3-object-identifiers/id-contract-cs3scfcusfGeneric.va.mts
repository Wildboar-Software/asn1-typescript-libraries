/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-CS3-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-CS3-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_contract_cs3scfcusfGeneric
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contract-cs3scfcusfGeneric OBJECT IDENTIFIER ::= {id-contract scf-cusf-Generic(23)}
 * ```
 * 
 * @constant
 */
export
const id_contract_cs3scfcusfGeneric: OBJECT_IDENTIFIER = _OID.fromParts([
    /* scf-cusf-Generic */ 23,
], id_contract);

/* eslint-enable */
