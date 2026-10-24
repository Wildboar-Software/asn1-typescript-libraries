/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id } from "../IN-object-identifiers/id.va.mjs";
// export { id } from "../IN-object-identifiers/id.va.mjs";


/**
 * @summary id_soa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-soa OBJECT IDENTIFIER ::= {id soa(21)}
 * ```
 * 
 * @constant
 */
export
const id_soa: OBJECT_IDENTIFIER = _OID.fromParts([
    /* soa */ 21,
], id);

/* eslint-enable */
