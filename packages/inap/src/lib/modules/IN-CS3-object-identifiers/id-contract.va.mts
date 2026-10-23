/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_cs3 } from "../IN-CS3-object-identifiers/id-cs3.va.mjs";
// export { id_cs3 } from "../IN-CS3-object-identifiers/id-cs3.va.mjs";


/**
 * @summary id_contract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contract OBJECT IDENTIFIER ::= {id-cs3 contract(26)}
 * ```
 * 
 * @constant
 */
export
const id_contract: OBJECT_IDENTIFIER = _OID.fromParts([
    /* contract */ 26,
], id_cs3);

/* eslint-enable */
