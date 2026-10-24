/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-CS3-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-CS3-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_contract_cs3cusfscfGeneric
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contract-cs3cusfscfGeneric OBJECT IDENTIFIER ::= {id-contract cusf-scf-Generic(24)}
 * ```
 * 
 * @constant
 */
export
const id_contract_cs3cusfscfGeneric: OBJECT_IDENTIFIER = _OID.fromParts([
    /* cusf-scf-Generic */ 24,
], id_contract);

/* eslint-enable */
