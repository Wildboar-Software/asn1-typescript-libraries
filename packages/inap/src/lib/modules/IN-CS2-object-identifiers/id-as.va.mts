/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_cs2 } from "../IN-CS2-object-identifiers/id-cs2.va.mjs";
// export { id_cs2 } from "../IN-CS2-object-identifiers/id-cs2.va.mjs";


/**
 * @summary id_as
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as OBJECT IDENTIFIER ::= {id-cs2 as(5)}
 * ```
 * 
 * @constant
 */
export
const id_as: OBJECT_IDENTIFIER = _OID.fromParts([
    /* as */ 5,
], id_cs2);

/* eslint-enable */
