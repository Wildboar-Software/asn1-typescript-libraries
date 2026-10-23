/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-CS2-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-CS2-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_inCs2ScfToSsfTriggerManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-inCs2ScfToSsfTriggerManagement OBJECT IDENTIFIER ::= {id-contract 12}
 * ```
 * 
 * @constant
 */
export
const id_inCs2ScfToSsfTriggerManagement: OBJECT_IDENTIFIER = _OID.fromParts([
    12,
], id_contract);

/* eslint-enable */
