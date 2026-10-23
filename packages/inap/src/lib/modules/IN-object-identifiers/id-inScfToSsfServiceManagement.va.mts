/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_inScfToSsfServiceManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-inScfToSsfServiceManagement OBJECT IDENTIFIER ::= {id-contract inScfToSsfServiceManagement(9)}
 * ```
 * 
 * @constant
 */
export
const id_inScfToSsfServiceManagement: OBJECT_IDENTIFIER = _OID.fromParts([
    /* inScfToSsfServiceManagement */ 9,
], id_contract);

/* eslint-enable */
