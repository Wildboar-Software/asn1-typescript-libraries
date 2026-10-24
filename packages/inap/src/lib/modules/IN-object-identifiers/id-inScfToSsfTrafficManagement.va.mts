/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_inScfToSsfTrafficManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-inScfToSsfTrafficManagement OBJECT IDENTIFIER ::= {id-contract inScfToSsfTrafficManagement(28)}
 * ```
 * 
 * @constant
 */
export
const id_inScfToSsfTrafficManagement: OBJECT_IDENTIFIER = _OID.fromParts([
    /* inScfToSsfTrafficManagement */ 28,
], id_contract);

/* eslint-enable */
