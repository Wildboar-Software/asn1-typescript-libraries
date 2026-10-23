/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_cs2 } from "../IN-CS2-object-identifiers/id-cs2.va.mjs";
// export { id_cs2 } from "../IN-CS2-object-identifiers/id-cs2.va.mjs";


/**
 * @summary id_contract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contract OBJECT IDENTIFIER ::= {id-cs2 contract(26)}
 * ```
 * 
 * @constant
 */
export
const id_contract: OBJECT_IDENTIFIER = _OID.fromParts([
    /* contract */ 26,
], id_cs2);

/* eslint-enable */
