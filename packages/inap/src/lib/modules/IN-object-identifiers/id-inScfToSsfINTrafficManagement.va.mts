/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_inScfToSsfINTrafficManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-inScfToSsfINTrafficManagement OBJECT IDENTIFIER ::= {id-contract inScfToSsfINTrafficManagement(8)}
 * ```
 * 
 * @constant
 */
export
const id_inScfToSsfINTrafficManagement: OBJECT_IDENTIFIER = _OID.fromParts([
    /* inScfToSsfINTrafficManagement */ 8,
], id_contract);

/* eslint-enable */
