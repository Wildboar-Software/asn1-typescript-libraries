/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { in_ds } from "../IN-CS2-object-identifiers/in-ds.va.mjs";
// export { in_ds } from "../IN-CS2-object-identifiers/in-ds.va.mjs";


/**
 * @summary id_soa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-soa OBJECT IDENTIFIER ::= {in-ds 21}
 * ```
 * 
 * @constant
 */
export
const id_soa: OBJECT_IDENTIFIER = _OID.fromParts([
    21,
], in_ds);

/* eslint-enable */
