/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_cs3 } from "../IN-CS3-object-identifiers/id-cs3.va.mjs";
// export { id_cs3 } from "../IN-CS3-object-identifiers/id-cs3.va.mjs";


/**
 * @summary id_soa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-soa OBJECT IDENTIFIER ::= {id-cs3 soa(21)}
 * ```
 * 
 * @constant
 */
export
const id_soa: OBJECT_IDENTIFIER = _OID.fromParts([
    /* soa */ 21,
], id_cs3);

/* eslint-enable */
