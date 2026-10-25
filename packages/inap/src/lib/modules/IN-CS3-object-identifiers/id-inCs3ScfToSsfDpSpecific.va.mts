/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-CS3-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-CS3-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_inCs3ScfToSsfDpSpecific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-inCs3ScfToSsfDpSpecific OBJECT IDENTIFIER ::= {id-contract inCs3ScfToSsfDpSpecific(7)}
 * ```
 * 
 * @constant
 */
export
const id_inCs3ScfToSsfDpSpecific: OBJECT_IDENTIFIER = _OID.fromParts([
    /* inCs3ScfToSsfDpSpecific */ 7,
], id_contract);

/* eslint-enable */
