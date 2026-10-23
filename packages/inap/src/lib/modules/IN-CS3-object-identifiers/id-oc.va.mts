/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_cs3 } from "../IN-CS3-object-identifiers/id-cs3.va.mjs";
// export { id_cs3 } from "../IN-CS3-object-identifiers/id-cs3.va.mjs";


/**
 * @summary id_oc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-oc OBJECT IDENTIFIER ::= {id-cs3 oc(6)}
 * ```
 * 
 * @constant
 */
export
const id_oc: OBJECT_IDENTIFIER = _OID.fromParts([
    /* oc */ 6,
], id_cs3);

/* eslint-enable */
