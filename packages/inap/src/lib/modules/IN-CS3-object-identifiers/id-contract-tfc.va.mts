/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-CS3-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-CS3-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_contract_tfc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contract-tfc OBJECT IDENTIFIER ::= {id-contract tfc(22)}
 * ```
 * 
 * @constant
 */
export
const id_contract_tfc: OBJECT_IDENTIFIER = _OID.fromParts([
    /* tfc */ 22,
], id_contract);

/* eslint-enable */
