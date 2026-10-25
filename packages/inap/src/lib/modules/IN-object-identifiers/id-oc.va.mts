/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id } from "../IN-object-identifiers/id.va.mjs";
// export { id } from "../IN-object-identifiers/id.va.mjs";


/**
 * @summary id_oc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-oc OBJECT IDENTIFIER ::= {id oc(6)}
 * ```
 * 
 * @constant
 */
export
const id_oc: OBJECT_IDENTIFIER = _OID.fromParts([
    /* oc */ 6,
], id);

/* eslint-enable */
