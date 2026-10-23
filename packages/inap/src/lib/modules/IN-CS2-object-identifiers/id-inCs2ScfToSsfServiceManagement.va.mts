/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-CS2-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-CS2-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_inCs2ScfToSsfServiceManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-inCs2ScfToSsfServiceManagement OBJECT IDENTIFIER ::= {id-contract 9}
 * ```
 * 
 * @constant
 */
export
const id_inCs2ScfToSsfServiceManagement: OBJECT_IDENTIFIER = _OID.fromParts([
    9,
], id_contract);

/* eslint-enable */
