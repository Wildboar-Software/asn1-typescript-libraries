/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-CS2-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-CS2-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_inCs2ScfToSsfTrafficManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-inCs2ScfToSsfTrafficManagement OBJECT IDENTIFIER ::= {id-contract 8}
 * ```
 * 
 * @constant
 */
export
const id_inCs2ScfToSsfTrafficManagement: OBJECT_IDENTIFIER = _OID.fromParts([
    8,
], id_contract);

/* eslint-enable */
