/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-CS3-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-CS3-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_inCs3SsfToScfServiceManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-inCs3SsfToScfServiceManagement OBJECT IDENTIFIER ::= {id-contract inCs3SsfToScfServiceManagement(10)}
 * ```
 * 
 * @constant
 */
export
const id_inCs3SsfToScfServiceManagement: OBJECT_IDENTIFIER = _OID.fromParts([
    /* inCs3SsfToScfServiceManagement */ 10,
], id_contract);

/* eslint-enable */
