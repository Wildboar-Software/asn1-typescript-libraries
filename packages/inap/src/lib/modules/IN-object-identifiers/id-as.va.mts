/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id } from "../IN-object-identifiers/id.va.mjs";
// export { id } from "../IN-object-identifiers/id.va.mjs";


/**
 * @summary id_as
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as OBJECT IDENTIFIER ::= {id as(5)}
 * ```
 * 
 * @constant
 */
export
const id_as: OBJECT_IDENTIFIER = _OID.fromParts([
    /* as */ 5,
], id);

/* eslint-enable */
