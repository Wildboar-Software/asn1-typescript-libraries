/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_inScfToSsfGeneric
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-inScfToSsfGeneric OBJECT IDENTIFIER ::= {id-contract inScfToSsfGeneric(6)}
 * ```
 * 
 * @constant
 */
export
const id_inScfToSsfGeneric: OBJECT_IDENTIFIER = _OID.fromParts([
    /* inScfToSsfGeneric */ 6,
], id_contract);

/* eslint-enable */
