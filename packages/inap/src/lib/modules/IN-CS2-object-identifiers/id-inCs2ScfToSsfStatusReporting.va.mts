/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-CS2-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-CS2-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_inCs2ScfToSsfStatusReporting
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-inCs2ScfToSsfStatusReporting OBJECT IDENTIFIER ::= {id-contract 11}
 * ```
 * 
 * @constant
 */
export
const id_inCs2ScfToSsfStatusReporting: OBJECT_IDENTIFIER = _OID.fromParts([
    11,
], id_contract);

/* eslint-enable */
