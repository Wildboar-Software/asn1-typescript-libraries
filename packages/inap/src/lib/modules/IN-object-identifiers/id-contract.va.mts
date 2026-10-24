/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id } from "../IN-object-identifiers/id.va.mjs";
// export { id } from "../IN-object-identifiers/id.va.mjs";


/**
 * @summary id_contract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contract OBJECT IDENTIFIER ::= {id contract(26)}
 * ```
 * 
 * @constant
 */
export
const id_contract: OBJECT_IDENTIFIER = _OID.fromParts([
    /* contract */ 26,
], id);

/* eslint-enable */
