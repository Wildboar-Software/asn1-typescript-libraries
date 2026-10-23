/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_inScfToSsfTriggerManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-inScfToSsfTriggerManagement OBJECT IDENTIFIER ::= {id-contract inScfToSsfTriggerManagement(12)}
 * ```
 * 
 * @constant
 */
export
const id_inScfToSsfTriggerManagement: OBJECT_IDENTIFIER = _OID.fromParts([
    /* inScfToSsfTriggerManagement */ 12,
], id_contract);

/* eslint-enable */
